import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsulModule } from 'nestjs-consul';
import { IConsulConnection } from 'nestjs-consul/dist/interfaces/consul-connection.interface';
import { Connection } from 'typeorm';
import { InterceptorModule } from './modules/interceptor/interceptor.module';
import { LocalStorageModule } from './modules/local-storage/local-storage.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConsulModule.forRoot<IConsulConnection>({
      keys: [],
      connection: {
        protocol: 'http',
        port: 8500,
        host: '10.128.0.214',
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
