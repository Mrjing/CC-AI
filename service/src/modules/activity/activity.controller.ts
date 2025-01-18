import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/createActivity.dto';
import { DeleteActivityDto } from './dto/deleteActivity.dto';
import { QueryActivityDto } from './dto/queryActivity.dto';

@ApiTags('activity')
@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @ApiOperation({ summary: '创建活动参与记录' })
  @Post('create')
  async create(@Body() createActivityDto: CreateActivityDto) {
    return await this.activityService.create(createActivityDto);
  }

  @ApiOperation({ summary: '删除活动参与记录' })
  @Post('delete')
  async delete(@Body() deleteActivityDto: DeleteActivityDto) {
    return await this.activityService.delete(deleteActivityDto);
  }

  @ApiOperation({ summary: '查询活动参与记录' })
  @Get('list')
  async findAll(@Query() queryActivityDto: QueryActivityDto) {
    return await this.activityService.findAll(queryActivityDto);
  }
}
