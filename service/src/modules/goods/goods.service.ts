import { HttpException, HttpStatus, Inject, Injectable, Logger, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoodsEntity } from './goods.entity'
import { In, Repository, IsNull, Not } from 'typeorm';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
import { query, Request } from 'express';
import { CreateGoodsDto } from './dto/createGoods.dto'
import { UpdateGoodsDto } from './dto/updateGoods.dto'
import { QueryGoodsDto } from './dto/queryGoods.dto'

@Injectable()
export class GoodsService {
  constructor(@InjectRepository(GoodsEntity) private readonly goodsEntity: Repository<GoodsEntity>) { }

  async createGoods(data: CreateGoodsDto) {
    try {
      console.log('CreateGoodsDto data', data)
      const res = await this.goodsEntity
        .createQueryBuilder()
        .insert()
        .into(GoodsEntity)
        .values(data)
        .execute()
      return res
    } catch (e) {
      console.log('createGoods e', e)
      throw e
    }
  }

  async updateGoods(data: UpdateGoodsDto) {
    try {
      const { id, ...rest } = data
      const res = await this.goodsEntity
        .createQueryBuilder()
        .update(GoodsEntity)
        .set(rest)
        .where('id = :id', { id })
        .execute()
      return res
    } catch (e) {
      console.log('updateGoods e', e)
      throw e
    }
  }

  async deleteGoods(id: number) {
    try {
      const res = await this.goodsEntity
        .createQueryBuilder()
        .delete()
        .from(GoodsEntity)
        .where('id = :id', { id })
        .execute()
      return res
    } catch (e) {
      console.log('deleteGoods e', e)
      throw e
    }
  }

  async queryGoods(params: Partial<QueryGoodsDto>) {
    try {
      const { page, size, name, category, sellStatus } = params
      const where = {}
      if (name) {
        where['name'] = name
      }
      if (category) {
        where['category'] = category
      }
      if (sellStatus) {
        where['sellStatus'] = sellStatus
      }
      const res = await this.goodsEntity.findAndCount({
        where,
        order: { createdAt: 'DESC' },
        skip: (page - 1) * size,
        take: size,
      })
      return res
    } catch (e) {
      console.log('queryGoods e', e)
      throw e
    }
  }

  async queryGoodsById(id: number) {
    try {
      const res = await this.goodsEntity.findOne({ where: { id } })
      return res
    } catch (e) {
      console.log('queryGoodsById e', e)
      throw e
    }
  }
}