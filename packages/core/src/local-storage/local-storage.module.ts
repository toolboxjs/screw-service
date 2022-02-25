import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalStorageEntity } from '@screw/common/entities/local-storage.entity';
import { LocalStorageService } from './local-storage.service';
import { LocalStorageController } from './local-storage.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LocalStorageEntity])],
  providers: [LocalStorageService],
  controllers: [LocalStorageController]
})
export class LocalStorageModule {}
