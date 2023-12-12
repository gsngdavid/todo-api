import { Injectable } from '@nestjs/common';
import db from 'src/db';
import { CategoryEntity } from 'src/types/interfaces';

@Injectable()
export class CategoriesRepository {
  async getCategories() {
    return await db.getData('/categories');
  }

  async createCategories(category: CategoryEntity) {
    console.log(category);
    await db.push(`/categories[]`, category);
    return {
      id: category.id,
      message: 'Category was successfully created',
    };
  }
}
