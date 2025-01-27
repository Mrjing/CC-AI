import { Controller, Get, Post, Body, Put, Delete, Query, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DictTypeService } from './dictType.service';
import { DictTypeEntity } from './dictType.entity';
import { QueryDictTypeDto } from './dto/queryDictType.dto';
import { UpdateDictTypeDto } from './dto/updateDictType.dto';
import { DeleteDictTypeDto } from './dto/deleteDictType.dto';
import { AdminAuthGuard } from '@/common/auth/adminAuth.guard';
import { JwtAuthGuard } from '@/common/auth/jwtAuth.guard';


@ApiTags('字典类型')
@Controller('dictType')
export class DictTypeController {
  constructor(private readonly dictTypeService: DictTypeService) { }

  @Post('list')
  @ApiOperation({ summary: '查询字典类型列表' })
  @UseGuards(JwtAuthGuard)
  async findAll(@Body() body: QueryDictTypeDto) {
    return await this.dictTypeService.findAll(body);
  }

  @Post('create')
  @ApiOperation({ summary: '创建字典类型' })
  @UseGuards(AdminAuthGuard)
  async create(@Body() dictType: Partial<DictTypeEntity>, @Req() req) {
    const userId = req.user.id;
    return await this.dictTypeService.create({ ...dictType, createUser: userId });
  }

  @Post('update')
  @ApiOperation({ summary: '更新字典类型' })
  @UseGuards(AdminAuthGuard)
  async update(@Body() updateDto: UpdateDictTypeDto, @Req() req) {
    const userId = req.user.id;
    return await this.dictTypeService.update({ ...updateDto, updateUser: userId });
  }

  @Post('delete')
  @ApiOperation({ summary: '删除字典类型' })
  @UseGuards(AdminAuthGuard)
  async delete(@Body() deleteDto: DeleteDictTypeDto) {
    return await this.dictTypeService.delete(deleteDto);
  }

  @Get('detail')
  @ApiOperation({ summary: '查询字典类型详情' })
  @UseGuards(JwtAuthGuard)
  async findById(@Query('id') id: number) {
    return await this.dictTypeService.findById(id);
  }

  @Get('type')
  @ApiOperation({ summary: '根据类型查询字典类型' })
  @UseGuards(JwtAuthGuard)
  async findByType(@Query('type') type: string) {
    return await this.dictTypeService.findByType(type);
  }
}
