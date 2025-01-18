import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateDictTypeDto {
  @ApiProperty({ description: '字典类型名称' })
  @IsNotEmpty({ message: '字典类型名称不能为空' })
  @IsString()
  name: string;

  @ApiProperty({ description: '字典类型' })
  @IsNotEmpty({ message: '字典类型不能为空' })
  @IsString()
  type: string;

  @ApiProperty({ description: '字典状态' })
  @IsNotEmpty({ message: '字典状态不能为空' })
  status: number;

  @ApiProperty({ description: '字典类型描述' })
  @IsOptional()
  @IsString()
  remark?: string;

  @ApiProperty({ description: '创建者' })
  @IsNotEmpty({ message: '创建者不能为空' })
  @IsNumber()
  createUser: number;
}
