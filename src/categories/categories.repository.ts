import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesRepository {
  getCategories() {
    return 'All categories';
  }
}
