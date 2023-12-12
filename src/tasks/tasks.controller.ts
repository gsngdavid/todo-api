import { Body, Controller, Delete, Get, Post, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from 'src/types/interfaces';

@Controller('tasks')
export class TasksController {
  constructor(public service: TasksService) {}

  @Get()
  getTasks() {
    return this.service.getTasks();
  }

  @Get('/:id')
  getTask(@Param() { id }: { id: string }) {
    return this.service.getTask(id);
  }

  @Delete('/:id')
  deleteTask(@Param() { id }: { id: string }) {
    return this.service.deleteTask(id);
  }

  @Post()
  createTask(@Body() body: TaskDto) {
    return this.service.createTask(body);
  }
}
