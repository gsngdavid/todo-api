import { Body, Controller, Delete, Get, Post, Param } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TaskIdDto } from './dtos/task-id.dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(public service: TasksService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Tasks retrieved successfully',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error server occurred.',
  })
  getTasks() {
    return this.service.getTasks();
  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'Task retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Task not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error server occurred.',
  })
  getTask(@Param() { id }: TaskIdDto) {
    return this.service.getTask(id);
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    description: 'Task deleted successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Task not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error server occurred.',
  })
  deleteTask(@Param() { id }: TaskIdDto) {
    return this.service.deleteTask(id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error server occurred.',
  })
  @ApiBody({
    type: CreateTaskDto,
    description: 'Json structure for task object',
  })
  createTask(@Body() body: CreateTaskDto) {
    return this.service.createTask(body);
  }
}
