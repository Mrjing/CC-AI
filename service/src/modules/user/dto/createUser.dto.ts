import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty({ example: '小C', description: '真实姓名', required: false })
  @IsOptional()
  name: string;

  @ApiProperty({ example: 'username', description: '用户名', required: false })
  @IsOptional()
  username: string;

  @ApiProperty({ example: '18888888888', description: '用户手机号码', required: false })
  @IsOptional()
  phone: string;

  @ApiProperty({ example: 'J_longyan@163.com', description: '用户邮箱', required: false })
  @IsOptional()
  email: string;

  @ApiProperty({ example: '999999', description: '密码' })
  @IsNotEmpty({ message: '用户密码不能为空！' })
  @MinLength(6, { message: '用户密码最低需要大于6位数！' })
  @MaxLength(30, { message: '用户密码最长不能超过30位数！' })
  password: string;
}