import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DictDataEntity } from './dictData.entity';
import { CreateDictDataDto } from './dto/createDictData.dto';
import { UpdateDictDataDto } from './dto/updateDictData.dto';
import { DeleteDictDataDto } from './dto/deleteDictData.dto';
import { QueryDictDataDto } from './dto/queryDictData.dto';
import { DictTypeEntity } from '../dictType/dictType.entity';

@Injectable()
export class DictDataService {
  constructor(
    @InjectRepository(DictDataEntity)
    private readonly dictDataRepository: Repository<DictDataEntity>,
    @InjectRepository(DictTypeEntity)
    private readonly dictTypeRepository: Repository<DictTypeEntity>,
  ) { }

  // 创建字典数据
  async create(createDictDataDto: CreateDictDataDto): Promise<DictDataEntity> {
    const { type } = createDictDataDto;
    const dictType = await this.dictTypeRepository.findOne({ where: { type } });
    const dictData = this.dictDataRepository.create({ ...createDictDataDto, dictType: dictType });
    return await this.dictDataRepository.save(dictData);
  }

  // 更新字典数据
  async update(updateDictDataDto: UpdateDictDataDto): Promise<DictDataEntity> {
    const { id } = updateDictDataDto;
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
    const dictDataList = await this.dictDataRepository.find({ where: { dictType: { type } } });
    if (dictDataList.length === 0) {
      throw new Error('字典数据不存在');
    }
    await this.dictDataRepository.remove(dictDataList);
  }

  // 查询字典数据列表
  async findAll(queryDictDataDto: QueryDictDataDto) {
    const { type, status } = queryDictDataDto;
    const where = {}
    if (type) {
      where['type'] = type;
    }
    if (status !== undefined) {
      where['status'] = status;
    }
    const res = await this.dictDataRepository.findAndCount({ where: { dictType: { type }, status }, relations: ['dictType'] })
    console.log('dictDataList', res)
    return res;
    // const queryBuilder = this.dictDataRepository.createQueryBuilder('dictData');
    // if (type) {
    //   queryBuilder.andWhere('dictData.type = :type', { type });
    // }

    // if (status !== undefined) {
    //   queryBuilder.andWhere('dictData.status = :status', { status });
    // }

    // return await queryBuilder.getManyAndCount();
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
