import { PaginationArray } from '@screw/common/utils/pagination-array';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InterceptorEntity } from 'packages/common/entities/interceptor.entity';
import { CreateInterceptorDto } from './dto/create-interceptor.dto';
import { UpdateInterceptorDto } from './dto/update-interceptor.dto';
import { InterceptorRO, InterceptorsRO } from './interceptor.interface';

@Injectable()
export class InterceptorService {
  constructor(
    @InjectRepository(InterceptorEntity)
    private readonly interceptorRepository: Repository<InterceptorEntity>
  ) {}

  async findAll(query): Promise<InterceptorsRO> {
    const interceptors = await this.interceptorRepository.find();
    return new PaginationArray(interceptors);
  }

  async findOne(id: number): Promise<InterceptorRO> {
    return await this.interceptorRepository.findOne({ id });
  }

  async create(params: CreateInterceptorDto): Promise<void> {
    const interceptor = new InterceptorEntity();
    interceptor.request = params.request;
    interceptor.response_on_fullfilled = params.response_on_fullfilled;
    interceptor.response_on_rejected = params.response_on_rejected;
    await this.interceptorRepository.save(interceptor);
    return;
  }

  async update(id: number, params: UpdateInterceptorDto): Promise<void> {
    const toUpdate = await this.interceptorRepository.findOne({ id });

    if (!toUpdate) throw new BadRequestException();

    const updated = Object.assign(toUpdate, params);

    await this.interceptorRepository.save(updated);
    return;
  }
}
