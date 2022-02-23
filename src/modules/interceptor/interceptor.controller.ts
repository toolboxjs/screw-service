import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { InterceptorService } from './interceptor.service';
import { InterceptorsRO } from './interceptor.interface';
import { CreateInterceptorDto } from './dto/create-interceptor.dto';
import { UpdateInterceptorDto } from './dto/update-interceptor.dto';

@Controller('interceptors')
export class InterceptorController {
  constructor(private readonly interceptorService: InterceptorService) {}

  @Get()
  async findAll(@Query() query): Promise<InterceptorsRO> {
    return this.interceptorService.findAll(query);
  }

  @Post()
  create(@Body() createInterceptorDto: CreateInterceptorDto) {
    return this.interceptorService.create(createInterceptorDto);
  }

  @Put(':id')
  update(@Param() param, @Body() updateInterceptorDto: UpdateInterceptorDto) {
    return this.interceptorService.update(param.id, updateInterceptorDto);
  }
}
