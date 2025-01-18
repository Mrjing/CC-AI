import { HttpException, HttpStatus, Inject, Injectable, Logger, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoodsOrderItemEntity } from './goodsOrderItem.entity';
import { In, Repository, IsNull, Not } from 'typeorm';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
import { query, Request } from 'express';
import { CreateGoodsOrderItemDto } from './dto/createGoodsOrderItem.dto';
import { QueryGoodsOrderItemDto } from './dto/queryGoodsOrderItem.dto';

@Injectable()
export class GoodsOrderItemService {
  constructor(@InjectRepository(GoodsOrderItemEntity) private readonly goodsOrderItemEntity: Repository<GoodsOrderItemEntity>) {}

  async createGoodsOrderItem(data: CreateGoodsOrderItemDto) {
    try {
      const res = await this.goodsOrderItemEntity.createQueryBuilder().insert().into(GoodsOrderItemEntity).values(data).execute();
      return res;
    } catch (e) {
      console.log('createGoodsOrderItem e', e);
      throw e;
    }
  }

  async deleteGoodsOrderItem(query: QueryGoodsOrderItemDto) {
    const { orderNo } = query;

    try {
      const res = await this.goodsOrderItemEntity.createQueryBuilder().update({ isDeleted: true }).where('orderNo = :orderNo', { orderNo }).execute();
      return res;
    } catch (e) {
      console.log('deleteGoodsOrderItem e', e);
      throw e;
    }
  }

  async queryGoodsOrderItem(query: QueryGoodsOrderItemDto) {
    try {
      // console.log('queryGoodsOrderItem query', query)
      const { orderNo } = query;
      const res = await this.goodsOrderItemEntity.createQueryBuilder().where({ orderNo }).getManyAndCount();
      return res;
    } catch (e) {
      console.log('queryGoodsOrderItem e', e);
      throw e;
    }
  }

  async queryGoodsOrderItemsInOrders(orderNos: string[]) {
    try {
      const res = await this.goodsOrderItemEntity.createQueryBuilder().where('orderNo IN (:...orderNos)', { orderNos }).getMany();
      return res;
    } catch (e) {
      console.log('queryGoodsOrderItemsInOrders e', e);
      throw e;
    }
  }
}
