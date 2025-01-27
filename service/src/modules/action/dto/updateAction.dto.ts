import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateActionDto {
  @IsOptional()
  @IsString()
  sourceType?: string;

  @IsOptional()
  @IsNumber()
  sourceId?: number;

  @IsOptional()
  @IsString()
  targetType?: string;

  @IsOptional()
  @IsNumber()
  targetId?: number;

  @IsOptional()
  @IsString()
  actionType?: string;
}