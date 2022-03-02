import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { RequestsRO } from './request.interface';
import { RequestService } from './request.service';

@Controller('requests')
@UseGuards(JwtAuthGuard)
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  async findAll(): Promise<RequestsRO> {
    return await this.requestService.findAll();
  }

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(createRequestDto);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateRequestDto: UpdateRequestDto) {
    return await this.requestService.update(id, updateRequestDto);
  }
}
