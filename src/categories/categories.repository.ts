import { Injectable } from '@nestjs/common';
import db from 'src/db';
import { CategoryEntity } from 'src/types/interfaces';

@Injectable()
export class CategoriesRepository {
  async getCategories() {
    try {
      return await db.getData('/categories');
    } catch (error) {
      return [];
    }
  }

  async createCategories(category: CategoryEntity) {
    await db.push(`/categories[]`, category);
    return {
      id: category.id,
      message: 'Category was successfully created',
    };
  }
}
