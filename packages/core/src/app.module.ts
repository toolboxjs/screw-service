import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { InterceptorModule } from './interceptor/interceptor.module';
import { LocalStorageModule } from './local-storage/local-storage.module';

@Module({
  imports: [TypeOrmModule.forRoot(), InterceptorModule, LocalStorageModule],
  providers: []
})
export class AppModule {}
