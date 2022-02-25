import { PaginationArray } from '@screw/common/utils/pagination-array';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocalStorageEntity } from 'packages/common/entities/local-storage.entity';
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

  async create({ key }: CreateLocalStorageDto): Promise<void> {
    const ls = await this.localStorageRepository.findOne({ key });

    if (ls) throw new BadRequestException();

    const localStorage = new LocalStorageEntity();
    localStorage.key = key;
    await this.localStorageRepository.save(localStorage);
    return;
  }
}
