import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsOrderItemService } from './goodsOrderItem.service';
import { GoodsOrderItemEntity } from './goodsOrderItem.entity';
import { GoodsOrderEntity } from '../goodsOrder/goodsOrder.entity';
import { GoodsEntity } from '../goods/goods.entity'

@Module({
  imports: [TypeOrmModule.forFeature([GoodsOrderItemEntity, GoodsOrderEntity, GoodsEntity])],
  providers: [GoodsOrderItemService],
})
export class GoodsOrderItemModule { }
