import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@screw/common/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findOne(where) {
    return this.userRepository.findOne(where);
  }

  async create(data: CreateUserDto) {
    const u = await this.userRepository.findOne({ username: data.username });
    if (u) throw new BadRequestException();
    const user = new UserEntity();
    user.username = data.username;
    user.password = data.password;
    await this.userRepository.save(user);
    return;
  }
}
