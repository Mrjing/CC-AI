import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudyResourceEntity } from './studyResource.entity';
import { CreateStudyResourceDto } from './dto/createStudyResource.dto';
import { UpdateStudyResourceDto } from './dto/updateStudyResource.dto';
import { DeleteStudyResourceDto } from './dto/deleteStudyResource.dto';
import { QueryStudyResourceDto } from './dto/queryStudyResource.dto';

@Injectable()
export class StudyResourceService {
  constructor(
    @InjectRepository(StudyResourceEntity)
    private readonly studyResourceRepository: Repository<StudyResourceEntity>,
  ) { }

  // 创建学习资源
  async create(createStudyResourceDto: CreateStudyResourceDto) {
    const studyResource = this.studyResourceRepository.create(createStudyResourceDto);
    console.log('studyResource', studyResource);
    return await this.studyResourceRepository.save(studyResource);
  }

  // 更新学习资源
  async update(updateStudyResourceDto: UpdateStudyResourceDto) {
    const { id, ...updateData } = updateStudyResourceDto;
    return await this.studyResourceRepository.update(id, updateData);
  }

  // 删除学习资源
  async delete(deleteStudyResourceDto: DeleteStudyResourceDto) {
    const { id } = deleteStudyResourceDto;
    return await this.studyResourceRepository.delete(id);
  }

  // 查询学习资源列表
  async findAll(queryStudyResourceDto: QueryStudyResourceDto) {
    const { name, level, category, createUser, page = 1, pageSize = 10 } = queryStudyResourceDto;

    const queryBuilder = this.studyResourceRepository.createQueryBuilder('studyResource');

    if (name) {
      queryBuilder.andWhere('studyResource.name LIKE :name', { name: `%${name}%` });
    }
    if (level !== undefined) {
      queryBuilder.andWhere('studyResource.level = :level', { level });
    }
    if (category !== undefined) {
      queryBuilder.andWhere('studyResource.category = :category', { category });
    }
    if (createUser !== undefined) {
      queryBuilder.andWhere('studyResource.createUser = :createUser', { createUser });
    }

    const [items, total] = await queryBuilder
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();

    return {
      data: items,
      total,
      page,
      pageSize,
    };
  }

  // 根据ID查询学习资源
  async findOne(id: number) {
    return await this.studyResourceRepository.findOne({ where: { id } });
  }

  // 增加观看人数
  async incrementViewerNum(id: number) {
    return await this.studyResourceRepository.increment({ id }, 'viewerNum', 1);
  }

  // 增加播放次数
  async incrementPlayNum(id: number) {
    return await this.studyResourceRepository.increment({ id }, 'playNum', 1);
  }
}
