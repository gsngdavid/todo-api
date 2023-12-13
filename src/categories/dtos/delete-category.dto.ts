import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class DeleteCategoryDto {
  @ApiProperty({
    example: '9b7a183a-4be7-44b4-a80b-3c3b6489365b',
    required: true,
  })
  @IsUUID()
  id: string;
}
