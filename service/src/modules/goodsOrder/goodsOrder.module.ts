import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsOrderController } from './goodsOrder.controller';
import { GoodsOrderService } from './goodsOrder.service';
import { GoodsOrderEntity } from './goodsOrder.entity';
import { GoodsService } from '../goods/goods.service';
import { GoodsOrderItemService } from '../goodsOrderItem/goodsOrderItem.service';
import { GoodsEntity } from '../goods/goods.entity';
import { GoodsOrderItemEntity } from '../goodsOrderItem/goodsOrderItem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GoodsOrderEntity, GoodsEntity, GoodsOrderItemEntity])],
  controllers: [GoodsOrderController],
  providers: [GoodsOrderService, GoodsService, GoodsOrderItemService],
})
export class GoodsOrderModule {}
