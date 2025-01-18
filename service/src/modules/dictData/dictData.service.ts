import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DictDataEntity } from './dictData.entity';
import { CreateDictDataDto } from './dto/createDictData.dto';
import { UpdateDictDataDto } from './dto/updateDictData.dto';
import { DeleteDictDataDto } from './dto/deleteDictData.dto';
import { QueryDictDataDto } from './dto/queryDictData.dto';

@Injectable()
export class DictDataService {
  constructor(
    @InjectRepository(DictDataEntity)
    private readonly dictDataRepository: Repository<DictDataEntity>,
  ) {}

  // 创建字典数据
  async create(createDictDataDto: CreateDictDataDto): Promise<DictDataEntity> {
    const dictData = this.dictDataRepository.create(createDictDataDto);
    return await this.dictDataRepository.save(dictData);
  }

  // 更新字典数据
  async update(id: number, updateDictDataDto: UpdateDictDataDto): Promise<DictDataEntity> {
    const dictData = await this.dictDataRepository.findOne({ where: { id } });
    if (!dictData) {
      throw new Error('字典数据不存在');
    }
    Object.assign(dictData, updateDictDataDto);
    return await this.dictDataRepository.save(dictData);
  }

  // 删除字典数据
  async delete(deleteDictDataDto: DeleteDictDataDto): Promise<void> {
    const { id } = deleteDictDataDto;
    const dictData = await this.dictDataRepository.findOne({ where: { id } });
    if (!dictData) {
      throw new Error('字典数据不存在');
    }
    await this.dictDataRepository.remove(dictData);
  }

  // 根据字典type批量删除字典数据
  async deleteByType(type: string): Promise<void> {
    const dictDataList = await this.dictDataRepository.find({ where: { type } });
    if (dictDataList.length === 0) {
      throw new Error('字典数据不存在');
    }
    await this.dictDataRepository.remove(dictDataList);
  }

  // 查询字典数据列表
  async findAll(queryDictDataDto: QueryDictDataDto): Promise<DictDataEntity[]> {
    const { type, status } = queryDictDataDto;
    const queryBuilder = this.dictDataRepository.createQueryBuilder('dictData');

    if (type) {
      queryBuilder.andWhere('dictData.type = :type', { type });
    }

    if (status !== undefined) {
      queryBuilder.andWhere('dictData.status = :status', { status });
    }

    return await queryBuilder.getMany();
  }

  // 根据ID查询字典数据
  async findOne(id: number): Promise<DictDataEntity> {
    const dictData = await this.dictDataRepository.findOne({ where: { id } });
    if (!dictData) {
      throw new Error('字典数据不存在');
    }
    return dictData;
  }
}
