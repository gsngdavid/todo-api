import { IsAlphanumeric, IsString, IsUUID } from 'class-validator';

export class CreateTaskDto {
  @IsUUID()
  categoryId: string;

  @IsAlphanumeric()
  title: string;

  @IsString()
  description: string;
}
