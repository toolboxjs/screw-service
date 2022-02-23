import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterceptorService } from './interceptor.service';
import { InterceptorController } from './interceptor.controller';
import { InterceptorEntity } from './interceptor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InterceptorEntity])],
  providers: [InterceptorService],
  controllers: [InterceptorController]
})
export class InterceptorModule {}
