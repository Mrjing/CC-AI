import { HttpException, HttpStatus, Inject, Injectable, Logger, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoodsOrderEntity } from './goodsOrder.entity';
import { In, Repository, IsNull, Not } from 'typeorm';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
import { query, Request } from 'express';
import { CreateGoodsOrderDto } from './dto/createGoodsOrder.dto';
import { UpdateGoodsOrderDto } from './dto/updateGoodsOrder.dto';
import { QueryGoodsOrderDto } from './dto/queryGoodsOrder.dto';

@Injectable()
export class GoodsOrderService {
  constructor(@InjectRepository(GoodsOrderEntity) private readonly goodsOrderEntity: Repository<GoodsOrderEntity>) { }

  async createGoodsOrder(data: CreateGoodsOrderDto) {
    try {
      const goodsOrderEntity = await this.goodsOrderEntity.create(data)
      const res = await this.goodsOrderEntity.save(goodsOrderEntity);
      return res;
    } catch (e) {
      console.log('createGoodsOrder e', e);
      throw e;
    }
  }

  async updateGoodsOrder(data: Partial<UpdateGoodsOrderDto>) {
    try {
      const { orderNo, ...rest } = data;
      const res = await this.goodsOrderEntity
        .createQueryBuilder()
        .update(GoodsOrderEntity)
        .set(rest)
        .where('orderNo = :orderNo', { orderNo })
        .execute();
      return res;
    } catch (e) {
      console.log('updateGoodsOrder e', e);
      throw e;
    }
  }

  async deleteGoodsOrder(orderNo: string) {
    try {
      const res = await this.goodsOrderEntity.createQueryBuilder().update({ isDeleted: true }).where('orderNo = :orderNo', { orderNo }).execute();
      return res;
    } catch (e) {
      console.log('deleteGoodsOrder e', e);
      throw e;
    }
  }

  async queryGoodsOrder(params: QueryGoodsOrderDto) {
    try {
      const { page = 1, size = 10, ...rest } = params;
      const res = await this.goodsOrderEntity
        .createQueryBuilder()
        .where(rest)
        .skip((page - 1) * size)
        .take(size)
        .orderBy('createdAt', 'DESC')
        .getManyAndCount();
      return res;
    } catch (e) {
      console.log('queryGoodsOrder e', e);
      throw e;
    }
  }

  async queryGoodsOrderByNo(orderNo: string) {
    try {
      const res = await this.goodsOrderEntity.findOne({ where: { orderNo: orderNo } });

      return res;
    } catch (e) {
      console.log('queryGoodsOrderByNo e', e);
      throw e;
    }
  }
}
