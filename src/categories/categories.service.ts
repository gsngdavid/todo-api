import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private repo: CategoriesRepository) {}

  getCategories() {
    return this.repo.getCategories();
  }
}
