import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetDrawListDto {
  @ApiProperty({ example: 1, description: '查询页数', required: true })
  @IsOptional()
  page_num: number;

  @ApiProperty({ example: 10, description: '每页数量', required: true })
  @IsOptional()
  page_size: number;

  @ApiProperty({ example: 'PICTURE', description: '作画类型', required: true })
  @IsOptional()
  ai_artwork_type: string;
}
