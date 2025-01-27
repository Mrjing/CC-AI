import { IsString, IsNumber, IsOptional } from 'class-validator';

export class QueryActionDto {
  @IsString()
  @IsOptional()
  sourceType: string;

  @IsNumber()
  @IsOptional()
  sourceId: number;

  @IsString()
  @IsOptional()
  targetType: string;

  @IsNumber()
  @IsOptional()
  targetId: number;

  @IsString()
  @IsOptional()
  actionType: string;
}