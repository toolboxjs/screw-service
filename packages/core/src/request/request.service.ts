import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestEntity } from '@screw/common/entities/request.entity';
import { PaginationArray } from '@screw/common/utils/pagination';
import { Repository } from 'typeorm';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';

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

  async create(data: CreateRequestDto): Promise<void> {
    const request = new RequestEntity();
    request.name_en = data.name_en;
    request.name_zh = data.name_zh;
    request.method = data.method;
    request.path = data.path;
    request.headers = data.headers;
    request.body = data.body;
    request.response = data.response;
    await this.requestRepository.save(request);
    return;
  }

  async update(id: number, params: UpdateRequestDto): Promise<void> {
    const toUpdate = await this.requestRepository.findOne({ id });
    const updated = Object.assign(toUpdate, params);
    await this.requestRepository.save(updated);
    return;
  }
}
