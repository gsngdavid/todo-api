import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { TaskDto } from 'src/types/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from 'src/types/enums';

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

  createTask(task: TaskDto) {
    const id = uuidv4();
    const newTask = {
      ...task,
      id,
      status: TaskStatus.OPEN,
    };
    return this.repo.createTask(newTask);
  }
}
