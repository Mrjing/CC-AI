import { HttpException, HttpStatus, Inject, Injectable, Logger, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WujieEntity } from './wujie.entity'
import { In, Repository } from 'typeorm';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
import { Request } from 'express';
import { CreateDrawTaskDto } from './dto/createDrawTask.dto'
import { QueryDrawTaskDto } from './dto/queryDrawTask.dto'

@Injectable()
export class WujieService {
  constructor(@InjectRepository(WujieEntity) private readonly wujieEntity: Repository<WujieEntity>) { }

  async createDrawTask(params: CreateDrawTaskDto) {
    try {
      const res = await this.wujieEntity.save(params)
      console.log('res', res)
      return res
    } catch (e) {
      console.log('createDrawTask e', e)
      throw e
    }
  }

  async batchQueryDrawTasks(params: QueryDrawTaskDto) {

  }
}