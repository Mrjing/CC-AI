import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';
import { GoodsOrderEntity } from '../goodsOrder/goodsOrder.entity';
import { GoodsEntity } from '../goods/goods.entity';

@Entity({ name: 'goods_order_item' })
export class GoodsOrderItemEntity extends BaseEntity {
  @OneToOne(() => GoodsOrderEntity)
  @JoinColumn({ name: 'orderNo', referencedColumnName: 'orderNo' })
  order: GoodsOrderEntity;

  @OneToOne(() => GoodsEntity)
  @JoinColumn()
  goods: GoodsEntity;

  @Column({ comment: '快照-下单时商品名称', nullable: false, default: '', length: 32 })
  goodsName: string;

  @Column({ comment: '快照-下单时商品图（如创作区实物合成图）', nullable: false, default: '', length: 255 })
  goodsCoverImg: string;

  @Column({ comment: '快照-下单时商品价格', nullable: false, default: 0 })
  sellingPrice: number;

  @Column({ comment: '快照-下单商品数量', nullable: false, default: 1 })
  goodsCount: number;

  @Column({ comment: '删除标识 【0 未删除 1 已删除】', nullable: false, default: 0 })
  isDeleted: boolean;
}
