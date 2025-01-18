import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DictTypeEntity } from './dictType.entity';
import { QueryDictTypeDto } from './dto/queryDictType.dto';
import { UpdateDictTypeDto } from './dto/updateDictType.dto';
import { DeleteDictTypeDto } from './dto/deleteDictType.dto';
import { DictDataService } from '../dictData/dictData.service';

@Injectable()
export class DictTypeService {
  constructor(
    @InjectRepository(DictTypeEntity)
    private readonly dictTypeRepository: Repository<DictTypeEntity>,
    private readonly dictDataService: DictDataService,
  ) {}

  // 查询字典类型列表
  async findAll(queryParams: QueryDictTypeDto) {
    const { name, type, status, page = 1, pageSize = 10 } = queryParams;
    const queryBuilder = this.dictTypeRepository.createQueryBuilder('dictType');

    if (name) {
      queryBuilder.andWhere('dictType.name LIKE :name', { name: `%${name}%` });
    }
    if (type) {
      queryBuilder.andWhere('dictType.type LIKE :type', { type: `%${type}%` });
    }
    if (status !== undefined) {
      queryBuilder.andWhere('dictType.status = :status', { status });
    }

    const [items, total] = await queryBuilder
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();

    return {
      items,
      total,
      page,
      pageSize,
    };
  }

  // 创建字典类型
  async create(dictType: Partial<DictTypeEntity>) {
    const newDictType = this.dictTypeRepository.create(dictType);
    return await this.dictTypeRepository.save(newDictType);
  }

  // 更新字典类型
  async update(updateDto: UpdateDictTypeDto) {
    const { id, ...updateData } = updateDto;
    return await this.dictTypeRepository.update(id, updateData);
  }

  // 删除字典类型，先删除与当前字典类型type关联的dictData，再删除当前dictType数据
  async delete(deleteDto: DeleteDictTypeDto) {
    const { id } = deleteDto;

    // 查询当前字典类型
    const dictType = await this.dictTypeRepository.findOne({ where: { id } });
    if (!dictType) {
      throw new Error('字典类型不存在');
    }

    // 删除关联的字典数据
    await this.dictDataService.deleteByType(dictType.type);

    // 删除字典类型
    await this.dictTypeRepository.remove(dictType);
  }
  //   async delete(deleteDto: DeleteDictTypeDto) {
  //     const { id } = deleteDto;
  //     return await this.dictTypeRepository.delete(id);
  //   }

  // 根据ID查询字典类型
  async findById(id: number) {
    return await this.dictTypeRepository.findOne({ where: { id } });
  }

  // 根据类型查询字典类型
  async findByType(type: string) {
    return await this.dictTypeRepository.findOne({ where: { type } });
  }
}
