import { HttpException, HttpStatus, Inject, Injectable, Logger, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WujieEntity } from './wujie.entity'
import { In, Repository } from 'typeorm';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
import { query, Request } from 'express';
import { CreateDrawTaskDto } from './dto/createDrawTask.dto'
import { QueryDrawTaskDto } from './dto/queryDrawTask.dto'

@Injectable()
export class WujieService {
  constructor(@InjectRepository(WujieEntity) private readonly wujieEntity: Repository<WujieEntity>) { }

  // 可能批量插入一批key的任务
  async createDrawTask(data: CreateDrawTaskDto[]) {
    try {
      const res = await this.wujieEntity
        .createQueryBuilder()
        .insert()
        .into(WujieEntity)
        .values(data)
        .execute()
      // console.log('res', res)
      return res
    } catch (e) {
      console.log('createDrawTask e', e)
      throw e
    }
  }

  async batchQueryDrawTasks(params: QueryDrawTaskDto) {
    try {
      const { page, size, userId } = params
      const where = {
        userId: userId
      }
      const res = await this.wujieEntity.findAndCount({
        where,
        order: { createdAt: 'DESC' },
        skip: (page - 1) * size,
        take: size,
      })
      return res
    } catch (e) {
      console.log('batchQueryDrawTasks e', e)
      throw e
    }
  }

  async batchQueryDrawTasksByKeys(keys: string[]) {
    try {
      const res = await this.wujieEntity.findBy({
        key: In(keys)
      })
      return res
    } catch (e) {
      console.log('batchQueryDrawTasksByKeys e', e)
      throw e
    }
  }

  async batchUpdateDrawTaskInfo(data: WujieEntity[]) {
    try {
      const updateRes = []
      for (let item of data) {
        const res = await this.wujieEntity.createQueryBuilder().update(WujieEntity).set(item).where({
          key: item.key
        }).execute()
        updateRes.push(res)
      }
      console.log('batchUpdateDrawTaskInfo finished', updateRes)
      return updateRes
    } catch (e) {
      console.log('batchUpdateDrawTaskInfo e', e)
      throw e
    }
  }
}