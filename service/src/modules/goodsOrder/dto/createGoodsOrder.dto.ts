import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseEntity } from 'typeorm';

export class CreateGoodsOrderDto {

  @ApiProperty({ example: '20210701000001', description: '订单号', required: true })
  orderNo: string;

  @ApiProperty({ example: 'native', description: '支付渠道 【native】）', required: false })
  @IsOptional()
  channel: string;

  @ApiProperty({ example: 'wechat', description: '支付平台 【wechat】）', required: false })
  @IsOptional()
  payPlatform: string;

  @ApiProperty({ example: 1, description: '用户ID', required: false })
  @IsOptional()
  userId: number;

  @ApiProperty({ example: 1, description: '订单总金额', required: true })
  @IsNotEmpty({ message: '订单总金额不能为空' })
  @IsNumber({}, { message: '数字?' })
  total: number;

  @ApiProperty({ example: 1, description: '支付状态（0：未支付、1：已支付、-1、支付失败）', required: false })
  @IsOptional()
  payStatus: number;

  // @ApiProperty({ example: '2021-07-01 00:00:00', description: '支付时间', required: false })
  // @IsOptional()
  // paidAt: Date;

  @ApiProperty({ example: 1, description: '订单状态（0：待付款、1：待发货（支付成功）、2、已发货（待收货）、3：交易成功、4：售后中（申请退货退款）、5：交易关闭-用户取消、6：交易关闭-超时取消、7：交易关闭-商家取消、9：交易关闭-完成退货退款）', required: false })
  @IsOptional()
  status: number;

  @ApiProperty({ example: '张三', description: '收货人姓名', required: true })
  @IsNotEmpty({ message: '收货人姓名不能为空' })
  @IsString({ message: '字符串?' })
  @MinLength(1, { message: '最小长度?' })
  @MaxLength(32, { message: '最大长度?' })
  receiverName: string;

  @ApiProperty({ example: '18888888888', description: '收货人电话', required: true })
  @IsNotEmpty({ message: '收货人电话不能为空' })
  @IsString({ message: '字符串?' })
  @MinLength(1, { message: '最小长度?' })
  @MaxLength(11, { message: '最大长度?' })
  receiverPhone: string;

  @ApiProperty({ example: '广东省深圳市南山区', description: '收货人地址', required: true })
  @IsNotEmpty({ message: '收货人地址不能为空' })
  @IsString({ message: '字符串?' })
  @MinLength(1, { message: '最小长度?' })
  @MaxLength(256, { message: '最大长度?' })
  receiverAddress: string;

  // @ApiProperty({ example: 1, description: '商品ID', required: true })
  // @IsNotEmpty({ message: '商品ID不能为空' })
  // goodsId: number;

  // @ApiProperty({ example: '抱枕', description: '商品名称', required: true })
  // @IsNotEmpty({ message: '商品名称不能为空' })
  // goodsName: string;

  // @ApiProperty({ example: 'https://www.baidu.com', description: '商品图', required: false })
  // @IsNotEmpty({ message: '商品图不能为空' })
  // goodsCoverImg: string;

  // @ApiProperty({ example: 1, description: '商品价格', required: true })
  // @IsNotEmpty({ message: '商品价格不能为空' })
  // sellingPrice: number;

  // @ApiProperty({ example: 1, description: '商品数量', required: true })
  // @IsNotEmpty({ message: '商品数量不能为空' })
  // goodsCount: number;
}

export class CreateGoodsOrderApiDto {
  @ApiProperty({ example: 'wechatpay', description: '支付渠道 【alipay|wechatpay】）', required: false })
  @IsOptional()
  channel: string;

  // @ApiProperty({ example: 1, description: '用户ID', required: false })
  // @IsOptional()
  // userId: number;

  // @ApiProperty({ example: 1, description: '订单总金额', required: true })
  // @IsNotEmpty({ message: '订单总金额不能为空' })
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

  @ApiProperty({ example: '张三', description: '收货人姓名', required: true })
  @IsNotEmpty({ message: '收货人姓名不能为空' })
  @IsString({ message: '字符串?' })
  @MinLength(1, { message: '最小长度?' })
  @MaxLength(32, { message: '最大长度?' })
  receiverName: string;

  @ApiProperty({ example: '18888888888', description: '收货人电话', required: true })
  @IsNotEmpty({ message: '收货人电话不能为空' })
  @IsString({ message: '字符串?' })
  @MinLength(1, { message: '最小长度?' })
  @MaxLength(11, { message: '最大长度?' })
  receiverPhone: string;

  @ApiProperty({ example: '广东省深圳市南山区', description: '收货人地址', required: true })
  @IsNotEmpty({ message: '收货人地址不能为空' })
  @IsString({ message: '字符串?' })
  @MinLength(1, { message: '最小长度?' })
  @MaxLength(256, { message: '最大长度?' })
  receiverAddress: string;

  @ApiProperty({ example: 1, description: '商品ID', required: true })
  @IsNotEmpty({ message: '商品ID不能为空' })
  goodsId: number;

  // @ApiProperty({ example: '抱枕', description: '商品名称', required: true })
  // @IsNotEmpty({ message: '商品名称不能为空' })
  // goodsName: string;

  @ApiProperty({ example: 'https://www.baidu.com', description: '商品图', required: false })
  @IsNotEmpty({ message: '商品图不能为空' })
  goodsCoverImg: string;

  // @ApiProperty({ example: 1, description: '商品价格', required: true })
  // @IsNotEmpty({ message: '商品价格不能为空' })
  // sellingPrice: number;

  @ApiProperty({ example: 1, description: '商品数量', required: true })
  @IsNotEmpty({ message: '商品数量不能为空' })
  goodsCount: number;
}