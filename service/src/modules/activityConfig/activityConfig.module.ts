import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityConfigService } from './activityConfig.service';
import { ActivityConfigEntity } from './activityConfig.entity';
import { ActivityConfigController } from './activityConfig.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityConfigEntity])],
  controllers: [ActivityConfigController],
  providers: [ActivityConfigService],
})
export class ActivityConfigModule {}
