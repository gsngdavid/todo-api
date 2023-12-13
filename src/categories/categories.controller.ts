import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private service: CategoriesService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Categories retrieved successfully',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error server occurred.',
  })
  getCategories() {
    return this.service.getCategories();
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Record created successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error server occurred.',
  })
  @ApiBody({
    type: CreateCategoryDto,
    description: 'Json structure for task object',
  })
  createCategory(@Body() body: CreateCategoryDto) {
    return this.service.createCategory(body.name);
  }
}
