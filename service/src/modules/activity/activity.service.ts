import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityEntity } from './activity.entity';
import { CreateActivityDto } from './dto/createActivity.dto';
import { DeleteActivityDto } from './dto/deleteActivity.dto';
import { QueryActivityDto } from './dto/queryActivity.dto';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(ActivityEntity)
    private readonly activityRepository: Repository<ActivityEntity>,
  ) {}

  // 创建活动参与记录
  async create(createActivityDto: CreateActivityDto) {
    const activity = this.activityRepository.create(createActivityDto);
    return await this.activityRepository.save(activity);
  }

  // 删除活动参与记录
  async delete(deleteActivityDto: DeleteActivityDto) {
    const { id } = deleteActivityDto;
    const activity = await this.activityRepository.findOne({ where: { id } });
    if (!activity) {
      throw new Error('活动参与记录不存在');
    }
    activity.isDeleted = true;
    return await this.activityRepository.save(activity);
  }

  // 查询活动参与记录
  async findAll(queryActivityDto: QueryActivityDto) {
    const { activityId, userId, page = 1, pageSize = 10 } = queryActivityDto;
    const query = this.activityRepository.createQueryBuilder('activity');

    if (activityId) {
      query.andWhere('activity.activity = :activity', { activityId });
    }

    if (userId) {
      query.andWhere('activity.joinUser = :joinUser', { userId });
    }

    query.andWhere('activity.isDeleted = :isDeleted', { isDeleted: false });

    const [items, total] = await query
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();

    return {
      items,
      total,
      page,
      pageSize,
    };
  }
}
