import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateStudyResourceDto {
  @ApiProperty({ description: 'ID' })
  @IsNotEmpty({ message: 'ID不能为空' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: '学习视频名称' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: '学习视频介绍' })
  @IsOptional()
  @IsString()
  intro?: string;

  @ApiProperty({ description: '学习视频级别【基本 0 高阶 1】' })
  @IsOptional()
  @IsNumber()
  level?: number;

  @ApiProperty({ description: '学习视频分类' })
  @IsOptional()
  @IsNumber()
  category?: number;

  @ApiProperty({ description: '视频地址' })
  @IsOptional()
  @IsString()
  src?: string;

  @ApiProperty({ description: '更新者' })
  @IsNotEmpty({ message: '更新者不能为空' })
  @IsNumber()
  updateUser: number;
}
