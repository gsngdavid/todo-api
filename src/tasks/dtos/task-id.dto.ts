import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class TaskIdDto {
  @ApiProperty({
    example: '91994ebc-e6e5-42fd-ac3a-19269fa574cf',
    required: true,
  })
  @IsUUID()
  id: string;
}
