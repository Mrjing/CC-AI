import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateStudyResourceDto {
  @ApiProperty({ description: '学习视频名称' })
  @IsNotEmpty({ message: '视频名称不能为空' })
  @IsString()
  name: string;

  @ApiProperty({ description: '学习视频介绍' })
  @IsOptional()
  @IsString()
  intro?: string;

  @ApiProperty({ description: '学习视频级别【基本 0 高阶 1】' })
  @IsNotEmpty({ message: '视频级别不能为空' })
  @IsNumber()
  level: number;

  @ApiProperty({ description: '学习视频分类' })
  @IsOptional()
  @IsNumber()
  category?: number;

  @ApiProperty({ description: '视频地址' })
  @IsOptional()
  @IsString()
  src?: string;

  @ApiProperty({ description: '创建者' })
  @IsOptional()
  @IsNumber()
  createUser: number;

  //   @ApiProperty({ description: '更新者' })
  //   @IsNotEmpty({ message: '更新者不能为空' })
  //   @IsNumber()
  //   updateUser: number;
}
