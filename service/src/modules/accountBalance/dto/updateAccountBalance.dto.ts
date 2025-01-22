import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAccountBalanceDto {
  @ApiProperty({ description: '用户ID', example: '1234567890' })
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({ description: '账户余额', example: 100 })
  @IsNotEmpty()
  @IsNumber()
  balance: number;

  @ApiProperty({ description: '已使用余额', example: 100, required: false })
  @IsOptional()
  @IsNumber()
  usedBalance: number;
}
