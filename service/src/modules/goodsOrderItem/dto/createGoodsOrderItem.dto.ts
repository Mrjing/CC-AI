import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseEntity } from 'typeorm';

export class CreateGoodsOrderItemDto {
  @ApiProperty({ example: 'xxx', description: '订单no', required: true })
  @IsNotEmpty({ message: '订单no不能为空' })
  orderNo: string;

  @ApiProperty({ example: 1, description: '商品ID', required: true })
  @IsNotEmpty({ message: '商品ID不能为空' })
  goodsId: number;

  @ApiProperty({ example: '抱枕', description: '商品名称', required: true })
  @IsNotEmpty({ message: '商品名称不能为空' })
  goodsName: string;

  @ApiProperty({ example: 1, description: '商品数量', required: true })
  @IsNotEmpty({ message: '商品数量不能为空' })
  goodsCount: number;

  @ApiProperty({ example: 1, description: '商品单价', required: true })
  @IsNotEmpty({ message: '商品单价不能为空' })
  @IsNumber({}, { message: '数字?' })
  sellingPrice: number;

  @ApiProperty({ example: 'http://xxx', description: '下单商品图', required: true })
  @IsNotEmpty({ message: '下单商品图不能为空' })
  goodsCoverImg: string;
}