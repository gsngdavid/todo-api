import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';
import { CategoriesController } from './categories/categories.controller';
import { TasksModule } from './tasks/tasks.module';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesService } from './categories/categories.service';
import { TasksService } from './tasks/tasks.service';
import { TasksRepository } from './tasks/tasks.repository';
import { CategoriesRepository } from './categories/categories.repository';

@Module({
  imports: [TasksModule, CategoriesModule],
  controllers: [TasksController, CategoriesController],
  providers: [
    TasksService,
    TasksRepository,
    CategoriesService,
    CategoriesRepository,
  ],
})
export class AppModule {}
