import { Body, Controller, Delete, Get, Post, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/create-task.dto';

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
  createTask(@Body() body: CreateTaskDto) {
    return this.service.createTask(body);
  }
}
