import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { InterceptorModule } from './modules/interceptor/interceptor.module';
import { LocalStorageModule } from './modules/local-storage/local-storage.module';

@Module({
  imports: [TypeOrmModule.forRoot(), InterceptorModule, LocalStorageModule],
  providers: []
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
