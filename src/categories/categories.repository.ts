import { Injectable } from '@nestjs/common';
import { CategoryEntity } from 'src/types/interfaces';

@Injectable()
export class CategoriesRepository {
  getCategories() {
    return 'All categories';
  }

  createCategories(category: CategoryEntity) {
    console.log('Category: ', category);
    return {
      id: category.id,
      message: 'Category was successfully created',
    };
  }
}
