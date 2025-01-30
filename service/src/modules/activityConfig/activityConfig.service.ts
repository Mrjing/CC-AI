import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { ActivityConfigEntity } from './activityConfig.entity';
import { CreateActivityConfigDto } from './dto/createActivityConfig.dto';
import { UpdateActivityConfigDto } from './dto/updateActivityConfig.dto';
import { QueryActivityConfigDto } from './dto/queryActivityConfig.dto';
import { DeleteActivityConfigDto } from './dto/deleteActivityConfig.dto';

@Injectable()
export class ActivityConfigService {
  constructor(
    @InjectRepository(ActivityConfigEntity)
    private readonly activityConfigEntity: Repository<ActivityConfigEntity>,
  ) { }

  async createActivityConfig(data: CreateActivityConfigDto) {
    try {
      const res = await this.activityConfigEntity.createQueryBuilder().insert().into(ActivityConfigEntity).values(data).execute();
      return res;
    } catch (e) {
      console.log('createActivityConfig e', e);
      throw e;
    }
  }

  async updateActivityConfig(data: UpdateActivityConfigDto) {
    try {
      const { id, ...rest } = data;
      const res = await this.activityConfigEntity.createQueryBuilder().update(ActivityConfigEntity).set(rest).where('id = :id', { id }).execute();
      return res;
    } catch (e) {
      console.log('updateActivityConfig e', e);
      throw e;
    }
  }

  async deleteActivityConfig(data: DeleteActivityConfigDto) {
    try {
      const { id } = data;
      const res = await this.activityConfigEntity.createQueryBuilder().delete().where('id = :id', { id }).execute();
      return res;
    } catch (e) {
      console.log('deleteActivityConfig e', e);
      throw e;
    }
  }

  async queryActivityConfig(params: QueryActivityConfigDto) {
    try {
      const { page, size, name, ...rest } = params;

      const options = {}
      const where = { ...rest }
      if (page && size) {
        options["skip"] = (page - 1) * size
        options["take"] = size
      }
      if (name) {
        where["name"] = Like(`%${name}%`)
      }

      const res = await this.activityConfigEntity.findAndCount({
        ...options,
        where,
        order: { createdAt: 'DESC' },
      })
      return res;
    } catch (e) {
      console.log('queryActivityConfig e', e);
      throw e;
    }
  }

  async queryActivityConfigById(id: number) {
    try {
      const res = await this.activityConfigEntity.findOne({ where: { id } });
      return res;
    } catch (e) {
      console.log('queryActivityConfigById e', e);
      throw e;
    }
  }
}
