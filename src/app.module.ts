import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsulModule } from 'nestjs-consul';
import { Connection } from 'typeorm';
import { InterceptorModule } from './modules/interceptor/interceptor.module';
import { LocalStorageModule } from './modules/local-storage/local-storage.module';

interface ConsulConfig {
  keys: { key: string }[];
  connection: {
    portocol: string;
    port: number;
    host: string;
    token?: string;
  };
}

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConsulModule.forRoot<ConsulConfig>({
      keys: [],
      connection: {
        protocol: 'http',
        port: 8500,
        host: '192.168.0.1',
        token: 'mutoken'
      }
    }),
    InterceptorModule,
    LocalStorageModule
  ],
  providers: []
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
