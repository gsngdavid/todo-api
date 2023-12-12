import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private repo: TasksRepository) {}

  getTasks() {
    return this.repo.getTasks();
  }

  getTask(id: string) {
    return this.repo.getTask(id);
  }

  deleteTask(id: string) {
    return this.repo.deleteTask(id);
  }
}
