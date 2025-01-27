import { SuperAuthGuard } from '@/common/auth/superAuth.guard';
import { GoodsService } from './goods.service';
import { UploadService } from '../upload/upload.service';
import { JwtAuthGuard } from '@/common/auth/jwtAuth.guard';
import { Body, Controller, Get, Post, Query, Req, Res, UseGuards, HttpException } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import axios from 'axios';
import { Request, Response } from 'express';
import { AdminAuthGuard } from '@/common/auth/adminAuth.guard';
import { getAuthorization } from '@/common/utils';
import { GoodsEntity } from './goods.entity';

@ApiTags('goods')
@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService, private readonly uploadService: UploadService) { }

  @ApiOperation({ summary: '创建商品' })
  @Post('createGoods')
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  async createGoods(@Body() data: GoodsEntity, @Req() req) {
    try {
      const userId = req.user.id
      const res = await this.goodsService.createGoods({ ...data })
      return res
    } catch (e) {
      console.log('createGoods e', e)
      throw e
    }
  }

  @ApiOperation({ summary: '更新商品' })
  @Post('updateGoods')
  @UseGuards(AdminAuthGuard)
  async updateGoods(@Body() data: GoodsEntity) {
    try {
      const res = await this.goodsService.updateGoods(data)
      return res
    } catch (e) {
      console.log('updateGoods e', e)
      throw e
    }
  }

  @ApiOperation({ summary: '删除商品' })
  @Post('deleteGoods')
  @UseGuards(AdminAuthGuard)
  async deleteGoods(@Query('id') id: number) {
    try {
      const res = await this.goodsService.deleteGoods(id)
      return res
    } catch (e) {
      console.log('deleteGoods e', e)
      throw e
    }
  }

  @ApiOperation({ summary: '查询商品' })
  @Post('queryGoods')
  @UseGuards(JwtAuthGuard)
  async queryGoods(@Body() data) {
    try {
      const res = await this.goodsService.queryGoods(data)
      return {
        data: res[0],
        total: res[1]
      }
    } catch (e) {
      console.log('queryGoods e', e)
      throw e
    }
  }
}