import { PaginationArray } from '@/common/utils/pagination-array';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocalStorageEntity } from '@/common/entities/local-storage.entity';
import { LocalStorageRO, LocalStoragesRO } from './local-storage.interface';
import { CreateLocalStorageDto } from './dto/create-local-storage.dto';
import { ErrorMessage } from '@/common/enums/error-message.enum';

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

    if (ls) {
      throw new HttpException(
        { message: ErrorMessage.LOCAL_STORAGE_KEY_MUST_BE_UNIQUE },
        HttpStatus.BAD_REQUEST
      );
    }

    const localStorage = new LocalStorageEntity();
    localStorage.key = key;
    await this.localStorageRepository.save(localStorage);
    return;
  }
}
