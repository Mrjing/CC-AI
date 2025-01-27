import { HttpException, HttpStatus, Inject, Injectable, Logger, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WujieEntity } from './wujie.entity'
import { ActionEntity } from '../action/action.entity'
import { In, Repository, IsNull, Not } from 'typeorm';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
import { query, Request } from 'express';
import { CreateDrawTaskDto } from './dto/createDrawTask.dto'
import { QueryDrawTaskDto } from './dto/queryDrawTask.dto'
import { GlobalQueryDrawTaskDto } from './dto/globalQueryDraw.dto'
import { RedisCacheService } from '../redisCache/redisCache.service';

@Injectable()
export class WujieService {
  constructor(
    @InjectRepository(WujieEntity) private readonly wujieEntity: Repository<WujieEntity>,
    @InjectRepository(ActionEntity) private readonly actionEntity: Repository<ActionEntity>,
    private readonly redisCacheService: RedisCacheService) { }

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

  async batchQueryToTransformTasks() {
    try {
      const res = await this.wujieEntity.find({
        where: {
          status: 4,
          wujie_picture_url: Not(IsNull()),
          qcloud_cos_url: IsNull(),
        }
      })
      return res
    } catch (e) {
      console.log('batchQueryToTransformTasks e', e)
      throw e
    }
  }

  async batchQueryGlobalDrawTasks(params: GlobalQueryDrawTaskDto) {
    try {
      const { page, size } = params
      const where = {
        status: 4
      }
      const res = await this.wujieEntity.findAndCount({
        where,
        order: { createdAt: 'DESC' },
        skip: (page - 1) * size,
        take: size,
      })
      return res
    } catch (e) {
      console.log('batchQueryGlobalDrawTasks e', e)
      throw e
    }
  }

  async batchUpdateDrawTaskInfo(data: Partial<WujieEntity>[]) {
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

  async getLikesCount(targetId: number): Promise<number> {
    const redisKey = `target:wujie:${targetId}:likes`;
    let likesCount = await this.redisCacheService.get(redisKey);

    if (likesCount === null) {
      // 如果 Redis 中没有缓存，则从数据库查询并更新 Redis 缓存
      likesCount = await this.actionEntity.count({
        where: { targetType: 'wujie', targetId, actionType: 'LIKE' },
      });
      await this.redisCacheService.set(redisKey, likesCount);
    }
    return likesCount as number;
  }
}