import { SuperAuthGuard } from '@/common/auth/superAuth.guard';
import { WujieService } from './wujie.service';
import { JwtAuthGuard } from '@/common/auth/jwtAuth.guard';
import { Body, Controller, Get, Post, Query, Req, Res, UseGuards, HttpException } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import axios from 'axios';
import { Request, Response } from 'express';
import { GetDrawListDto } from './dto/getDrawList.dto';
import { AdminAuthGuard } from '@/common/auth/adminAuth.guard';
import { getAuthorization } from '@/common/utils';

@ApiTags('wujie')
@Controller('wujie')
export class WujieController {
  constructor(private readonly wujieService: WujieService) {}

  @Get('getModelInfo')
  @ApiOperation({ summary: '获取作画模型列表' })
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getModelInfo() {
    // console.log('***********')
    const authorization = getAuthorization();
    // console.log('authorization', authorization)
    try {
      const {
        data: { code, data },
        status,
      } = await axios.get('https://gate.wujieai.net/wj-open/v1/ai/model_base_infos', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authorization}`,
        },
      });
      console.log('data', data, parseInt(code));
      if (status !== 200) {
        throw new HttpException('获取模型列表失败', parseInt(code));
      }
      return data;
    } catch (e) {
      console.log('error.response.data', e.response.data);
      console.log('error.config.headers', e.config.headers);
      console.log('error.response.status', e.response.status);
      console.log('error.response.statusText', e.response.statusText);
      console.log('error.response.headers', e.response.headers);
      throw new HttpException({ desc: '获取作画模型列表' + e.response.data.message, code: e.response.data.code }, e.response.status);
    }
  }

  @ApiOperation({ summary: '创建默认作画' })
  @Post('createWithDefaultAI')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createWithDefaultAI(@Body() params: any) {
    const authorization = getAuthorization();
    try {
      const config = {
        method: 'post',
        url: 'https://gate.wujieai.net/wj-open/v1/ai/create',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authorization}`,
        },
        data: JSON.stringify(params),
      };
      const {
        data: { code, data },
        status,
      } = await axios(config);
      console.log('data', data, code);
      if (status !== 200) {
        throw new HttpException('创建默认作画失败', parseInt(code));
      }
      return data;
    } catch (e) {
      console.log('error.response.data', e.response.data);
      console.log('error.config.headers', e.config.headers);
      console.log('error.response.status', e.response.status);
      console.log('error.response.statusText', e.response.statusText);
      console.log('error.response.headers', e.response.headers);
      throw new HttpException({ desc: '创建默认作画' + e.response.data.message, code: e.response.data.code }, e.response.status);
    }
  }

  @ApiOperation({ summary: '创建MJ作画' })
  @Post('createWithMJ')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createWithMJ(@Body() params: any) {
    const authorization = getAuthorization();
    try {
      const config = {
        method: 'post',
        url: 'https://gate.wujieai.net/wj-open/v1/ai/create/midjourney',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authorization}`,
        },
        data: params,
      };
      const {
        data: { code, data },
        status,
      } = await axios(config);
      console.log('data', data, code);
      if (status !== 200) {
        throw new HttpException(
          {
            desc: '创建MJ作画失败',
            code: parseInt(code),
          },
          500,
        );
      }
      return data;
    } catch (e) {
      console.log('error.response.data', e.response.data);
      console.log('error.config.headers', e.config.headers);
      console.log('error.response.status', e.response.status);
      console.log('error.response.statusText', e.response.statusText);
      console.log('error.response.headers', e.response.headers);
      throw new HttpException({ desc: '创建MJ作画失败' + e.response.data.message, code: e.response.data.code }, e.response.status);
    }
  }

  @ApiOperation({ summary: '获取作画风格模型资源' })
  @Get('getResourseStyleModule')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getResourseStyleModule() {
    const authorization = getAuthorization();
    try {
      const config = {
        method: 'get',
        url: 'https://gate.wujieai.net/wj-open/v1/ai/default_resource_style_model',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authorization}`,
        },
      };
      const {
        data: { code, data },
        status,
      } = await axios(config);
      console.log('data', data, code);
      if (status !== 200) {
        throw new HttpException('获取作画风格模型资源失败', parseInt(code));
      }
      return data;
    } catch (e) {
      console.log('error.response.data', e.response.data);
      console.log('error.config.headers', e.config.headers);
      console.log('error.response.status', e.response.status);
      console.log('error.response.statusText', e.response.statusText);
      console.log('error.response.headers', e.response.headers);
      throw new HttpException({ desc: '获取作画风格模型资源' + e.response.data.message, code: e.response.data.code }, e.response.status);
    }
  }

  @ApiOperation({ summary: '获取作画模型预设资源' })
  @Get('getResourseModule')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getResourseModule(@Query('model') model: string) {
    const authorization = getAuthorization();
    try {
      const config = {
        method: 'get',
        url: `https://gate.wujieai.net/wj-open/v1/ai/default_resource?model=${model}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authorization}`,
        },
      };
      const {
        data: { code, data },
        status,
      } = await axios(config);
      console.log('data', data, code);
      if (status !== 200) {
        throw new HttpException('获取作画模型预设资源失败', parseInt(code));
      }
      return data;
    } catch (e) {
      console.log('error.response.data', e.response.data);
      console.log('error.config.headers', e.config.headers);
      console.log('error.response.status', e.response.status);
      console.log('error.response.statusText', e.response.statusText);
      console.log('error.response.headers', e.response.headers);
      throw new HttpException({ desc: '获取作画模型预设资源' + e.response.data.message, code: e.response.data.code }, e.response.status);
    }
  }

  @ApiOperation({ summary: '获取单个作画任务信息' })
  @Get('getDrawTaskInfo')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getDrawTaskInfo(@Query('key') key: string) {
    const authorization = getAuthorization();
    try {
      const config = {
        method: 'get',
        url: `https://gate.wujieai.net/wj-open/v1/ai/info?key=${key}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authorization}`,
        },
      };
      const {
        data: { code, data },
        status,
      } = await axios(config);
      if (status !== 200) {
        throw new HttpException('获取单个作画任务信息失败', parseInt(code));
      }
      console.log('data', data);
      return data;
    } catch (e) {
      console.log('error.response.data', e.response.data);
      console.log('error.config.headers', e.config.headers);
      console.log('error.response.status', e.response.status);
      console.log('error.response.statusText', e.response.statusText);
      console.log('error.response.headers', e.response.headers);
      throw new HttpException({ desc: '获取单个作画任务信息' + e.response.data.message, code: e.response.data.code }, e.response.status);
    }
  }

  @ApiOperation({ summary: '批量获取作画任务信息' })
  @Post('batchGetDrawTaskInfo')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async batchGetDrawTaskInfo(@Body() keys: string[]) {
    const authorization = getAuthorization();
    try {
      const config = {
        method: 'post',
        url: 'https://gate.wujieai.net/wj-open/v1/ai/generating_info',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authorization}`,
        },
        data: keys,
      };
      const {
        data: { code, data },
        status,
      } = await axios(config);
      console.log('data', data);
      if (status !== 200) {
        throw new HttpException('批量获取作画任务信息失败', parseInt(code));
      }
      return data;
    } catch (e) {
      console.log('error.response.data', e.response.data);
      console.log('error.config.headers', e.config.headers);
      console.log('error.response.status', e.response.status);
      console.log('error.response.statusText', e.response.statusText);
      console.log('error.response.headers', e.response.headers);
      throw new HttpException({ desc: '批量获取作画任务信息' + e.response.data.message, code: e.response.data.code }, e.response.status);
    }
  }

  @ApiOperation({ summary: '获取所有历史作画任务列表' })
  @Post('getDrawList')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getDrawList(@Body() body: GetDrawListDto) {
    const authorization = getAuthorization();
    try {
      const config = {
        method: 'post',
        url: 'https://gate.wujieai.net/wj-open/v1/ai/artwork/history',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authorization}`,
        },
        data: body,
      };
      const {
        data: { code, data },
        status,
      } = await axios(config);

      console.log('data', data);
      if (status !== 200) {
        throw new HttpException('获取所有历史作画任务列表失败', parseInt(code));
      }
      return data;
    } catch (e) {
      console.log('error.response.data', e.response.data);
      console.log('error.config.headers', e.config.headers);
      console.log('error.response.status', e.response.status);
      console.log('error.response.statusText', e.response.statusText);
      console.log('error.response.headers', e.response.headers);
      throw new HttpException({ desc: '获取所有历史作画任务列表' + e.response.data.message, code: e.response.data.code }, e.response.status);
    }
  }
}
