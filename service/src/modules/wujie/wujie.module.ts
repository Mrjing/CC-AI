import { Global, Module } from '@nestjs/common';
import { WujieController } from './wujie.controller';
import { WujieService } from './wujie.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  controllers: [WujieController],
  providers: [WujieService,],
  exports: [WujieService],
})
export class WujieModule { }
