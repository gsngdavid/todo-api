import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';
import { CategoriesController } from './categories/categories.controller';
import { TasksModule } from './tasks/tasks.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [TasksModule, CategoriesModule],
  controllers: [TasksController, CategoriesController],
})
export class AppModule {}
