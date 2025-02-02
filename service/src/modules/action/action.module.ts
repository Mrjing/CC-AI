import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionEntity } from './action.entity';
import { ActionService } from './action.service';
import { ActionController } from './action.controller';
import { RedisCacheService } from '../redisCache/redisCache.service'
import { NotificationService } from '../notification/notification.service'
import { NotificationGateway } from '../notification/notification.gateway'

@Module({
  imports: [TypeOrmModule.forFeature([ActionEntity])],
  providers: [ActionService, RedisCacheService, NotificationService, NotificationGateway],
  controllers: [ActionController],
  exports: [ActionService],
})
export class ActionModule { }