import { Controller, Get, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DictTypeService } from './dictType.service';
import { DictTypeEntity } from './dictType.entity';
import { QueryDictTypeDto } from './dto/queryDictType.dto';
import { UpdateDictTypeDto } from './dto/updateDictType.dto';
import { DeleteDictTypeDto } from './dto/deleteDictType.dto';

@ApiTags('字典类型')
@Controller('dictType')
export class DictTypeController {
  constructor(private readonly dictTypeService: DictTypeService) {}

  @Get()
  @ApiOperation({ summary: '查询字典类型列表' })
  async findAll(@Query() query: QueryDictTypeDto) {
    return await this.dictTypeService.findAll(query);
  }

  @Post()
  @ApiOperation({ summary: '创建字典类型' })
  async create(@Body() dictType: Partial<DictTypeEntity>) {
    return await this.dictTypeService.create(dictType);
  }

  @Put()
  @ApiOperation({ summary: '更新字典类型' })
  async update(@Body() updateDto: UpdateDictTypeDto) {
    return await this.dictTypeService.update(updateDto);
  }

  @Delete()
  @ApiOperation({ summary: '删除字典类型' })
  async delete(@Body() deleteDto: DeleteDictTypeDto) {
    return await this.dictTypeService.delete(deleteDto);
  }

  @Get('detail')
  @ApiOperation({ summary: '查询字典类型详情' })
  async findById(@Query('id') id: number) {
    return await this.dictTypeService.findById(id);
  }

  @Get('type')
  @ApiOperation({ summary: '根据类型查询字典类型' })
  async findByType(@Query('type') type: string) {
    return await this.dictTypeService.findByType(type);
  }
}
