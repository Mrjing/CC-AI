import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActionEntity } from './action.entity';

import { CreateActionDto } from './dto/createAction.dto';
import { UpdateActionDto } from './dto/updateAction.dto';
import { QueryActionDto } from './dto/queryAction.dto';
import { RedisCacheService } from '../redisCache/redisCache.service'
import { NotificationService } from '../notification/notification.service';


@Injectable()
export class ActionService {
  constructor(
    @InjectRepository(ActionEntity)
    private readonly actionRepository: Repository<ActionEntity>,
    private readonly redisCacheService: RedisCacheService,
    private readonly notificationService: NotificationService,
  ) { }

  // 创建新的 Action
  async createAction(createActionDto: CreateActionDto): Promise<ActionEntity> {
    const action = this.actionRepository.create(createActionDto);
    const savedAction = await this.actionRepository.save(action);

    // 新增作品点赞-新增每个wujie作品的被点赞数并缓存
    if (createActionDto.actionType === 'LIKE' && createActionDto.targetType === 'wujie') {
      const redisKey = `target:wujie:${createActionDto.targetId}:likes`;
      await this.redisCacheService.increment(redisKey);

      // 发送 WebSocket 通知
      this.notificationService.sendNotification(createActionDto.sourceId, `You have a new ${createActionDto.actionType}`);
    }

    // 新增用户赞过-新增每个用户的点赞其他作品数并缓存
    if (createActionDto.actionType === 'LIKE' && createActionDto.sourceType === 'user') {
      const redisKey = `source:user:${createActionDto.sourceId}:likes`;
      await this.redisCacheService.increment(redisKey);
    }

    // 新增用户主动关注-新增每个用户的关注数并缓存
    if (createActionDto.actionType === 'FOLLOW' && createActionDto.sourceType === 'user') {
      const redisKey = `source:user:${createActionDto.sourceId}:follows`;
      await this.redisCacheService.increment(redisKey);
    }

    // 新增用户被关注-新增每个用户的被关注数并缓存
    if (createActionDto.actionType === 'FOLLOW' && createActionDto.targetType === 'user') {
      const redisKey = `target:user:${createActionDto.targetId}:follows`;
      await this.redisCacheService.increment(redisKey);
    }

    return savedAction;
  }

  // 获取所有 Actions
  async findAll(): Promise<ActionEntity[]> {
    return this.actionRepository.find();
  }

  // 根据 ID 获取 Action
  async findOne(id: number): Promise<ActionEntity> {
    return this.actionRepository.findOne({ where: { id } });
  }

  // 更新 Action
  async updateAction(id: number, updateActionDto: UpdateActionDto): Promise<ActionEntity> {
    await this.actionRepository.update(id, updateActionDto);
    return this.actionRepository.findOne({ where: { id } });
  }

  // 删除 Action
  async removeAction(id: number): Promise<void> {
    const action = await this.actionRepository.findOne({ where: { id } });
    if (!action) {
      throw new Error('action not found');
    }

    // 取消作品点赞-减少每个wujie作品的点赞数并缓存
    if (action.actionType === 'LIKE' && action.targetType === 'wujie') {
      const redisKey = `target:wujie:${action.targetId}:likes`;
      await this.redisCacheService.decrement(redisKey);
    }

    // 取消用户赞过-减少每个用户的点赞其他作品数并缓存
    if (action.actionType === 'LIKE' && action.sourceType === 'user') {
      const redisKey = `source:user:${action.sourceId}:likes`;
      await this.redisCacheService.decrement(redisKey);
    }

    // 取消用户主动关注-减少每个用户的关注数并缓存
    if (action.actionType === 'FOLLOW' && action.sourceType === 'user') {
      const redisKey = `source:user:${action.sourceId}:follows`;
      await this.redisCacheService.decrement(redisKey);
    }

    // 取消用户被关注-减少每个用户的被关注数并缓存
    if (action.actionType === 'FOLLOW' && action.targetType === 'user') {
      const redisKey = `target:user:${action.targetId}:follows`;
      await this.redisCacheService.decrement(redisKey);
    }

    await this.actionRepository.delete({ id });
  }

  // 条件查询Action
  async findActionByCondition(condition: QueryActionDto): Promise<ActionEntity[]> {
    return this.actionRepository.find({ where: condition });
  }
}