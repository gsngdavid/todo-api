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
    let categories: CategoryEntity[];
    try {
      categories = await db.getData('/categories');
    } catch (error) {
      if (error instanceof DataError) categories = [];
    }

    if (categories.some((category) => category.name === name))
      throw new BadRequestException('Category already exists');

    const id = uuidv4();
    return this.repo.createCategory({ id, name });
  }

  async deleteCategory(id: string) {
    return this.repo.deleteCategory(id);
  }
}
