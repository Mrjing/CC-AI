import { SuperAuthGuard } from '@/common/auth/superAuth.guard';
import { ActivityConfigService } from './activityConfig.service';
import { JwtAuthGuard } from '@/common/auth/jwtAuth.guard';
import { AdminAuthGuard } from '@/common/auth/adminAuth.guard';
import { Body, Controller, Get, Post, Query, UseGuards, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateActivityConfigDto } from './dto/createActivityConfig.dto';
import { UpdateActivityConfigDto } from './dto/updateActivityConfig.dto';
import { QueryActivityConfigDto } from './dto/queryActivityConfig.dto';
import { DeleteActivityConfigDto } from './dto/deleteActivityConfig.dto';

@ApiTags('activityConfig')
@Controller('activityConfig')
export class ActivityConfigController {
  constructor(private readonly activityConfigService: ActivityConfigService) { }

  @ApiOperation({ summary: '创建活动配置' })
  @Post('createActivityConfig')
  @UseGuards(AdminAuthGuard)
  async createActivityConfig(@Body() data: CreateActivityConfigDto, @Req() req) {
    try {
      const userId = req.user.id;
      const res = await this.activityConfigService.createActivityConfig({ ...data, createUser: userId });
      return res;
    } catch (e) {
      console.log('createActivityConfig e', e);
      throw e;
    }
  }

  @ApiOperation({ summary: '更新活动配置' })
  @Post('updateActivityConfig')
  @UseGuards(AdminAuthGuard)
  async updateActivityConfig(@Body() data: UpdateActivityConfigDto, @Req() req) {
    try {
      const res = await this.activityConfigService.updateActivityConfig({ ...data, updateUser: req.user.id });
      return res;
    } catch (e) {
      console.log('updateActivityConfig e', e);
      throw e;
    }
  }

  @ApiOperation({ summary: '删除活动配置' })
  @Post('deleteActivityConfig')
  @UseGuards(AdminAuthGuard)
  async deleteActivityConfig(@Body() data: DeleteActivityConfigDto) {
    try {
      const res = await this.activityConfigService.deleteActivityConfig(data);
      return res;
    } catch (e) {
      console.log('deleteActivityConfig e', e);
      throw e;
    }
  }

  @ApiOperation({ summary: '查询活动配置列表' })
  @Post('queryActivityConfig')
  @UseGuards(AdminAuthGuard)
  async queryActivityConfig(@Body() body: QueryActivityConfigDto) {
    try {
      const res = await this.activityConfigService.queryActivityConfig(body);
      return {
        data: res[0],
        total: res[1]
      };
    } catch (e) {
      console.log('queryActivityConfig e', e);
      throw e;
    }
  }

  @ApiOperation({ summary: '查询活动配置详情' })
  @Get('queryActivityConfigById')
  @UseGuards(AdminAuthGuard)
  async queryActivityConfigById(@Query('id') id: number) {
    try {
      const res = await this.activityConfigService.queryActivityConfigById(id);
      return res;
    } catch (e) {
      console.log('queryActivityConfigById e', e);
      throw e;
    }
  }
}
