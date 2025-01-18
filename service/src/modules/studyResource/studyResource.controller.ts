import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { StudyResourceService } from './studyResource.service';
import { CreateStudyResourceDto } from './dto/createStudyResource.dto';
import { UpdateStudyResourceDto } from './dto/updateStudyResource.dto';
import { DeleteStudyResourceDto } from './dto/deleteStudyResource.dto';
import { QueryStudyResourceDto } from './dto/queryStudyResource.dto';

@ApiTags('学习资源')
@Controller('studyResource')
export class StudyResourceController {
  constructor(private readonly studyResourceService: StudyResourceService) {}

  @Post('create')
  @ApiOperation({ summary: '创建学习资源' })
  async create(@Body() createStudyResourceDto: CreateStudyResourceDto) {
    return await this.studyResourceService.create(createStudyResourceDto);
  }

  @Post('update')
  @ApiOperation({ summary: '更新学习资源' })
  async update(@Body() updateStudyResourceDto: UpdateStudyResourceDto) {
    return await this.studyResourceService.update(updateStudyResourceDto);
  }

  @Post('delete')
  @ApiOperation({ summary: '删除学习资源' })
  async delete(@Body() deleteStudyResourceDto: DeleteStudyResourceDto) {
    return await this.studyResourceService.delete(deleteStudyResourceDto);
  }

  @Get('list')
  @ApiOperation({ summary: '查询学习资源列表' })
  async findAll(@Query() queryStudyResourceDto: QueryStudyResourceDto) {
    return await this.studyResourceService.findAll(queryStudyResourceDto);
  }

  @Get('detail')
  @ApiOperation({ summary: '查询学习资源详情' })
  async findOne(@Query('id') id: number) {
    return await this.studyResourceService.findOne(id);
  }

  @Post('incrementViewerNum')
  @ApiOperation({ summary: '增加观看人数' })
  async incrementViewerNum(@Body('id') id: number) {
    return await this.studyResourceService.incrementViewerNum(id);
  }

  @Post('incrementPlayNum')
  @ApiOperation({ summary: '增加播放次数' })
  async incrementPlayNum(@Body('id') id: number) {
    return await this.studyResourceService.incrementPlayNum(id);
  }
}
