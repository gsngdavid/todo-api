import { Injectable, NotFoundException } from '@nestjs/common';
import db from '../db';
import { TaskEntity } from '../types/interfaces';

@Injectable()
export class TasksRepository {
  async getTasks() {
    try {
      return await db.getData('/tasks');
    } catch (error) {
      return [];
    }
  }

  async getTask(id: string) {
    try {
      const index = await db.getIndex('/tasks', id);
      if (index === -1) throw new NotFoundException();
      return await db.getData(`/tasks[${index}]`);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async deleteTask(id: string) {
    try {
      const index = await db.getIndex('/tasks', id);
      await db.delete(`/tasks[${index}]`);
      return {
        id,
        message: 'Task was deleted successfully',
      };
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async createTask(task: TaskEntity) {
    await db.push('/tasks[]', task);
    return {
      id: task.id,
      message: 'Task was successfully created',
    };
  }
}
