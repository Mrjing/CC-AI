import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DictDataService } from './dictData.service';
import { DictDataEntity } from './dictData.entity';
import { DictDataController } from './dictData.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DictDataEntity])],
  controllers: [DictDataController],
  providers: [DictDataService],
})
export class DictDataModule {}
