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
  @IsOptional()
  weather?: string;

  @ApiProperty()
  @IsNotEmpty()
  userId: number;
}
