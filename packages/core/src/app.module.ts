import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { I18nFieldModule } from './i18n-field/i18n-field.module';
import { InterceptorModule } from './interceptor/interceptor.module';
import { LocalStorageModule } from './local-storage/local-storage.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    AuthModule,
    InterceptorModule,
    LocalStorageModule,
    RequestModule,
    I18nFieldModule
  ],
  providers: []
})
export class AppModule {}
