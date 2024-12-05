import { IsNotEmpty, MinLength, MaxLength, IsOptional, IsPhoneNumber, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class LoginByPhoneCodeDto {
  @ApiProperty({ example: '18000000000', description: '手机号' })
  @IsNotEmpty({ message: '手机号不能为空！' })
  @IsPhoneNumber('CN', { message: '手机号格式不正确！' })
  phone: string;

  @ApiProperty({ example: '999999', description: '验证码' })
  @IsNotEmpty({ message: '验证码不能为空！' })
  @Length(6, 6, { message: '验证码长度必须为6位！' })
  code: string;
}
