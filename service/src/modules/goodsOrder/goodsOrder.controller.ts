import { SuperAuthGuard } from '@/common/auth/superAuth.guard';
import { GoodsService } from '../goods/goods.service';
import { GoodsOrderService } from './goodsOrder.service';
import { GoodsOrderItemService } from '../goodsOrderItem/goodsOrderItem.service';
import { PayService } from '../pay/pay.service';
import { UploadService } from '../upload/upload.service';
import { JwtAuthGuard } from '@/common/auth/jwtAuth.guard';
import { Body, Controller, Get, Post, Query, Req, Res, UseGuards, HttpException } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import axios from 'axios';
import { Request, Response } from 'express';
import { AdminAuthGuard } from '@/common/auth/adminAuth.guard';
import { getAuthorization } from '@/common/utils';
import { CreateGoodsOrderApiDto, CreateGoodsOrderDto } from './dto/createGoodsOrder.dto';
import { UpdateGoodsOrderApiDto } from './dto/updateGoodsOrder.dto';
import { createOrderId, flatMapByKey } from '@/common/utils';
import { UserService } from '../user/user.service'
import { RedisCacheService } from '../redisCache/redisCache.service'

@ApiTags('goodsOrder')
@Controller('goodsOrder')
export class GoodsOrderController {
  constructor(
    private readonly goodsOrderService: GoodsOrderService,
    private readonly goodsOrderItemService: GoodsOrderItemService,
    private readonly goodsService: GoodsService,
    private readonly uploadService: UploadService,
    private readonly payService: PayService,
    private readonly userService: UserService,
    private readonly redisCacheService: RedisCacheService
  ) { }

  @ApiOperation({ summary: '创建订单' })
  @Post('createGoodsOrder')
  @UseGuards(JwtAuthGuard)
  async createGoodsOrder(@Body() data: CreateGoodsOrderApiDto, @Req() req: Request) {
    try {
      // 创建订单
      const { channel, receiverName, receiverAddress, receiverPhone, goodsId, goodsCoverImg, goodsCount } = data;
      const userId = req.user.id;
      // 生成订单号
      const orderNo = createOrderId();
      // 查询商品信息
      const goods = await this.goodsService.queryGoodsById(goodsId);

      if (!goods) {
        throw new HttpException('商品不存在', 500);
      }

      const { sellingPrice, id } = goods;
      // 计算订单总价
      const total = sellingPrice * goodsCount;
      const createGoodsOrderRes = await this.goodsOrderService.createGoodsOrder({
        channel,
        payPlatform: 'wechat',
        orderNo,
        userId,
        total,
        payStatus: 0, // 下单时为未支付
        status: 0, // 下单时为未付款
        receiverName,
        receiverAddress,
        receiverPhone,
      });
      console.log('createGoodsOrder res', createGoodsOrderRes);
      // 创建关联订单项(使用当前查询商品信息作为快照存储)
      const createsGoodsOrderItemRes = await this.goodsOrderItemService.createGoodsOrderItem({
        orderNo,
        goodsId,
        goodsName: goods.name,
        goodsCoverImg,
        sellingPrice,
        goodsCount,
      });
      console.log('createsGoodsOrderItemRes', createsGoodsOrderItemRes);

      // 调用微信支付
      const payRes = await this.payService.pay(userId, orderNo, channel, true);
      return {
        ...payRes,
        platform: 'wechat',
        total,
        orderNo,
      };
    } catch (e) {
      console.log('createGoodsOrder e', e);
      throw e;
    }
  }

  // 商家订单发货 （Admin权限）
  @ApiOperation({ summary: '订单发货' })
  @Post('orderShipping')
  @UseGuards(AdminAuthGuard)
  async orderShipping(@Body() data: UpdateGoodsOrderApiDto, @Req() req: Request) {
    const userId = req.user.id;
    const { orderNo, expressTrackingNo } = data;

    const curOrder = await this.goodsOrderService.queryGoodsOrderByNo(orderNo);

    if (!curOrder) {
      throw new HttpException('订单不存在', 500);
    }
    // 判断当前订单状态是否为已支付，待发货
    if (curOrder.payStatus !== 1 || curOrder.status !== 1) {
      throw new HttpException('订单状态错误', 500);
    }

    // 更新订单状态为已发货
    const updateOrderRes = await this.goodsOrderService.updateGoodsOrder({
      orderNo,
      status: 2,
      expressTrackingNo,
      shippingTime: new Date(),
    });
    return updateOrderRes;
  }

