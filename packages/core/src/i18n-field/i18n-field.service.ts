import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { I18nFieldEntity } from '@screw/common/entities/i18n-field.entity';
import { PaginationArray } from '@screw/common/utils/pagination';
import { Repository } from 'typeorm';
import { CreateI18nFieldDto } from './dto/create-i18n-field.dto';

@Injectable()
export class I18nFieldService {
  constructor(
    @InjectRepository(I18nFieldEntity)
    private readonly i18nFieldRepository: Repository<I18nFieldEntity>
  ) {}

  async findAll() {
    const i18nFields = await this.i18nFieldRepository.find();
    return new PaginationArray(i18nFields);
  }

  async create(data: CreateI18nFieldDto): Promise<void> {
    const i18nField = await this.i18nFieldRepository.findOne({ key: data.key });
    if (i18nField) throw new BadRequestException();
    const toCreate = new I18nFieldEntity();
    toCreate.alias = data.alias;
    toCreate.key = data.key;
    toCreate.en_us = data.en_us;
    toCreate.zh_cn = data.zh_cn;
    await this.i18nFieldRepository.save(toCreate);
    return;
  }
}
