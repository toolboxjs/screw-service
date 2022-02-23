import { Controller, Get, Query } from '@nestjs/common';
import { InterceptorService } from './interceptor.service';
import { InterceptorsRO } from './interceptor.interface';

@Controller('interceptors')
export class InterceptorController {
  constructor(private readonly interceptorService: InterceptorService) {}

  @Get()
  async findAll(@Query() query): Promise<InterceptorsRO> {
    return await this.interceptorService.findAll(query);
  }
}
