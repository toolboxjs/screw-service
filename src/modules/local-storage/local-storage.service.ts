import { PaginationArray } from '@/utils/pagination-array';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocalStorageEntity } from './local-storage.entity';
import { LocalStoragesRO } from './local-storage.interface';

@Injectable()
export class LocalStorageService {
  constructor(
    @InjectRepository(LocalStorageEntity)
    private readonly localStorageRepository: Repository<LocalStorageEntity>
  ) {}

  async findAll(query): Promise<LocalStoragesRO> {
    const localStorage = await this.localStorageRepository.find();
    return new PaginationArray(localStorage);
  }
}
