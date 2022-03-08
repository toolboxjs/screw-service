import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateI18nFieldDto } from './dto/create-i18n-field.dto';
import { I18nFieldService } from './i18n-field.service';

@Controller('i18n-fields')
export class I18nFieldController {
  constructor(private readonly i18nFieldService: I18nFieldService) {}

  @Get()
  async findAll() {
    return await this.i18nFieldService.findAll();
  }

  @Post()
  async create(@Body() createI18nFieldDto: CreateI18nFieldDto) {
    return await this.i18nFieldService.create(createI18nFieldDto);
  }
}
