import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestEntity } from '@screw/common/entities/request.entity';
import { PaginationArray } from '@screw/common/utils/pagination';
import { Repository } from 'typeorm';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(RequestEntity)
    private readonly requestRepository: Repository<RequestEntity>
  ) {}

  async findAll() {
    const requests = await this.requestRepository.find();
    return new PaginationArray(requests);
  }
}