  // 用户确认收货（交易完成）
  @ApiOperation({ summary: '用户确认收货' })
  @Post('completeGoodsOrder')
  @UseGuards(JwtAuthGuard)
  async completeGoodsOrder(@Body() data: UpdateGoodsOrderApiDto, @Req() req: Request) {
    const userId = req.user.id;
    const { orderNo } = data;

    const curOrder = await this.goodsOrderService.queryGoodsOrderByNo(orderNo);

    if (!curOrder) {
      throw new HttpException('订单不存在', 500);
    }

    if (curOrder.userId !== userId) {
      throw new HttpException('无权操作订单', 400);
    }
    // 判断当前订单状态是否为待收货
    if (curOrder.status !== 2) {
      throw new HttpException('订单状态错误', 500);
    }

    // 更新订单状态为交易完成
    const updateOrderRes = await this.goodsOrderService.updateGoodsOrder({
      orderNo,
      status: 3,
      completeTime: new Date(),
    });
    return updateOrderRes;
  }

  // 用户发起退款（售后处理）
  @ApiOperation({ summary: '用户申请退货退款' })
  @Post('applyAfterSale')
  @UseGuards(JwtAuthGuard)
  async applyAfterSale(@Body() data: UpdateGoodsOrderApiDto, @Req() req: Request) {
    const userId = req.user.id;
    const { orderNo } = data;

    const curOrder = await this.goodsOrderService.queryGoodsOrderByNo(orderNo);

    if (!curOrder) {
      throw new HttpException('订单不存在', 500);
    }

    if (curOrder.userId !== userId) {
      throw new HttpException('无权操作订单', 400);
    }

    // 判断当前订单状态是否为待发货或者待收货，是则允许申请退款，否则不允许
    if (curOrder.status !== 1 && curOrder.status !== 2) {
      throw new HttpException('订单状态错误', 500);
    }

    // 更新订单状态为售后服务中
    const updateOrderRes = await this.goodsOrderService.updateGoodsOrder({
      orderNo,
      status: 4,
      applyAfterSaleTime: new Date(),
    });
    return updateOrderRes;
  }

  // 商家关闭订单 （Admin权限）
  @ApiOperation({ summary: '商家关闭订单' })
  @Post('closeGoodsOrderByAdmin')
  @UseGuards(AdminAuthGuard)
  async closeGoodsOrderByAdmin(@Body() data: UpdateGoodsOrderApiDto, @Req() req: Request) {
    const userId = req.user.id;
    const { orderNo } = data;
    const curOrder = await this.goodsOrderService.queryGoodsOrderByNo(orderNo);

    // if (curOrder.userId !== userId) {
    //   throw new HttpException('无权操作订单', 400)
    // }

    // 判断当前订单状态是否为交易成功 或者 已关闭，是则不允许关闭
    if (curOrder.status === 3 || curOrder.status === 5 || curOrder.status === 6 || curOrder.status === 7) {
      throw new HttpException('订单状态错误，订单已完成交易，不允许关闭', 500);
    }

    // 更新订单状态为商家关闭
    const updateOrderRes = await this.goodsOrderService.updateGoodsOrder({
      orderNo,
      status: 7,
      closeTime: new Date(),
    });
    return updateOrderRes;
  }

  // 用户取消订单（关闭）
  @ApiOperation({ summary: '用户取消订单' })
  @Post('cancelOrder')
  @UseGuards(JwtAuthGuard)
  async cancelOrder(@Body() data: UpdateGoodsOrderApiDto, @Req() req: Request) {
    const userId = req.user.id;
    const { orderNo } = data;

    const curOrder = await this.goodsOrderService.queryGoodsOrderByNo(orderNo);

    if (!curOrder) {
      throw new HttpException('订单不存在', 500);
    }

    if (curOrder.userId !== userId) {
      throw new HttpException('无权操作订单', 400);
    }

    // 判断当前订单状态是否为待付款
    if (curOrder.status !== 0) {
      throw new HttpException('订单状态错误，当前仅支持待付款订单取消', 500);
    }

    // 更新订单状态为交易关闭（用户取消）
    const updateOrderRes = await this.goodsOrderService.updateGoodsOrder({
      orderNo,
      status: 5,
      closeTime: new Date(),
    });
    return updateOrderRes;
  }

