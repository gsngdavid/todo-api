import { Injectable } from '@nestjs/common';
import { TaskEntity } from 'src/types/interfaces';

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

  createTask(task: TaskEntity) {
    console.log(task);
    return {
      id: task.id,
      message: 'Task was successfully created',
    };
  }
}
