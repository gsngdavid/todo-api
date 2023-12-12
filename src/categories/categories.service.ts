import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategoriesService {
  constructor(private repo: CategoriesRepository) {}

  getCategories() {
    return this.repo.getCategories();
  }

  createCategory(name: string) {
    const id = uuidv4();
    return this.repo.createCategories({ id, name });
  }
}
