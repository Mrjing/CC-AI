import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber } from 'class-validator';

export class QueryActivityDto {
  @ApiProperty({ description: '活动配置ID' })
  @IsOptional()
  @IsNumber()
  activityId?: number;

  @ApiProperty({ description: '参与用户ID' })
  @IsOptional()
  @IsNumber()
  userId?: number;

  @ApiProperty({ description: '页码', required: false })
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiProperty({ description: '每页数量', required: false })
  @IsOptional()
  @IsNumber()
  pageSize?: number;
}
