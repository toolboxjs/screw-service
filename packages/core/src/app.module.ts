import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { InterceptorModule } from './interceptor/interceptor.module';
import { LocalStorageModule } from './local-storage/local-storage.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    AuthModule,
    InterceptorModule,
    LocalStorageModule
  ],
  providers: []
})
export class AppModule {}
