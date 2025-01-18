import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class QueryDictTypeDto {
  @ApiProperty({ description: '字典类型名称', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: '字典类型', required: false })
  @IsOptional()
  @IsString()
  type?: string;

  @ApiProperty({ description: '字典状态', required: false })
  @IsOptional()
  @IsNumber()
  status?: number;

  @ApiProperty({ description: '页码', required: false, default: 1 })
  @IsOptional()
  @IsNumber()
  page?: number = 1;

  @ApiProperty({ description: '每页数量', required: false, default: 10 })
  @IsOptional()
  @IsNumber()
  pageSize?: number = 10;
}
