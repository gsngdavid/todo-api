import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksRepository {
  getTasks() {
    return 'All tasks';
  }

  getTask(id: string) {
    return `Your want a task with '${id}' id`;
  }

  deleteTask(id: string) {
    return `Task with '${id}' id deleted`;
  }
}
