import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { LocalStoragesRO } from './local-storage.interface';
import { LocalStorageService } from './local-storage.service';
import { CreateLocalStorageDto } from './dto/create-local-storage.dto';

@Controller('local-storages')
export class LocalStorageController {
  constructor(private readonly localStoragesService: LocalStorageService) {}

  @Get()
  async findAll(@Query() query): Promise<LocalStoragesRO> {
    return this.localStoragesService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.localStoragesService.findOne(id);
  }

  @Post()
  async create(@Body() createLocalStorageDto: CreateLocalStorageDto) {
    return await this.localStoragesService.create(createLocalStorageDto);
  }
}
