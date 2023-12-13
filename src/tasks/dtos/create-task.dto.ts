import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, Matches } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    example: 'd473d769-34c3-4477-9dde-b17f3e4596e0',
    required: true,
  })
  @IsUUID()
  categoryId: string;

  @ApiProperty({ example: 'Clone website', required: true })
  @Matches(/^[A-Za-z ]+$/g)
  title: string;

  @ApiProperty({ example: 'Cloning cinnamon website at 10:40 AM' })
  @IsString()
  description: string;
}
