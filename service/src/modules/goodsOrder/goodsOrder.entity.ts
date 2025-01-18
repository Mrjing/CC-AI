import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';

@Entity({ name: 'goods_order' })
export class GoodsOrderEntity extends BaseEntity {
  @Column({ unique: true, comment: '订单号', length: 64 })
  orderNo: string;

  @Column({ comment: '支付平台【wechatpay|alipay】）', length: 32, nullable: true })
  payPlatform: string;

  @Column({ comment: '支付渠道 【native|jsapi|h5】）', length: 32, nullable: true })
  channel: string;

  @Column({ comment: '用户ID', nullable: true })
  userId: number;

  @Column({ comment: '订单总金额', type: 'decimal', scale: 2, precision: 10 })
  total: number;

  @Column({ comment: '支付状态（0：未支付、1：已支付、-1、支付失败）', default: 0 })
  payStatus: number;

  @Column({ type: 'datetime', length: 0, nullable: true, comment: '支付时间' })
  paidAt: Date;

  @Column({
    comment:
      '订单状态（0：待付款（下订单）、1：待发货（支付成功）、2、已发货（待收货）、3：交易成功（确认收货）、4：售后中（申请退货退款）、5：交易关闭-用户取消、6：交易关闭-超时取消、7：交易关闭-商家取消）',
    default: 0,
  })
  status: number;

  @Column({ comment: '收货人姓名', length: 32 })
  receiverName: string;

  @Column({ comment: '收货人电话', length: 32 })
  receiverPhone: string;

  @Column({ comment: '收货人地址', length: 256 })
  receiverAddress: string;

  @Column({ comment: '快递单号', length: 256, nullable: true })
  expressTrackingNo: string;

  @Column({ comment: '删除标识 【0 未删除 1 已删除】', nullable: false, default: 0 })
  isDeleted: boolean;

  @Column({ type: 'datetime', length: 0, nullable: true, comment: '发货时间' })
  shippingTime: Date;

  @Column({ type: 'datetime', length: 0, nullable: true, comment: '交易成功时间' })
  completeTime: Date;

  @Column({ type: 'datetime', length: 0, nullable: true, comment: '申请退货退款时间' })
  applyAfterSaleTime: Date;

  @Column({ type: 'datetime', length: 0, nullable: true, comment: '交易关闭时间' })
  closeTime: Date;

  // @Column({ comment: '商品ID', nullable: true })
  // goodsId: number;

  // @Column({ comment: '数量', default: 1 })
  // count: number;

  // @Column({ comment: '套餐价格￥', type: 'decimal', scale: 2, precision: 10 })
  // price: number;
}
