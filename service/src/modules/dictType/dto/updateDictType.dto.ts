import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateDictTypeDto {
  @ApiProperty({ description: '字典类型ID' })
  @IsNotEmpty({ message: 'ID不能为空' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: '字典类型名称' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: '字典类型' })
  @IsOptional()
  @IsString()
  type?: string;

  @ApiProperty({ description: '字典状态' })
  @IsOptional()
  status?: number;

  @ApiProperty({ description: '字典类型描述' })
  @IsOptional()
  @IsString()
  remark?: string;

  @ApiProperty({ description: '更新者' })
  @IsNotEmpty({ message: '更新者不能为空' })
  @IsNumber()
  updateUser: number;
}
