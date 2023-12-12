import { TaskStatus } from './enums';

export interface TaskEntity {
  id: string;
  categoryId: string;
  title: string;
  status: TaskStatus;
  description: string;
}

export interface CategoryEntity {
  id: string;
  name: string;
}

export interface TaskDto {
  categoryId: string;
  title: string;
  description: string;
}
