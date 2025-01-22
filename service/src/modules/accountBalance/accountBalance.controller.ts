import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AccountBalanceService } from './accountBalance.service';
import { CreateAccountBalanceDto } from './dto/createAccountBalance.dto';
import { UpdateAccountBalanceDto } from './dto/updateAccountBalance.dto';
import { QueryAccountBalanceDto } from './dto/queryAccountBalance.dto';
import { AdminAuthGuard } from '@/common/auth/adminAuth.guard';
import { JwtAuthGuard } from '@/common/auth/jwtAuth.guard';

@ApiTags('accountBalance')
@Controller('accountBalance')
export class AccountBalanceController {
  constructor(private readonly accountBalanceService: AccountBalanceService) {}

  //   @Post()
  //   @ApiOperation({ summary: '创建账户余额' })
  //   create(@Body() createAccountBalanceDto: CreateAccountBalanceDto) {
  //     return this.accountBalanceService.create(createAccountBalanceDto);
  //   }

  //   @Get()
  //   @ApiOperation({ summary: '查询账户余额列表' })
  //   findAll(@Query() query: QueryAccountBalanceDto) {
  //     return this.accountBalanceService.findAll(query);
  //   }

  @Get(':id')
  @ApiOperation({ summary: '查询单个账户余额' })
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.accountBalanceService.findOne(+id);
  }

  @Post('update')
  @ApiOperation({ summary: '更新账户余额' })
  @UseGuards(AdminAuthGuard)
  async update(@Body() updateAccountBalanceDto: UpdateAccountBalanceDto) {
    // 判断当前用户是否存在账户余额记录，无则新建
    const accountBalance = await this.accountBalanceService.findByUserId(updateAccountBalanceDto.userId);
    console.log('accountBalance', accountBalance);
    if (!accountBalance) {
      const createAccountBalanceDto = {
        userId: updateAccountBalanceDto.userId,
        balance: updateAccountBalanceDto.balance,
        usedBalance: updateAccountBalanceDto.usedBalance,
      };
      return this.accountBalanceService.create(createAccountBalanceDto);
    }
    return this.accountBalanceService.update(updateAccountBalanceDto);
  }
}
