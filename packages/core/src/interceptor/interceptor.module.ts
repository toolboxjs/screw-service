import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterceptorEntity } from '@screw/common/entities/interceptor.entity';
import { InterceptorService } from './interceptor.service';
import { InterceptorController } from './interceptor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InterceptorEntity])],
  providers: [InterceptorService],
  controllers: [InterceptorController]
})
export class InterceptorModule {}
