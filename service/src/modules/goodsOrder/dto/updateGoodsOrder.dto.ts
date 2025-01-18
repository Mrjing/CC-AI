import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseEntity } from 'typeorm';

export class UpdateGoodsOrderApiDto {
  // @ApiProperty({ example: 'alipay', description: '支付渠道 【alipay|wechatpay】）', required: false })
  // @IsOptional()
  // channel: string;

  @ApiProperty({ example: 'xxx', description: '订单号', required: true })
  orderNo: string;

  // @ApiProperty({ example: 1, description: '用户ID', required: false })
  // @IsOptional()
  // userId: number;

  // @ApiProperty({ example: 1, description: '订单总金额', required: false })
  // @IsOptional()
  // @IsNumber({}, { message: '数字?' })
  // total: number;

  // @ApiProperty({ example: 1, description: '支付状态（0：未支付、1：已支付、-1、支付失败）', required: false })
  // @IsOptional()
  // payStatus: number;

  // @ApiProperty({ example: '2021-07-01 00:00:00', description: '支付时间', required: false })
  // @IsOptional()
  // paidAt: Date;

  // @ApiProperty({ example: 1, description: '订单状态（0：待付款、1：待发货（支付成功）、2、已发货（待收货）、3：交易成功、4：售后中（申请退货退款）、5：交易关闭-用户取消、6：交易关闭-超时取消、7：交易关闭-商家取消、9：交易关闭-完成退货退款）', required: false })
  // @IsOptional()
  // status: number;

  @ApiProperty({ example: '张三', description: '收货人姓名', required: false })
  @IsOptional()
  receiverName: string;

  @ApiProperty({ example: '18888888888', description: '收货人电话', required: false })
  @IsOptional()
  receiverPhone: string;

  @ApiProperty({ example: '广东省深圳市南山区', description: '收货人地址', required: false })
  @IsOptional()
  receiverAddress: string;

  @ApiProperty({ example: '312839xxxxxx', description: '快递单号', required: false })
  @IsOptional()
  expressTrackingNo: string;
}

export class UpdateGoodsOrderDto {
  // @ApiProperty({ example: 'alipay', description: '支付渠道 【alipay|wechatpay】）', required: false })
  // @IsOptional()
  // channel: string;

  @ApiProperty({ example: 'xxx', description: '订单号', required: true })
  orderNo: string;

  // @ApiProperty({ example: 1, description: '用户ID', required: false })
  // @IsOptional()
  // userId: number;

  // @ApiProperty({ example: 1, description: '订单总金额', required: false })
  // @IsOptional()
  // @IsNumber({}, { message: '数字?' })
  // total: number;

  @ApiProperty({ example: 1, description: '支付状态（0：未支付、1：已支付、-1、支付失败）', required: false })
  @IsOptional()
  payStatus: number;

  @ApiProperty({ example: '2021-07-01 00:00:00', description: '支付时间', required: false })
  @IsOptional()
  paidAt: Date;

  @ApiProperty({ example: 1, description: '订单状态（0：待付款、1：待发货（支付成功）、2、已发货（待收货）、3：交易成功、4：售后中（申请退货退款）、5：交易关闭-用户取消、6：交易关闭-超时取消、7：交易关闭-商家取消、9：交易关闭-完成退货退款）', required: false })
  @IsOptional()
  status: number;

  @ApiProperty({ example: '张三', description: '收货人姓名', required: false })
  @IsOptional()
  receiverName: string;

  @ApiProperty({ example: '18888888888', description: '收货人电话', required: false })
  @IsOptional()
  receiverPhone: string;

  @ApiProperty({ example: '广东省深圳市南山区', description: '收货人地址', required: false })
  @IsOptional()
  receiverAddress: string;

  @ApiProperty({ example: '312839xxxxxx', description: '快递单号', required: false })
  @IsOptional()
  expressTrackingNo: string;

  @ApiProperty({ example: '2021-07-01 00:00:00', description: '发货时间', required: false })
  @IsOptional()
  shippingTime: Date;

  @ApiProperty({ example: '2021-07-01 00:00:00', description: '交易成功时间', required: false })
  @IsOptional()
  completeTime: Date;

  @ApiProperty({ example: '2021-07-01 00:00:00', description: '申请退货退款时间', required: false })
  @IsOptional()
  applyAfterSaleTime: Date;

  @ApiProperty({ example: '2021-07-01 00:00:00', description: '交易关闭时间', required: false })
  @IsOptional()
  closeTime: Date;
}