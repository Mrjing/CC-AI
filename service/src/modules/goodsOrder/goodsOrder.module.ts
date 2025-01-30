import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsOrderController } from './goodsOrder.controller';
import { GoodsOrderService } from './goodsOrder.service';
import { GoodsOrderEntity } from './goodsOrder.entity';
import { GoodsService } from '../goods/goods.service';
import { GoodsOrderItemService } from '../goodsOrderItem/goodsOrderItem.service';
import { GoodsEntity } from '../goods/goods.entity';
import { GoodsOrderItemEntity } from '../goodsOrderItem/goodsOrderItem.entity';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';
import { RedisCacheService } from '../redisCache/redisCache.service'

@Module({
  imports: [TypeOrmModule.forFeature([GoodsOrderEntity, GoodsEntity, GoodsOrderItemEntity, UserEntity])],
  controllers: [GoodsOrderController],
  providers: [GoodsOrderService, GoodsService, GoodsOrderItemService, RedisCacheService],
})
export class GoodsOrderModule { }
