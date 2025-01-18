import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseEntity } from 'typeorm';

export class DeleteActivityConfigDto {
  @ApiProperty({ description: '活动ID' })
  @IsNotEmpty({ message: '活动ID不能为空' })
  @IsNumber()
  id: number;
}
