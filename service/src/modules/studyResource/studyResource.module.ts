import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyResourceController } from './studyResource.controller';
import { StudyResourceService } from './studyResource.service';
import { StudyResourceEntity } from './studyResource.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudyResourceEntity])],
  controllers: [StudyResourceController],
  providers: [StudyResourceService],
})
export class StudyResourceModule {}
