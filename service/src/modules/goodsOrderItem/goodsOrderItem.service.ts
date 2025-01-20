import { HttpException, HttpStatus, Inject, Injectable, Logger, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoodsEntity } from '../goods/goods.entity'
import { GoodsOrderItemEntity } from './goodsOrderItem.entity';
import { GoodsOrderEntity } from '../goodsOrder/goodsOrder.entity'
import { In, Repository, IsNull, Not } from 'typeorm';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
import { query, Request } from 'express';
import { CreateGoodsOrderItemDto } from './dto/createGoodsOrderItem.dto';
import { QueryGoodsOrderItemDto } from './dto/queryGoodsOrderItem.dto';

@Injectable()
export class GoodsOrderItemService {
  constructor(
    @InjectRepository(GoodsOrderItemEntity)
    private readonly goodsOrderItemEntity: Repository<GoodsOrderItemEntity>,
    @InjectRepository(GoodsOrderEntity)
    private readonly goodsOrderEntity: Repository<GoodsOrderEntity>,
    @InjectRepository(GoodsEntity)
    private readonly goodsEntity: Repository<GoodsEntity>,
  ) { }

  async createGoodsOrderItem(data: CreateGoodsOrderItemDto) {
    try {
      const {
        orderNo,
        goodsId,
        goodsName,
        goodsCoverImg,
        sellingPrice,
        goodsCount } = data
      // 查找对应的 GoodsEntity实体
      const goods = await this.goodsEntity.findOne({ where: { id: data.goodsId } });
      if (!goods) {
        throw new Error('Goods not found');
      }
      // 查找对应的 GoodsOrderEntity 实体
      const order = await this.goodsOrderEntity.findOne({ where: { orderNo: data.orderNo } });
      if (!order) {
        throw new Error('Order not found');
      }
      const goodsOrderItem = await this.goodsOrderItemEntity.create({
        goodsName,
        goodsCoverImg,
        sellingPrice,
        goodsCount,
        goods,
        order
      });
      // 保存 GoodsOrderItemEntity 实体
      const res = await this.goodsOrderItemEntity.save(goodsOrderItem);
      return res;
    } catch (e) {
      console.log('createGoodsOrderItem e', e);
      throw e;
    }
  }

  async deleteGoodsOrderItem(query: QueryGoodsOrderItemDto) {
    const { orderNo } = query;

    try {
      const res = await this.goodsOrderItemEntity.createQueryBuilder().update({ isDeleted: true }).where('orderNo = :orderNo', { orderNo }).execute();
      return res;
    } catch (e) {
      console.log('deleteGoodsOrderItem e', e);
      throw e;
    }
  }

  async queryGoodsOrderItem(query: QueryGoodsOrderItemDto) {
    try {
      // console.log('queryGoodsOrderItem query', query)
      const { orderNo } = query;
      const res = await this.goodsOrderItemEntity.createQueryBuilder().where({ orderNo }).getManyAndCount();
      return res;
    } catch (e) {
      console.log('queryGoodsOrderItem e', e);
      throw e;
    }
  }

  async queryGoodsOrderItemsInOrders(orderNos: string[]) {
    try {
      const res = await this.goodsOrderItemEntity.createQueryBuilder().where('orderNo IN (:...orderNos)', { orderNos }).getMany();
      return res;
    } catch (e) {
      console.log('queryGoodsOrderItemsInOrders e', e);
      throw e;
    }
  }
}
