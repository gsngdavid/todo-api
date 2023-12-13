import { ApiProperty } from '@nestjs/swagger';
import { Matches } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Work', required: true })
  @Matches(/^[A-Za-z ]+$/g)
  name: string;
}
