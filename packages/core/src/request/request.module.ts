import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestEntity } from '@screw/common/entities/request.entity';
import { RequestService } from './request.service';
import { RequestController } from './requets.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RequestEntity])],
  providers: [RequestService],
  controllers: [RequestController]
})
export class RequestModule {}
