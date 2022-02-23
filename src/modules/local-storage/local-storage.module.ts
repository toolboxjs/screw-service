import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalStorageService } from './local-storage.service';
import { LocalStorageController } from './local-storage.controller';
import { LocalStorageEntity } from './local-storage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocalStorageEntity])],
  providers: [LocalStorageService],
  controllers: [LocalStorageController]
})
export class LocalStorageModule {}
