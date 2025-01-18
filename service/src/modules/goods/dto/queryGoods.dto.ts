import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseEntity } from 'typeorm';

export class QueryGoodsDto {

  @ApiProperty({ example: 1, description: '商品ID', required: false })
  @IsOptional()
  id: number;

  @ApiProperty({ example: 1, description: '查询页数', required: false })
  @IsOptional()
  page: number;

  @ApiProperty({ example: 10, description: '每页数量', required: false })
  @IsOptional()
  size: number;

  @ApiProperty({ example: '抱枕', description: '商品名称', required: false })
  @IsOptional()
  name: string;

  @ApiProperty({ example: 1, description: '商品分类', required: false })
  @IsOptional()
  category: number;

  @ApiProperty({ example: 1, description: '商品上架状态 【0 下架 1上架】', required: false })
  @IsOptional()
  sellStatus: number;
}
