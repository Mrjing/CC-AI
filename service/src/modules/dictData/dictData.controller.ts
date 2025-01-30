import { Controller, Get, Post, Body, Put, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DictDataService } from './dictData.service';
import { CreateDictDataDto } from './dto/createDictData.dto';
import { UpdateDictDataDto } from './dto/updateDictData.dto';
import { DeleteDictDataDto } from './dto/deleteDictData.dto';
import { QueryDictDataDto } from './dto/queryDictData.dto';
import { DictDataEntity } from './dictData.entity';
import { AdminAuthGuard } from '@/common/auth/adminAuth.guard';
import { JwtAuthGuard } from '@/common/auth/jwtAuth.guard';

@ApiTags('字典数据')
@Controller('dictData')
export class DictDataController {
  constructor(private readonly dictDataService: DictDataService) { }

  @Post('create')
  @ApiOperation({ summary: '创建字典数据' })
  @UseGuards(AdminAuthGuard)
  async create(@Body() createDictDataDto: CreateDictDataDto, @Req() req): Promise<DictDataEntity> {
    const userId = req.user.id;
    return await this.dictDataService.create({ ...createDictDataDto, createUser: userId });
  }

  @Post('update')
  @ApiOperation({ summary: '更新字典数据' })
  @UseGuards(AdminAuthGuard)
  async update(@Body() updateDictDataDto: UpdateDictDataDto, @Req() req): Promise<DictDataEntity> {
    const userId = req.user.id
    return await this.dictDataService.update({ ...updateDictDataDto, updateUser: userId });
  }

  @Post('delete')
  @ApiOperation({ summary: '删除字典数据' })
  @UseGuards(AdminAuthGuard)
  async delete(@Body() deleteDictDataDto: DeleteDictDataDto): Promise<void> {
    await this.dictDataService.delete(deleteDictDataDto);
  }

  @Post('deleteByType')
  @ApiOperation({ summary: '根据字典类型批量删除字典数据' })
  @UseGuards(AdminAuthGuard)
  async deleteByType(@Param('type') type: string): Promise<void> {
    await this.dictDataService.deleteByType(type);
  }

  @Post('list')
  @ApiOperation({ summary: '查询字典数据列表' })
  @UseGuards(JwtAuthGuard)
  async findAll(@Body() queryDictDataDto: QueryDictDataDto) {
    const res = await this.dictDataService.findAll(queryDictDataDto);
    return {
      data: res[0],
      total: res[1],
    }
  }

  // 返回给C端字典Map
  @Get('dictMap')
  @ApiOperation({ summary: '查询字典数据Map' })
  @UseGuards(JwtAuthGuard)
  async dictMap() {
    const [dictDataList, total] = await this.dictDataService.findAll({ status: 0 })
    const dictMap = {}
    dictDataList.forEach(item => {
      if (!dictMap[item.dictType.type]) {
        dictMap[item.dictType.type] = []
      }

      dictMap[item.dictType.type].push(item)
    })
    return dictMap
  }

  // @Get(':id')
  // @ApiOperation({ summary: '根据ID查询字典数据' })
  // @UseGuards(JwtAuthGuard)
  // async findOne(@Param('id') id: number): Promise<DictDataEntity> {
  //   return await this.dictDataService.findOne(id);
  // }
}
