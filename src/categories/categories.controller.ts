import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private service: CategoriesService) {}

  @Get()
  getCategories() {
    return this.service.getCategories();
  }

  @Post()
  createCategory(@Body() body) {
    return this.service.createCategory(body);
  }
}