  // @ApiOperation({ summary: '更新订单' })
  // @Post('updateGoodsOrder')
  // @UseGuards(JwtAuthGuard)
  // async updateGoodsOrder(@Body() data: any) {
  //   try {
  //     const res = await this.goodsOrderService.updateGoodsOrder(data)
  //     return res
  //   } catch (e) {
  //     console.log('updateGoodsOrder e', e)
  //     throw e
  //   }
  // }

  @ApiOperation({ summary: '删除订单' })
  @Post('deleteGoodsOrder')
  @UseGuards(JwtAuthGuard)
  async deleteGoodsOrder(@Query('orderNo') orderNo: string) {
    try {
      // 1. 删除订单关联的订单项
      const deleteOrderItemsRes = await this.goodsOrderItemService.deleteGoodsOrderItem({ orderNo });
      console.log('deleteOrderItemsRes', deleteOrderItemsRes);
      // 2. 删除订单
      const deleteOrderRes = await this.goodsOrderService.deleteGoodsOrder(orderNo);
      console.log('deleteOrderRes', deleteOrderRes);
      return {};
    } catch (e) {
      console.log('deleteGoodsOrder e', e);
      throw e;
    }
  }

  @ApiOperation({ summary: '查询订单' })
  @Post('queryGoodsOrder')
  @UseGuards(JwtAuthGuard)
  async queryGoodsOrder(@Body() body) {
    try {
      // 1. 查询订单
      const [goodsOrders, total] = await this.goodsOrderService.queryGoodsOrder(body);
      if (total === 0) {
        return {
          data: [],
          total,
        }
      }
      console.log('goodsOrders', goodsOrders);
      const userIds = goodsOrders.map((item) => item.userId);
      const users = await this.userService.queryUsersByIds(userIds);
      const usersMapById = flatMapByKey(users, 'id');
      const goodsOrdersMapByNo = flatMapByKey(goodsOrders, 'orderNo');
      const goodsOrdersNos = goodsOrders.map((item) => item.orderNo);
      console.log('goodsOrdersNos', goodsOrdersNos);
      // 2. 查询订单关联的订单项
      let data = [];
      const goodsOrderItemsMapByOrderNo = flatMapByKey(
        await this.goodsOrderItemService.queryGoodsOrderItemsInOrders(goodsOrdersNos),
        'orderNo' as any,
      );
      console.log('goodsOrderItemsMapByOrderNo', goodsOrderItemsMapByOrderNo)
      // 3. 组合返回
      for (let orderNo of goodsOrdersNos) {
        const curOrder = goodsOrdersMapByNo[orderNo][0];
        const redisKey = `order:${orderNo}:qrcode`;
        const qrcodeUrl = await this.redisCacheService.get({ key: redisKey })
        const [curUser] = usersMapById[curOrder.userId];
        data.push({
          ...curOrder,
          orderItems: goodsOrderItemsMapByOrderNo[orderNo],
          userName: curUser.name,
          qrcodeUrl
        });
      }
      return {
        total,
        data,
      };
    } catch (e) {
      console.log('queryGoodsOrder e', e);
      throw e;
    }
  }

  @ApiOperation({ summary: '根据订单号查询订单详情' })
  @Get('queryGoodsOrderByNo')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async queryGoodsOrderByNo(@Query('orderNo') orderNo: string) {
    try {
      const res = await this.goodsOrderService.queryGoodsOrderByNo(orderNo);
      return res;
    } catch (e) {
      console.log('queryGoodsOrderByNo e', e);
      throw e;
    }
  }

  @ApiOperation({ summary: '查询订单项' })
  @Get('queryGoodsOrderItem')
  @UseGuards(JwtAuthGuard)
  async queryGoodsOrderItem(@Query() query) {
    try {
      const res = await this.goodsOrderItemService.queryGoodsOrderItem(query);
      return res;
    } catch (e) {
      console.log('queryGoodsOrderItem e', e);
      throw e;
    }
  }
}
