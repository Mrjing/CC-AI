import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseEntity } from 'typeorm';

export class DeleteDictTypeDto {
  @ApiProperty({ description: '字典类型ID' })
  @IsNotEmpty({ message: '字典类型ID不能为空' })
  @IsNumber()
  id: number;
}
