import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsOrderItemService } from './goodsOrderItem.service';
import { GoodsOrderItemEntity } from './goodsOrderItem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GoodsOrderItemEntity])],
  providers: [GoodsOrderItemService],
})
export class GoodsOrderItemModule {}
