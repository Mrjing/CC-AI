import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Req } from '@nestjs/common';
import { ActionService } from './action.service';
import { CreateActionDto } from './dto/createAction.dto';
import { UpdateActionDto } from './dto/updateAction.dto';
import { QueryActionDto } from './dto/queryAction.dto';
import { ActionEntity } from './action.entity';

@Controller('actions')
export class ActionController {
  constructor(private readonly actionService: ActionService) { }

  @Post('like')
  async like(@Body() createActionDto: CreateActionDto): Promise<ActionEntity> {
    return this.actionService.createAction({ ...createActionDto, actionType: 'LIKE' });
  }

  @Post('dislike')
  async dislike(@Body() createActionDto: CreateActionDto): Promise<ActionEntity> {
    return this.actionService.createAction({ ...createActionDto, actionType: 'DISLIKE' });
  }

  @Post('follow')
  async follow(@Body() createActionDto: CreateActionDto): Promise<ActionEntity> {
    return this.actionService.createAction({ ...createActionDto, actionType: 'FOLLOW' });
  }

  @Post('unfollow')
  async unfollow(@Body() createActionDto: CreateActionDto): Promise<ActionEntity> {
    return this.actionService.createAction({ ...createActionDto, actionType: 'UNFOLLOW' });
  }

  @Post('comment')
  async comment(@Body() createActionDto: CreateActionDto): Promise<ActionEntity> {
    return this.actionService.createAction({ ...createActionDto, actionType: 'COMMENT' });
  }

  @Post('create')
  async create(@Body() createActionDto: CreateActionDto): Promise<ActionEntity> {
    return this.actionService.createAction(createActionDto);
  }

  @Get('query')
  async findAll(@Body() body: QueryActionDto): Promise<ActionEntity[]> {
    return this.actionService.findActionByCondition(body);
  }

  // @Get(':id')
  // async findOne(@Param('id', ParseIntPipe) id: number): Promise<ActionEntity> {
  //   return this.actionService.findOne(id);
  // }

  // @Put(':id')
  // async update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateActionDto: UpdateActionDto,
  // ): Promise<ActionEntity> {
  //   return this.actionService.updateAction(id, updateActionDto);
  // }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.actionService.removeAction(id);
  }
}