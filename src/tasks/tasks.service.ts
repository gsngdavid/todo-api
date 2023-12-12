import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { CategoryEntity, TaskDto } from 'src/types/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from 'src/types/enums';
import db from 'src/db';

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

  async createTask(task: TaskDto) {
    const categories: CategoryEntity[] = await db.getData('/categories');
    const category = categories.find(
      (category) => category.id === task.categoryId,
    );

    if (!category)
      throw new NotFoundException('Category selected does not exist');

    const id = uuidv4();
    const newTask = {
      ...task,
      id,
      status: TaskStatus.OPEN,
    };
    return this.repo.createTask(newTask);
  }
}
