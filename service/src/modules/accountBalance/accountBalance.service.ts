import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { AccountBalanceEntity } from './accountBalance.entity';
import { CreateAccountBalanceDto } from './dto/createAccountBalance.dto';
import { UpdateAccountBalanceDto } from './dto/updateAccountBalance.dto';
import { QueryAccountBalanceDto } from './dto/queryAccountBalance.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AccountBalanceService {
  constructor(
    @InjectRepository(AccountBalanceEntity)
    private readonly accountBalanceEntity: Repository<AccountBalanceEntity>,
    private readonly userService: UserService,
  ) {}

  async create(createAccountBalanceDto: CreateAccountBalanceDto) {
    const user = await this.userService.queryUserInfoById(createAccountBalanceDto.userId);
    const accountBalance = this.accountBalanceEntity.create({ ...createAccountBalanceDto, user });
    return await this.accountBalanceEntity.save(accountBalance);
  }

  async findAll(query: QueryAccountBalanceDto) {
    const qb = this.accountBalanceEntity.createQueryBuilder('accountBalance');

    if (query.userId) {
      qb.andWhere('accountBalance.userId = :userId', { userId: query.userId });
    }

    return await qb.getMany();
  }

  async findOne(id: number) {
    return await this.accountBalanceEntity.findOne({ where: { id } });
  }

  async findByUserId(userId: number) {
    return await this.accountBalanceEntity.findOne({ where: { user: { id: userId } } });
  }

  async update(updateAccountBalanceDto: UpdateAccountBalanceDto) {
    try {
      const userId = updateAccountBalanceDto.userId;
      const accountBalance = await this.accountBalanceEntity.findOne({ where: { user: { id: userId } } });
      if (!accountBalance) {
        return null;
      }
      Object.assign(accountBalance, updateAccountBalanceDto);
      return await this.accountBalanceEntity.save(accountBalance);
    } catch (e) {
      console.log('eeeee', e);
      throw e;
    }
  }

  async remove(id: number) {
    const accountBalance = await this.accountBalanceEntity.findOne({ where: { id } });
    if (!accountBalance) {
      return null;
    }
    return await this.accountBalanceEntity.remove(accountBalance);
  }

  // 批量查询指定userId数组中的所有数据
  async queryByIds(userIds: number[]) {
    // const qb = this.accountBalanceRepository.createQueryBuilder('accountBalance');
    // qb.where('accountBalance.userId IN (:...userIds)', { userIds });
    // return await qb.getMany();
    // const goodsOrderItem = await this.goodsOrderItemEntity.findOne({ where: { order: { orderNo: orderId } }, relations: ['order', 'goods'] });
    const accountBalances = await this.accountBalanceEntity.find({ where: { user: { id: In(userIds) } }, relations: ['user'] });
    return accountBalances;
  }
}
