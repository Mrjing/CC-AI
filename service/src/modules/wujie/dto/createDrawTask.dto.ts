import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseEntity } from 'typeorm';

export class CreateDrawTaskDto {
  @ApiProperty({ example: '', description: '用户ID', required: true })
  userId: number;

  @ApiProperty({ description: '作画key', required: true })
  key: string;
}