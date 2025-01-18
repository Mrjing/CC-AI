import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseEntity } from 'typeorm';

export class UpdateGoodsDto {
  @ApiProperty({ example: 1, description: '商品id', required: true })
  @IsNotEmpty({ message: '商品id不能为空' })
  @IsNumber({}, { message: '数字?' })
  id: number;

  @ApiProperty({ example: '抱枕', description: '商品名称', required: false })
  @IsOptional()
  name: string;

  @ApiProperty({ example: '抱枕', description: '商品介绍', required: false })
  @IsOptional()
  intro: string;

  @ApiProperty({ example: 1, description: '商品分类', required: false })
  @IsOptional()
  category: number;

  @ApiProperty({ example: 'https://www.baidu.com', description: '商品图', required: false })
  @IsOptional()
  coverImg: string;

  @ApiProperty({ example: '抱枕', description: '商品详情', required: false })
  @IsOptional()
  detail: string;

  @ApiProperty({ example: 1, description: '商品价格', required: false })
  @IsOptional()
  originalPrice: number;

  @ApiProperty({ example: 1, description: '商品实际售价', required: false })
  @IsOptional()
  sellingPrice: number;

  @ApiProperty({ example: 1, description: '商品库存', required: false })
  @IsOptional()
  stockNum: number;

  @ApiProperty({ example: 1, description: '商品上架状态 【0 下架 1上架】', required: false })
  @IsOptional()
  sellStatus: number;
}