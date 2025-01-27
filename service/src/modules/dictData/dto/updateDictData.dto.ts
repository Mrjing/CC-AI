import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class UpdateDictDataDto {
  @ApiProperty({ description: '字典数据ID' })
  @IsNotEmpty({ message: 'ID不能为空' })
  id?: number

  @ApiProperty({ description: '字典标签' })
  @IsOptional()
  @IsString()
  @Length(1, 64)
  label?: string;

  @ApiProperty({ description: '字典键值' })
  @IsOptional()
  @IsString()
  @Length(1, 64)
  value?: string;

  //   @ApiProperty({ description: '字典类型' })
  //   @IsOptional()
  //   @IsString()
  //   @Length(1, 64)
  //   type?: string;

  @ApiProperty({ description: '状态（0正常 1停用）' })
  @IsOptional()
  @IsNumber()
  status?: number;

  @ApiProperty({ description: '备注' })
  @IsOptional()
  @IsString()
  @Length(0, 255)
  remark?: string;

  @ApiProperty({ description: '更新者' })
  @IsOptional()
  @IsNumber()
  updateUser?: number;
}
