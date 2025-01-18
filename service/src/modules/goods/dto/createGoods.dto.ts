import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseEntity } from 'typeorm';

export class CreateGoodsDto {
  @ApiProperty({ example: '抱枕', description: '商品名称', required: true })
  @IsNotEmpty({ message: '商品名称不能为空' })
  @IsString({ message: '字符串?' })
  @MinLength(1, { message: '最小长度?' })
  @MaxLength(32, { message: '最大长度?' })
  name: string;

  @ApiProperty({ example: '抱枕', description: '商品介绍', required: false })
  @IsOptional()
  intro: string;

  @ApiProperty({ example: 1, description: '商品分类', required: true })
  @IsNotEmpty({ message: '商品分类不能为空' })
  @IsNumber({}, { message: '数字?' })
  category: number;

  @ApiProperty({ example: 'https://www.baidu.com', description: '商品图', required: false })
  @IsOptional()
  coverImg: string;

  @ApiProperty({ example: '抱枕', description: '商品详情', required: false })
  @IsOptional()
  detail: string;

  @ApiProperty({ example: 1, description: '商品价格', required: true })
  @IsNotEmpty({ message: '商品价格不能为空' })
  @IsNumber({}, { message: '数字?' })
  originalPrice: number;

  @ApiProperty({ example: 1, description: '商品实际售价', required: true })
  @IsNotEmpty({ message: '商品实际售价不能为空' })
  @IsNumber({}, { message: '数字?' })
  sellingPrice: number;

  @ApiProperty({ example: 1, description: '商品库存', required: true })
  @IsNotEmpty({ message: '商品库存不能为空' })
  @IsNumber({}, { message: '数字?' })
  stockNum: number;

  @ApiProperty({ example: 1, description: '商品上架状态 【0 下架 1上架】', required: true })
  @IsNotEmpty({ message: '商品上架状态 【0 下架 1上架】不能为空' })
  @IsNumber({}, { message: '数字?' })
  sellStatus: number;
}
// @ApiProperty({ example: 1, description: '查询页数', required: false })
// @IsOptional()
// page: number;

// @ApiProperty({ example: 10, description: '每页数量', required: false })
// @IsOptional()
// size: number;
