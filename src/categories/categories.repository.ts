import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import db from '../db';
import { CategoryEntity, TaskEntity } from '../types/interfaces';
import { DataError } from 'node-json-db';

@Injectable()
export class CategoriesRepository {
  async getCategories() {
    try {
      return await db.getData('/categories');
    } catch (error) {
      return [];
    }
  }

  async createCategory(category: CategoryEntity) {
    await db.push(`/categories[]`, category);
    return {
      id: category.id,
      message: 'Category was successfully created',
    };
  }

  async deleteCategory(id: string) {
    let tasks: TaskEntity[];
    try {
      tasks = await db.getData('/tasks');
    } catch (error) {
      tasks = [];
    } finally {
      try {
        if (tasks.some((task) => task.categoryId === id))
          throw new ConflictException('Only empty category can be deleted');

        const index = await db.getIndex('/categories', id);
        await db.delete(`/categories[${index}]`);
        return {
          id,
          message: 'Category deleted successfully',
        };
      } catch (error) {
        if (error instanceof DataError)
          throw new NotFoundException('Category does not exist');
        throw error;
      }
    }
  }
}
