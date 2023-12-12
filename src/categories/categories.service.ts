import { BadRequestException, Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { v4 as uuidv4 } from 'uuid';
import db from 'src/db';
import { CategoryEntity } from 'src/types/interfaces';

@Injectable()
export class CategoriesService {
  constructor(private repo: CategoriesRepository) {}

  getCategories() {
    return this.repo.getCategories();
  }

  async createCategory(name: string) {
    const categories: CategoryEntity[] = await db.getData('/categories');
    if (categories.some((category) => category.name === name))
      throw new BadRequestException('Category already exists');
    const id = uuidv4();
    return this.repo.createCategories({ id, name });
  }
}
