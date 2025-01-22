import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountBalanceController } from './accountBalance.controller';
import { AccountBalanceService } from './accountBalance.service';
import { AccountBalanceEntity } from './accountBalance.entity';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountBalanceEntity, UserEntity])],
  controllers: [AccountBalanceController],
  providers: [AccountBalanceService],
  exports: [AccountBalanceService],
})
export class AccountBalanceModule {}
