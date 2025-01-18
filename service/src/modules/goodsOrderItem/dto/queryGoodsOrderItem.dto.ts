import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseEntity } from 'typeorm';

export class QueryGoodsOrderItemDto {
  @ApiProperty({ example: 'xxx', description: '订单no', required: true })
  orderNo: string;
}