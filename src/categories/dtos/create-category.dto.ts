import { IsAlpha } from 'class-validator';

export class CreateCategoryDto {
  @IsAlpha()
  name: string;
}
