import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DictDataService } from './dictData.service';
import { CreateDictDataDto } from './dto/createDictData.dto';
import { UpdateDictDataDto } from './dto/updateDictData.dto';
import { DeleteDictDataDto } from './dto/deleteDictData.dto';
import { QueryDictDataDto } from './dto/queryDictData.dto';
import { DictDataEntity } from './dictData.entity';

@ApiTags('字典数据')
@Controller('dictData')
export class DictDataController {
  constructor(private readonly dictDataService: DictDataService) {}

  @Post()
  @ApiOperation({ summary: '创建字典数据' })
  async create(@Body() createDictDataDto: CreateDictDataDto): Promise<DictDataEntity> {
    return await this.dictDataService.create(createDictDataDto);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新字典数据' })
  async update(@Param('id') id: number, @Body() updateDictDataDto: UpdateDictDataDto): Promise<DictDataEntity> {
    return await this.dictDataService.update(id, updateDictDataDto);
  }

  @Delete()
  @ApiOperation({ summary: '删除字典数据' })
  async delete(@Body() deleteDictDataDto: DeleteDictDataDto): Promise<void> {
    await this.dictDataService.delete(deleteDictDataDto);
  }

  @Delete('type/:type')
  @ApiOperation({ summary: '根据字典类型批量删除字典数据' })
  async deleteByType(@Param('type') type: string): Promise<void> {
    await this.dictDataService.deleteByType(type);
  }

  @Get()
  @ApiOperation({ summary: '查询字典数据列表' })
  async findAll(@Body() queryDictDataDto: QueryDictDataDto): Promise<DictDataEntity[]> {
    return await this.dictDataService.findAll(queryDictDataDto);
  }

  @Get(':id')
  @ApiOperation({ summary: '根据ID查询字典数据' })
  async findOne(@Param('id') id: number): Promise<DictDataEntity> {
    return await this.dictDataService.findOne(id);
  }
}
