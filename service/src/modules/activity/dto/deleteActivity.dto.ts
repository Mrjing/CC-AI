import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class DeleteActivityDto {
  @ApiProperty({ description: '活动ID' })
  @IsNotEmpty({ message: '活动ID不能为空' })
  @IsNumber()
  id: number;
}
