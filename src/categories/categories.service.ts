import { BadRequestException, Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { v4 as uuidv4 } from 'uuid';
import db from '../db';
import { CategoryEntity } from '../types/interfaces';
import { DataError } from 'node-json-db';

@Injectable()
export class CategoriesService {
  constructor(private repo: CategoriesRepository) {}

  getCategories() {
    return this.repo.getCategories();
  }

  async createCategory(name: string) {
    try {
      const categories: CategoryEntity[] = await db.getData('/categories');
      if (categories.some((category) => category.name === name))
        throw new BadRequestException('Category already exists');
    } catch (error) {
      if (error instanceof DataError) {
        const id = uuidv4();
        return this.repo.createCategories({ id, name });
      }
      throw error;
    }
  }

  async deleteCategory(id: string) {
    return this.repo.deleteCategory(id);
  }
}
