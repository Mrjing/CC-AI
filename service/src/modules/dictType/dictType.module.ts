import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DictTypeService } from './dictType.service';
import { DictDataService } from '../dictData/dictData.service';
import { DictTypeEntity } from './dictType.entity';
import { DictDataEntity } from '../dictData/dictData.entity';
import { DictTypeController } from './dictType.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DictTypeEntity, DictDataEntity])],
  controllers: [DictTypeController],
  providers: [DictTypeService, DictDataService],
})
export class DictTypeModule {}
