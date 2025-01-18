import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateActivityDto {
  @ApiProperty({ description: '活动配置ID' })
  @IsNotEmpty({ message: '活动配置ID不能为空' })
  @IsNumber()
  activityId: number;

  @ApiProperty({ description: '参与用户ID' })
  @IsNotEmpty({ message: '参与用户ID不能为空' })
  @IsNumber()
  userId: number;

  @ApiProperty({ description: '参与时间' })
  @IsNotEmpty({ message: '参与时间不能为空' })
  joinTime: Date;

  @ApiProperty({ description: '参与内容(参赛作品链接)' })
  @IsNotEmpty({ message: '参与内容不能为空' })
  @IsString()
  entry: string;
}
