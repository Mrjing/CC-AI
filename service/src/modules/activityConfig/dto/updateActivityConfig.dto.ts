import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseEntity } from 'typeorm';

export class UpdateActivityConfigDto {
  @ApiProperty({ description: '活动ID', required: true })
  id: number;

  @ApiProperty({ description: '活动名称' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({ description: '活动介绍' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  intro: string;

  @ApiProperty({ description: '参与方式' })
  @IsOptional()
  @IsNumber()
  category: number;

  @ApiProperty({ description: '活动图' })
  @IsOptional()
  @IsString()
  coverImg: string;

  @ApiProperty({ description: '活动奖励' })
  @IsOptional()
  @IsString()
  @MaxLength(512)
  activityRewards: string;

  @ApiProperty({ description: '活动开始时间' })
  @IsOptional()
  startTime: Date;

  @ApiProperty({ description: '活动结束时间' })
  @IsOptional()
  endTime: Date;

  @ApiProperty({ description: '活动状态' })
  @IsOptional()
  @IsNumber()
  @IsIn([0, 1])
  status: number;

  //   @ApiProperty({ description: '创建者' })
  //   @IsOptional()
  //   @IsNumber()
  //   createUser: number;

  @ApiProperty({ description: '更新者' })
  @IsOptional()
  @IsNumber()
  updateUser: number;
}
