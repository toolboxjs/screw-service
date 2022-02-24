import { PaginationArray } from '@/common/utils/pagination-array';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocalStorageEntity } from './local-storage.entity';
import { LocalStorageRO, LocalStoragesRO } from './local-storage.interface';
import { CreateLocalStorageDto } from './dto/create-local-storage.dto';

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

  async findOne(id): Promise<LocalStorageRO> {
    return await this.localStorageRepository.findOne({ id });
  }

  async create(params: CreateLocalStorageDto): Promise<void> {
    const localStorage = new LocalStorageEntity();
    localStorage.key = params.key;
    await this.localStorageRepository.save(localStorage);
    return;
  }
}
