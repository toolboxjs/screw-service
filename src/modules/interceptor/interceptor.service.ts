import { PaginationArray } from '@/utils/pagination-array';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CreateInterceptorDto } from './dto/create-interceptor.dto';
import { UpdateInterceptorDto } from './dto/update-interceptor.dto';
import { InterceptorEntity } from './interceptor.entity';
import { InterceptorsRO } from './interceptor.interface';

@Injectable()
export class InterceptorService {
  constructor(
    @InjectRepository(InterceptorEntity)
    private readonly interceptorRepository: Repository<InterceptorEntity>
  ) {}

  async findAll(query): Promise<InterceptorsRO> {
    const qb = await getRepository(InterceptorEntity).createQueryBuilder(
      'interceptor'
    );
    qb.where('1 = 1');
    const interceptors = await qb.getMany();
    return new PaginationArray(interceptors);
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
    const updated = Object.assign(toUpdate, params);
    await this.interceptorRepository.save(updated);
    return;
  }
}
