import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards
} from '@nestjs/common';
import { JwtAuthGuard } from '@screw/core/auth/jwt-auth.guard';
import { InterceptorService } from './interceptor.service';
import { InterceptorsRO } from './interceptor.interface';
import { CreateInterceptorDto } from './dto/create-interceptor.dto';
import { UpdateInterceptorDto } from './dto/update-interceptor.dto';

@Controller('interceptors')
@UseGuards(JwtAuthGuard)
export class InterceptorController {
  constructor(private readonly interceptorService: InterceptorService) {}

  @Get()
  async findAll(@Query() query): Promise<InterceptorsRO> {
    return this.interceptorService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return this.interceptorService.findOne(id);
  }

  @Post()
  create(@Body() createInterceptorDto: CreateInterceptorDto) {
    return this.interceptorService.create(createInterceptorDto);
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateInterceptorDto: UpdateInterceptorDto) {
    return this.interceptorService.update(id, updateInterceptorDto);
  }
}
