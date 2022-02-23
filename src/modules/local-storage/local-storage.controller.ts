import { Controller, Get, Query } from '@nestjs/common';
import { LocalStoragesRO } from './local-storage.interface';
import { LocalStorageService } from './local-storage.service';

@Controller('local-storages')
export class LocalStorageController {
  constructor(private readonly localStoragesRO: LocalStorageService) {}

  @Get()
  async findAll(@Query() query): Promise<LocalStoragesRO> {
    return this.localStoragesRO.findAll(query);
  }
}
