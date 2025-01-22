import { Global, Module } from '@nestjs/common';
import { WujieController } from './wujie.controller';
import { WujieService } from './wujie.service';
import { AccountBalanceService } from '../accountBalance/accountBalance.service'
import { AccountBalanceEntity } from '../accountBalance/accountBalance.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { WujieEntity } from './wujie.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([WujieEntity, AccountBalanceEntity])],
  controllers: [WujieController],
  providers: [WujieService, AccountBalanceService],
  exports: [WujieService],
})
export class WujieModule { }
