import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class CreateDictDataDto {
  @ApiProperty({ description: '字典标签' })
  @IsNotEmpty()
  @IsString()
  @Length(1, 64)
  label: string;

  @ApiProperty({ description: '字典键值' })
  @IsNotEmpty()
  @IsString()
  @Length(1, 64)
  value: string;

  @ApiProperty({ description: '字典类型' })
  @IsNotEmpty()
  @IsString()
  @Length(1, 64)
  type: string;

  @ApiProperty({ description: '状态（0正常 1停用）' })
  @IsNotEmpty()
  @IsNumber()
  status: number;

  @ApiProperty({ description: '备注' })
  @IsOptional()
  @IsString()
  @Length(0, 255)
  remark: string;

  @ApiProperty({ description: '创建者' })
  @IsOptional()
  @IsNumber()
  createUser: number;

  @ApiProperty({ description: '更新者' })
  @IsOptional()
  @IsNumber()
  updateUser: number;
}
