import { Global, Module } from '@nestjs/common';
import { WujieController } from './wujie.controller';
import { WujieService } from './wujie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WujieEntity } from './wujie.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([WujieEntity])],
  controllers: [WujieController],
  providers: [WujieService,],
  exports: [WujieService],
})
export class WujieModule { }
