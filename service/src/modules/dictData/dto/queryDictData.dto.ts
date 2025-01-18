import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class QueryDictDataDto {
  @ApiProperty({ description: '字典类型' })
  @IsOptional()
  @IsString()
  @Length(1, 64)
  type?: string;

  @ApiProperty({ description: '状态（0正常 1停用）' })
  @IsOptional()
  @IsNumber()
  status?: number;
}
