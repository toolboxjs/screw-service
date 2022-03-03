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
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateRequestDto } from './dto/create-request.dto';
import { FilterRequestDto } from './dto/filter-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { RequestRO, RequestsRO } from './request.interface';
import { RequestService } from './request.service';

@Controller('requests')
@UseGuards(JwtAuthGuard)
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  async findAll(
    @Query() filterRequestDto: FilterRequestDto
  ): Promise<RequestsRO> {
    return await this.requestService.findAll(filterRequestDto);
  }

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(createRequestDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RequestRO> {
    return await this.requestService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateRequestDto: UpdateRequestDto) {
    return await this.requestService.update(id, updateRequestDto);
  }
}
