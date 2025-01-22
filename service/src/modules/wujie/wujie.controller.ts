import { SuperAuthGuard } from '@/common/auth/superAuth.guard';
import { WujieService } from './wujie.service';
import { UploadService } from '../upload/upload.service';
import { JwtAuthGuard } from '@/common/auth/jwtAuth.guard';
import { Body, Controller, Get, Post, Query, Req, Res, UseGuards, HttpException } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import axios from 'axios';
import { Request, Response } from 'express';
import { GetDrawListDto } from './dto/getDrawList.dto';
import { QueryDrawTaskDto } from './dto/queryDrawTask.dto';
import { GlobalQueryDrawTaskDto } from './dto/globalQueryDraw.dto'
import { AdminAuthGuard } from '@/common/auth/adminAuth.guard';
import { getAuthorization } from '@/common/utils';
import { WujieEntity } from './wujie.entity';
import { UserService } from '../user/user.service'
import { AccountBalanceService } from '../accountBalance/accountBalance.service'

@ApiTags('wujie')
@Controller('wujie')
export class WujieController {
  constructor(private readonly wujieService: WujieService, private readonly uploadService: UploadService, private readonly accountBalanceService: AccountBalanceService) { }

  @Get('getModelInfo')
  @ApiOperation({ summary: '获取作画模型列表' })
  @UseGuards(JwtAuthGuard)
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
      if (status !== 200) {
        throw new HttpException('获取模型列表失败', parseInt(code));
      }
      return data;
    } catch (e) {
      if (e.response.headers) {
        console.log('error.response.data', e.response.data);
        console.log('error.config.headers', e.config.headers);
        console.log('error.response.status', e.response.status);
        console.log('error.response.statusText', e.response.statusText);
        console.log('error.response.headers', e.response.headers);
        throw new HttpException({ desc: '获取作画模型列表' + e.response.data.message, code: e.response.data.code }, e.response.status);
      } else {
        throw e;
      }
    }
  }

  @ApiOperation({ summary: '创建默认作画' })
  @Post('createWithDefaultAI')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createWithDefaultAI(@Body() params: any, @Req() req: Request) {
    // 先校验当前用户是否有足够积分，一次默认作画要求积分大于等于0
    const { num } = params
    const user = req.user;
    const accountBalanceData = await this.accountBalanceService.findByUserId(user.id);
    if (accountBalanceData.balance === 0) {
      throw new HttpException('您的积分不足，请联系CC客服', 500);
    }
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
        data: { code, data, message },
        status,
        headers,
      } = await axios(config);

      console.log('createWithDefaultAI data', data, code, message, headers);
      // 业务状态错误码
      if (parseInt(code) !== 200) {
        throw new HttpException(code + ' ' + message, 500);
      }

      // 创建接口执行完成，扣除用户积分
      const finalBalance = accountBalanceData.balance - data.expected_integral_cost
      const updateBalanceRes = await this.accountBalanceService.update({
        userId: user.id,
        balance: finalBalance <= 0 ? 0 : finalBalance,
        usedBalance: accountBalanceData.usedBalance + data.expected_integral_cost,
      });
      console.log('updateBalanceRes', updateBalanceRes);

      // // 录入 wujie 任务表
      console.log('user', req.user.id);
      const { keys } = data;
      await this.wujieService.createDrawTask(
        keys.map((item) => ({
          userId: req.user.id,
          key: item,
          input_model_prompt: params.prompt,
        })),
      );

      return data;
    } catch (e) {
      if (e.response.headers) {
        console.log('error.response.data', e.response.data);
        console.log('error.config.headers', e.config.headers);
        console.log('error.response.status', e.response.status);
        console.log('error.response.statusText', e.response.statusText);
        console.log('error.response.headers', e.response.headers);
        throw new HttpException({ desc: '创建默认作画失败：' + e.response.data.message, code: e.response.data.code }, e.response.status);
      } else {
        throw e;
      }
    }
  }

  @ApiOperation({ summary: '创建MJ作画' })
  @Post('createWithMJ')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createWithMJ(@Body() params: any, @Req() req: Request) {
    // 先校验当前用户是否有足够积分，一次MJ作画要求积分大于等于 8（四张图，一张消耗2积分）
    const user = req.user;
    const accountBalanceData = await this.accountBalanceService.findByUserId(user.id);
    if (accountBalanceData.balance === 0) {
      throw new HttpException('您的积分不足，请联系CC客服', 500);
    }

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
        data: { code, data, message },
        status,
        headers,
      } = await axios(config);
      console.log('createWithMJ data', config, data, code, message, headers);
      // 业务状态错误码
      if (parseInt(code) !== 200) {
        throw new HttpException(code + ' ' + message, 500);
      }

      // 创建接口执行完成，扣除用户积分
      const finalBalance = accountBalanceData.balance - data.expected_integral_cost
      const updateBalanceRes = await this.accountBalanceService.update({
        userId: user.id,
        balance: finalBalance <= 0 ? 0 : finalBalance,
        usedBalance: accountBalanceData.usedBalance + data.expected_integral_cost,
      });
      console.log('updateBalanceRes', updateBalanceRes);

      // // 录入 wujie 任务表
      console.log('user', req.user.id);
      const { keys } = data;
      await this.wujieService.createDrawTask(
        keys.map((item) => ({
          userId: req.user.id,
          key: item,
          input_model_prompt: params.prompt,
        })),
      );
      return data;
    } catch (e) {
      if (e.response.headers) {
        console.log('error.response.data', e.response.data);
        console.log('error.config.headers', e.config.headers);
        console.log('error.response.status', e.response.status);
        console.log('error.response.statusText', e.response.statusText);
        console.log('error.response.headers', e.response.headers);
        throw new HttpException({ desc: '创建MJ作画失败：' + e.response.data.message, code: e.response.data.code }, e.response.status);
      } else {
        throw e;
      }
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
      if (status !== 200) {
        throw new HttpException('获取作画风格模型资源失败', parseInt(code));
      }
      return data;
    } catch (e) {
      if (e.response.headers) {
        console.log('error.response.data', e.response.data);
        console.log('error.config.headers', e.config.headers);
        console.log('error.response.status', e.response.status);
        console.log('error.response.statusText', e.response.statusText);
        console.log('error.response.headers', e.response.headers);
        throw new HttpException({ desc: '获取作画风格模型资源' + e.response.data.message, code: e.response.data.code }, e.response.status);
      } else {
        throw e;
      }
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
      if (status !== 200) {
        throw new HttpException('获取作画模型预设资源失败', parseInt(code));
      }
      return data;
    } catch (e) {
      if (e.response.headers) {
        console.log('error.response.data', e.response.data);
        console.log('error.config.headers', e.config.headers);
        console.log('error.response.status', e.response.status);
        console.log('error.response.statusText', e.response.statusText);
        console.log('error.response.headers', e.response.headers);
        throw new HttpException({ desc: '获取作画模型预设资源' + e.response.data.message, code: e.response.data.code }, e.response.status);
      } else {
        throw e;
      }
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
      // console.log('data', data);
      return data;
    } catch (e) {
      if (e.response.headers) {
        console.log('error.response.data', e.response.data);
        console.log('error.config.headers', e.config.headers);
        console.log('error.response.status', e.response.status);
        console.log('error.response.statusText', e.response.statusText);
        console.log('error.response.headers', e.response.headers);
        throw new HttpException({ desc: '获取单个作画任务信息' + e.response.data.message, code: e.response.data.code }, e.response.status);
      } else {
        throw e;
      }
    }
  }

  @ApiOperation({ summary: '获取全局已完成作画数据' })
  @Post('batchGetGlobalFinishedDrawInfo')
  async batchGetGlobalFinishedDrawInfo(@Body() body: GlobalQueryDrawTaskDto, @Req() req: Request) {
    // 1. 先查询全局完成的绘画，按时间倒排
    const [taskList, total] = await this.wujieService.batchQueryGlobalDrawTasks({
      page: body.page,
      size: body.size,
    });

    // 4. 合并返回结果
    return {
      list: taskList,
      total,
    };
  } catch(e) {
    console.log('e', e);
    if (e.response) {
      console.log('error.response.data', e.response.data);
      console.log('error.config.headers', e.config.headers);
      console.log('error.response.status', e.response.status);
      console.log('error.response.statusText', e.response.statusText);
      console.log('error.response.headers', e.response.headers);
      throw new HttpException({ desc: '获取全局已完成作画数据' + e.response.data.message, code: e.response.data.code }, e.response.status);
    }

    throw new HttpException({ desc: e.message }, 500);
  }

  @ApiOperation({ summary: '批量获取单用户作画任务信息' })
  @Post('batchGetDrawTaskInfoByUser')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async batchGetDrawTaskInfoByUser(@Body() body: QueryDrawTaskDto, @Req() req: Request) {
    try {
      // 1. 先查询当前用户库中绘画任务，已完成任务不需要再调 wujie API 获取状态
      const [taskList, total] = await this.wujieService.batchQueryDrawTasks({
        userId: req.user.id, // TODO:
        // userId: body.userId,
        page: body.page,
        size: body.size,
      });
      // console.log('taskList', taskList, total)
      // const completedTasks = taskList.filter(item => [3, 4, -1].includes(item.status))
      // // 2. 针对进行中的任务（除生成成功，生成失败之外的状态任务），调用 wujie api 获取状态
      // const uncompletedTasks = taskList.filter(item => ![3, 4, -1].includes(item.status))
      // console.log('completedTasks---------', completedTasks)
      // console.log('uncompletedTasks-----', uncompletedTasks)
      // let newUncompletedTaskInfo = []
      // if (uncompletedTasks.length) {
      //   const authorization = getAuthorization();

      //   const config = {
      //     method: 'post',
      //     url: 'https://gate.wujieai.net/wj-open/v1/ai/generating_info',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       Authorization: `${authorization}`,
      //     },
      //     data: uncompletedTasks.map(item => item.key),
      //   };
      //   const {
      //     data: { code, data },
      //     status,
      //   } = await axios(config);
      //   // console.log('data', data);
      //   if (status !== 200) {
      //     throw new HttpException('批量获取作画任务信息失败', parseInt(code));
      //   }
      //   console.log('new tasks status', data)
      //   const { list = [] } = data

      //   if (list.length) {
      //     newUncompletedTaskInfo = list.map(item => ({
      //       userId: req.user.id,
      //       key: item.key,
      //       status: item.status,
      //       wujie_picture_url: item.picture_url,
      //       start_gen_time: item.start_gen_time,
      //       complete_time: item.complete_time,
      //       complete_percent: item.complete_percent,
      //       queue_before_num: item.queue_before_num,
      //       involve_yellow: item.involve_yellow,
      //       audit_info: item.audit_info,
      //       fail_code: item.fail_message ? item.fail_message.fail_code : null,
      //       fail_message: item.fail_message ? item.fail_message.fail_message : '',
      //       model_prompt: item.model_prompt,
      //       integral_cost: item.integral_cost,
      //       integral_cost_message: item.integral_cost_message,
      //     }))
      //   }
      //   // 3. 更新通过wujie api 获取的状态到库表
      //   const batchUpdateRes = await this.wujieService.batchUpdateDrawTaskInfo(newUncompletedTaskInfo)
      //   console.log('batchUpdateRes', batchUpdateRes)
      // }

      // 4. 合并返回结果
      return {
        list: taskList,
        total,
      };
    } catch (e) {
      console.log('e', e);
      if (e.response) {
        console.log('error.response.data', e.response.data);
        console.log('error.config.headers', e.config.headers);
        console.log('error.response.status', e.response.status);
        console.log('error.response.statusText', e.response.statusText);
        console.log('error.response.headers', e.response.headers);
        throw new HttpException({ desc: '批量获取单用户作画任务信息' + e.response.data.message, code: e.response.data.code }, e.response.status);
      }

      throw new HttpException({ desc: e.message }, 500);
    }
  }

  @ApiOperation({ summary: '迁移无界图片url API' })
  @Post('migrateWujieImageUrlToQcloudCosUrl')
  async migrateWujieImageUrlToQcloudCosUrl() {
    // 查询有wujie_picture_url但没有qcloud_cos_url的数据
    const res = await this.wujieService.batchQueryToTransformTasks();
    console.log('migrateWujieImageUrlToQcloudCosUrl res', res);
    const toTransformTotal = res.length
    let finishedTransformTotal = 0
    // 串行更新
    for (let item of res) {
      const curWujiePictureUrl = item.wujie_picture_url
      const curPictureName = curWujiePictureUrl.split('/').pop()
      const uploadRes = await this.uploadService.uploadFileFromUrl({ filename: curPictureName, url: curWujiePictureUrl })
      console.log('single upload res', uploadRes)
      if (uploadRes) {
        const updateData = {
          key: item.key,
          qcloud_cos_url: uploadRes
        }
        const updateRes = await this.wujieService.batchUpdateDrawTaskInfo([updateData])
        console.log('updateRes', updateRes)
        finishedTransformTotal++
      }
    }
    console.log('迁移结果', finishedTransformTotal + '/' + toTransformTotal)
    return {
      toTransformTotal,
      finishedTransformTotal
    }
  }

  @ApiOperation({ summary: '批量获取指定key作画任务信息' })
  @Post('batchGetDrawTaskInfoByKeys')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async batchGetDrawTaskInfoByKeys(@Body() keys: string[], @Req() req: Request) {
    try {
      // 1. 先查询当前用户库中绘画任务，已完成任务不需要再调 wujie API 获取状态
      const taskList = await this.wujieService.batchQueryDrawTasksByKeys(keys);
      // console.log('taskList', taskList)
      const completedTasks = taskList.filter((item) => [3, 4, -1].includes(item.status));
      // 2. 针对进行中的任务（除生成成功，生成失败之外的状态任务），调用 wujie api 获取状态
      const uncompletedTasks = taskList.filter((item) => ![3, 4, -1].includes(item.status));
      // console.log('completedTasks---------', completedTasks)
      // console.log('uncompletedTasks-----', uncompletedTasks)
      let newUncompletedTaskInfo = [];
      if (uncompletedTasks.length) {
        const authorization = getAuthorization();

        const config = {
          method: 'post',
          url: 'https://gate.wujieai.net/wj-open/v1/ai/generating_info',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${authorization}`,
          },
          data: uncompletedTasks.map((item) => item.key),
        };
        const {
          data: { code, data },
          status,
        } = await axios(config);
        // console.log('data', data);
        if (status !== 200) {
          throw new HttpException('批量获取指定key作画任务信息', parseInt(code));
        }
        console.log('new tasks status', data);
        const { list = [] } = data;

        if (list.length) {
          newUncompletedTaskInfo = list.map((item) => {
            const curUncompletedItem = uncompletedTasks.find(uncompletedItem => item.key === uncompletedItem.key);
            return {
              userId: req.user.id,
              key: item.key,
              status: item.status,
              wujie_picture_url: item.picture_url,
              start_gen_time: item.start_gen_time,
              complete_time: item.complete_time,
              complete_percent: item.complete_percent,
              queue_before_num: item.queue_before_num,
              involve_yellow: item.involve_yellow,
              audit_info: item.audit_info,
              fail_code: item.fail_message ? item.fail_message.fail_code : null,
              fail_message: item.fail_message ? item.fail_message.fail_message : '',
              model_prompt: item.model_prompt,
              input_model_prompt: curUncompletedItem.input_model_prompt || '',
              integral_cost: item.integral_cost,
              integral_cost_message: item.integral_cost_message,
            }
          });
        }
        // 3. 更新通过wujie api 获取的状态到库表
        const batchUpdateRes = await this.wujieService.batchUpdateDrawTaskInfo(newUncompletedTaskInfo);
        // console.log('batchUpdateRes', batchUpdateRes)
        // 4. 判断刚查的这一批中是否有已完成（已拿到 wujie_picture_url的，异步去换取腾讯云url并更新到库)
        const newFinishedTasks = newUncompletedTaskInfo.filter(item => item.status === 4 && item.wujie_picture_url)
        if (newFinishedTasks.length) {
          Promise.all(newFinishedTasks.map(async (item) => {
            const curWujiePictureUrl = item.wujie_picture_url
            const curPictureName = curWujiePictureUrl.split('/').pop()
            const res = await this.uploadService.uploadFileFromUrl({ filename: curPictureName, url: curWujiePictureUrl })
            console.log('single upload res', res)
            return res
          })).then(res => {
            console.log('batch upload res', res)
            if (res.length) {
              const updateData = res.map((item, index) => {
                return {
                  key: newFinishedTasks[index].key,
                  qcloud_cos_url: item
                }
              })
              console.log('updateData', updateData)
              return this.wujieService.batchUpdateDrawTaskInfo(updateData)
            }
          }).catch(e => {
            console.log('batch upload error', e)
          })
        }
        // 5. 判断刚查的这一批中是否有生成失败的任务，如果有，返还用户积分
        const newFailedTasks = newUncompletedTaskInfo.filter(item => item.status === 3)
        if (newFailedTasks.length) {
          const failedIntegralCost = newFailedTasks.reduce((acc, cur) => acc + cur.integral_cost, 0)
          const accountBalanceData = await this.accountBalanceService.findByUserId(req.user.id);
          const finalBalance = accountBalanceData.balance + failedIntegralCost
          const updateBalanceRes = await this.accountBalanceService.update({
            userId: req.user.id,
            balance: finalBalance,
            usedBalance: accountBalanceData.usedBalance - failedIntegralCost,
          });
          console.log('返还积分 updateBalanceRes', updateBalanceRes);
        }
      }

      // 5. 合并返回结果
      return {
        list: completedTasks.concat(newUncompletedTaskInfo),
      };
    } catch (e) {
      console.log('e', e);
      if (e.response) {
        console.log('error.response.data', e.response.data);
        console.log('error.config.headers', e.config.headers);
        console.log('error.response.status', e.response.status);
        console.log('error.response.statusText', e.response.statusText);
        console.log('error.response.headers', e.response.headers);
        throw new HttpException({ desc: '批量获取指定key作画任务信息' + e.response.data.message, code: e.response.data.code }, e.response.status);
      }

      throw new HttpException({ desc: e.message }, 500);
    }
  }

  @ApiOperation({ summary: '批量获取作画任务信息' })
  @Post('batchGetDrawTaskInfo')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async batchGetDrawTaskInfo(@Body() keys: string[], @Req() req: Request) {
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
      // console.log('data', data);
      if (status !== 200) {
        throw new HttpException('批量获取作画任务信息失败', parseInt(code));
      }
      return data;
    } catch (e) {
      if (e.response.headers) {
        console.log('error.response.data', e.response.data);
        console.log('error.config.headers', e.config.headers);
        console.log('error.response.status', e.response.status);
        console.log('error.response.statusText', e.response.statusText);
        console.log('error.response.headers', e.response.headers);
        throw new HttpException({ desc: '批量获取作画任务信息' + e.response.data.message, code: e.response.data.code }, e.response.status);
      } else {
        throw e;
      }
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

      // console.log('data', data);
      if (status !== 200) {
        throw new HttpException('获取所有历史作画任务列表失败', parseInt(code));
      }
      return data;
    } catch (e) {
      if (e.response.headers) {
        console.log('error.response.data', e.response.data);
        console.log('error.config.headers', e.config.headers);
        console.log('error.response.status', e.response.status);
        console.log('error.response.statusText', e.response.statusText);
        console.log('error.response.headers', e.response.headers);
        throw new HttpException({ desc: '获取所有历史作画任务列表' + e.response.data.message, code: e.response.data.code }, e.response.status);
      } else {
        throw e;
      }
    }
  }
}
