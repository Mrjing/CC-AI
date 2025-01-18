import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class QueryStudyResourceDto {
  @ApiProperty({ description: '学习视频名称' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: '学习视频级别【基本 0 高阶 1】' })
  @IsOptional()
  @IsNumber()
  level?: number;

  @ApiProperty({ description: '学习视频分类' })
  @IsOptional()
  @IsNumber()
  category?: number;

  @ApiProperty({ description: '创建者' })
  @IsOptional()
  @IsNumber()
  createUser?: number;

  @ApiProperty({ description: '页码', required: false })
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiProperty({ description: '每页数量', required: false })
  @IsOptional()
  @IsNumber()
  pageSize?: number;
}
