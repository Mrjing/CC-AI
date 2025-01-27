import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionEntity } from './action.entity';
import { ActionService } from './action.service';
import { ActionController } from './action.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ActionEntity])],
  providers: [ActionService],
  controllers: [ActionController],
})
export class ActionModule { }