import { Controller, Delete, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

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
}
