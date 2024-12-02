import { Injectable } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(taskData: Partial<Task>, user: User): Promise<Task> {
    const task = this.tasksRepository.create({ ...taskData, user });
    return this.tasksRepository.save(task);
  }

  async findAllByUser(userId: number): Promise<Task[]> {
    return this.tasksRepository.find({ where: { user: { id: userId } } });
  }

  async update(taskId: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    await this.tasksRepository.update(taskId, updateTaskDto);
    return this.tasksRepository.findOne({ where: { id: taskId } });
  }

  async delete(taskId: number): Promise<void> {
    await this.tasksRepository.delete(taskId);
  }
}
