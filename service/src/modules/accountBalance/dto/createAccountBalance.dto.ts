import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountBalanceDto {
  @ApiProperty({ description: 'User ID', example: '1234567890' })
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({ description: 'Account balance amount', example: 100 })
  @IsNotEmpty()
  @IsNumber()
  balance: number;

  @ApiProperty({ description: 'Account used balance amount', example: 100 })
  @IsOptional()
  @IsNumber()
  usedBalance: number;
}
