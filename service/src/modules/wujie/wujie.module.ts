import { Global, Module } from '@nestjs/common';
import { WujieController } from './wujie.controller';
import { WujieService } from './wujie.service';
import { AccountBalanceService } from '../accountBalance/accountBalance.service'
import { AccountBalanceEntity } from '../accountBalance/accountBalance.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { WujieEntity } from './wujie.entity';
import { ActionEntity } from '../action/action.entity'
import { RedisCacheService } from '../redisCache/redisCache.service'
import { ActionService } from '../action/action.service'
import { NotificationService } from '../notification/notification.service'
import { NotificationGateway } from '../notification/notification.gateway'


@Global()
@Module({
  imports: [TypeOrmModule.forFeature([WujieEntity, AccountBalanceEntity, ActionEntity])],
  controllers: [WujieController],
  providers: [WujieService, AccountBalanceService, RedisCacheService, ActionService, NotificationService, NotificationGateway],
  exports: [WujieService],
})
export class WujieModule { }
