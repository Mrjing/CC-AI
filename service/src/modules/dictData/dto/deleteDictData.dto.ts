import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseEntity } from 'typeorm';

export class DeleteDictDataDto {
  @ApiProperty({ description: '字典ID' })
  @IsNotEmpty({ message: '字典ID不能为空' })
  @IsNumber()
  id: number;
}
