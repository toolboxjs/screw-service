import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { InterceptorModule } from './interceptor/interceptor.module';

@Module({
  imports: [TypeOrmModule.forRoot(), InterceptorModule],
  providers: []
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
