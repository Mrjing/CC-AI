import { SuperAuthGuard } from '@/common/auth/superAuth.guard';
import { JwtAuthGuard } from '@/common/auth/jwtAuth.guard';
import { Body, Controller, Get, Post, Query, Req, Res, UseGuards, HttpException } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import axios from 'axios';
import { Request, Response } from 'express';
import { AdminAuthGuard } from '@/common/auth/adminAuth.guard';
import { getAuthorization } from '@/common/utils';
import { GlobalConfigService } from '@/modules/globalConfig/globalConfig.service';
import { OnModuleInit } from '@nestjs/common';
import { AsrRecordDto } from './dto/asrRecord.dto'
import { AsrRecordTaskDto } from './dto/asrRecordTask.dto'

const tencentcloud = require("tencentcloud-sdk-nodejs-asr");
const AsrClient = tencentcloud.asr.v20190614.Client;

@ApiTags('asr')
@Controller('asr')
export class AsrController {
  private asrIns: any

  constructor(private readonly globalConfigService: GlobalConfigService) {
  }

  async onModuleInit() {
    const { qcloudSecretId: secretId, qcloudSecretKey: secretKey } = await this.globalConfigService.getConfigs(['qcloudSecretId', 'qcloudSecretKey'])
    const clientConfig = {
      credential: {
        secretId,
        secretKey,
      },
      region: "",
      profile: {
        httpProfile: {
          endpoint: "asr.tencentcloudapi.com",
        },
      },
    };
    const client = new AsrClient(clientConfig);
    this.asrIns = client
  }

  @ApiOperation({ summary: '创建录音识别任务' })
  @Post('createRecTask')
  @ApiBearerAuth()
  async createRecTask(@Body() body: AsrRecordDto) {
    const params = {
      EngineModelType: "16k_zh",
      ChannelNum: 1,
      ResTextFormat: 3,
      SourceType: 1,
      Data: body.data
    };
    try {
      const res = await this.asrIns.CreateRecTask(params)
      console.log('res', res)
      return res
    } catch (e) {
      console.log('createRecTask e', e)
      // throw new HttpException({ desc: '创建录音识别任务失败' + e.response.data.message, code: e.response.data.code }, e.response.status);
      throw new HttpException({ desc: '创建录音识别任务失败', message: e.message }, 500);
    }
  }

  @ApiOperation({ summary: '获取录音识别任务状态' })
  @Post('getRecTaskStatus')
  @ApiBearerAuth()
  async getRecTaskStatus(@Body() body: AsrRecordTaskDto) {
    try {
      const params = {
        TaskId: body.TaskId
      }
      const res = await this.asrIns.DescribeTaskStatus(params)
      console.log('res', res)
      return res
    } catch (e) {
      console.log('DescribeTaskStatus e', e)
      throw new HttpException({ desc: '获取录音识别任务状态失败', message: e.message }, 500);
    }
  }
}