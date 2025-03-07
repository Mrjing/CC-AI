import { UserService } from './user.service';
import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/updateUser.dto';
import { JwtAuthGuard } from '@/common/auth/jwtAuth.guard';
import { Request } from 'express';
import { AdminAuthGuard } from '@/common/auth/adminAuth.guard';
import { UserRechargeDto } from './dto/userRecharge.dto';
import { QueryAllUserDto } from './dto/queryAllUser.dto';
import { QueryOneUserDto } from './dto/queryOne.dto';
import { UpdateUserStatusDto } from './dto/updateUserStatus.dto';
import { ResetUserPassDto } from './dto/resetUserPass.dto';
import { SuperAuthGuard } from '@/common/auth/superAuth.guard';
import { queryInviteRecordDto } from './dto/queryInviteRecord.dto';
import { RetrieveUserDto } from './dto/retrieve.dto';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcryptjs';
import { UserStatusEnum, UserStatusErrMsg } from '@/common/constants/user.constant';
import { RedisCacheService } from '../redisCache/redisCache.service'
import { WujieService } from '../wujie/wujie.service'

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService, private readonly redisCacheService: RedisCacheService, private readonly wujieService: WujieService) { }

  @Post('update')
  @ApiOperation({ summary: '更新用户信息' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async update(@Body() body: UpdateUserDto, @Req() req: Request) {
    return await this.userService.updateInfo(body, req);
  }

  @Post('genInviteCode')
  @ApiOperation({ summary: '生成邀请码' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async genInviteCode(@Req() req: Request) {
    return await this.userService.genInviteCode(req);
  }

  @Get('inviteRecord')
  @ApiOperation({ summary: '获取我的邀请记录' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getInviteRecord(@Req() req: Request, @Query() query: queryInviteRecordDto) {
    return await this.userService.getInviteRecord(req, query);
  }

  @Get('inviteLink')
  @ApiOperation({ summary: '邀请链接被点击' })
  async inviteLink(@Query('code') code: string) {
    return await this.userService.inviteLink(code);
  }

  @Post('recharge')
  @ApiOperation({ summary: '用户充值' })
  @UseGuards(SuperAuthGuard)
  @ApiBearerAuth()
  async userRecharge(@Body() body: UserRechargeDto) {
    return await this.userService.userRecharge(body);
  }

  @Get('queryAll')
  @ApiOperation({ summary: '查询所有用户' })
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  async queryAll(@Query() query: QueryAllUserDto, @Req() req: Request) {
    return await this.userService.queryAll(query, req);
  }

  @Get('queryAllUsers')
  @ApiOperation({ summary: '查询所有用户(新)' })
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  async queryAllUsers(@Query() query: QueryAllUserDto, @Req() req: Request) {
    return await this.userService.queryAllNew(query, req);
  }

  @Get('queryOne')
  @ApiOperation({ summary: '查询单个用户' })
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  async queryOne(@Query() params: QueryOneUserDto) {
    return await this.userService.queryOne(params);
  }

  @Post('updateStatus')
  @ApiOperation({ summary: '更新用户状态' })
  @UseGuards(SuperAuthGuard)
  @ApiBearerAuth()
  async updateStatus(@Body() body: UpdateUserStatusDto) {
    return await this.userService.updateStatus(body);
  }

  @Post('resetUserPass')
  @ApiOperation({ summary: '重置用户密码' })
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  async resetUserPass(@Body() body: ResetUserPassDto) {
    return await this.userService.resetUserPass(body);
  }

  @Post('createUserAccount')
  @ApiOperation({ summary: '创建用户账号' })
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  async createUserAccount(@Body() body: CreateUserDto) {
    const { password } = body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUserData = {
      ...body,
      password: hashedPassword,
      rawPassword: password,
      status: UserStatusEnum.ACTIVE,
    };
    return await this.userService.createUser(newUserData);
  }

  @Post('queryUserDetail')
  @ApiOperation({ summary: '查询用户详情' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async queryUserDetail(@Body() body: {
    userId: number
  }, @Req() req: Request) {
    const userId = body.userId;
    // 1. 查询用户信息
    const user = await this.userService.getUserInfoNew(userId)
    // 2. 查询用户关注其他用户数
    const redisKey = `source:user:${userId}:follows`
    const followCount = Number(await this.redisCacheService.get({ key: redisKey }) || 0)
    // 3. 查询用户粉丝数
    const redisKey1 = `target:user:${userId}:follows`
    const fansCount = Number(await this.redisCacheService.get({ key: redisKey1 }) || 0)
    // 4. 查询用户累计作品被点赞总数
    // 4.1 查询用户所有作品ID
    const userAllDrawWorks = await this.wujieService.queryFinishedDrawTasksByUserId(userId)

    const drawIds = userAllDrawWorks.map(item => item.id)
    console.log('drawIds', drawIds)
    // 4.2 查询各作品被点赞数并 累计计算
    let totalLikes = 0
    for (let id of drawIds) {
      const redisKey = `target:wujie:${id}:likes`
      const likesCount = Number(await this.redisCacheService.get({ key: redisKey }) || 0)
      totalLikes += likesCount
    }
    return {
      user,
      followCount,
      fansCount,
      totalLikes
    }
  }
}
