import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll() {
    try {
      return this.usersRepository.find();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.usersRepository.findOne({
        where: { id },
        relations: ['tasks'],
        select: ['id', 'username', 'email', 'tasks'], // select fields to exclude password
      });
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return user;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  remove(id: number) {
    try {
      return this.usersRepository.delete(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
