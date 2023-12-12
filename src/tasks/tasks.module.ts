import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';

@Module({
  providers: [TasksService, TasksRepository],
})
export class TasksModule {}
