import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UsersService } from 'src/users/users.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './entities/task.entity';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(
    private readonly tasksService: TasksService,
    private readonly userService: UsersService,
  ) {}

  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({ status: 201, type: Task })
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    const { userId, ...taskData } = createTaskDto;
    const user = await this.userService.findOne(userId);
    return this.tasksService.create(taskData, user);
  }

  @ApiResponse({ status: 200, type: [Task] })
  @Get(':userId')
  async findAllByUser(@Param('userId') userId: number) {
    return this.tasksService.findAllByUser(userId);
  }

  @ApiResponse({ status: 200, type: Task })
  @Patch(':taskId')
  async update(
    @Param('taskId') taskId: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(taskId, updateTaskDto);
  }

  @ApiResponse({ status: 200 })
  @Delete(':taskId')
  async delete(@Param('taskId') taskId: number) {
    return this.tasksService.delete(taskId);
  }
}
