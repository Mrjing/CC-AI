import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateActionDto {
  @ApiProperty({ example: 'USER', description: '源实体类型', required: true })
  @IsString()
  @IsNotEmpty()
  sourceType: string;

  @ApiProperty({ example: '1', description: '源实体ID', required: true })
  @IsNumber()
  @IsNotEmpty()
  sourceId: number;

  @ApiProperty({ example: 'USRE', description: '目标实体类型', required: true })
  @IsString()
  @IsNotEmpty()
  targetType: string;

  @ApiProperty({ example: '1', description: '目标实体ID', required: true })
  @IsNumber()
  @IsNotEmpty()
  targetId: number;

  @ApiProperty({ example: 'FOLLOW', description: '动作类型', required: true })
  @IsOptional()
  actionType: string;

  @ApiProperty({ example: '评论内容', description: '交互内容', required: false })
  @IsOptional()
  actionContent: string;
}