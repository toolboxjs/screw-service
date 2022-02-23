import { PaginationArray } from '@/utils/pagination-array';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
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
}
