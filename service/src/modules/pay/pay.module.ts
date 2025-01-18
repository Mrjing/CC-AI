import { Global, Module } from '@nestjs/common';
import { PayController } from './pay.controller';
import { PayService } from './pay.service';
import { OrderEntity } from '../order/order.entity';
import { CramiPackageEntity } from '../crami/cramiPackage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsEntity } from '../goods/goods.entity';
import { GoodsOrderEntity } from '../goodsOrder/goodsOrder.entity';
import { GoodsOrderItemEntity } from '../goodsOrderItem/goodsOrderItem.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, CramiPackageEntity, GoodsEntity, GoodsOrderEntity, GoodsOrderItemEntity])],
  controllers: [PayController],
  providers: [PayService],
  exports: [PayService],
})
export class PayModule {}
