import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteCategoryDto } from './dtos/delete-category.dto';

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

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Category deleted successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request, category with that Id does not exists.',
  })
  @ApiResponse({
    status: 409,
    description: 'Conflicts, only categories with not task can be deleted.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error server occurred.',
  })
  @ApiParam({ name: 'id', required: true })
  deleteCategory(@Param() param: DeleteCategoryDto) {
    return this.service.deleteCategory(param.id);
  }
}
