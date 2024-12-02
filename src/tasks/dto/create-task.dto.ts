// src/task/dto/create-task.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  dueDate: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  tag?: string;

  @ApiProperty()
  @IsNotEmpty()
  userId: number;
}
