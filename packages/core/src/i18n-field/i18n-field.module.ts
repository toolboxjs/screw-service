import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { I18nFieldEntity } from '@screw/common/entities/i18n-field.entity';
import { I18nFieldService } from './i18n-field.service';
import { I18nFieldController } from './i18n-filed.controller';

@Module({
  imports: [TypeOrmModule.forFeature([I18nFieldEntity])],
  providers: [I18nFieldService],
  controllers: [I18nFieldController]
})
export class I18nFieldModule {}
