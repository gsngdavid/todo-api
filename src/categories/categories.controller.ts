import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private service: CategoriesService) {}

  @Get()
  getCategories() {
    return this.service.getCategories();
  }

  @Post()
  createCategory(@Body() body: CreateCategoryDto) {
    return this.service.createCategory(body.name);
  }
}
