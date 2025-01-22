import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class QueryAccountBalanceDto {
  @ApiProperty({ description: '用户ID', required: false })
  @IsNumber()
  @IsOptional()
  userId?: number;
}
