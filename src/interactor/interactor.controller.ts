import { Controller, Get, Query } from '@nestjs/common';
import { InteractorService } from './interacrot.service';
import { InteractorsRO } from './interactor.interface';

@Controller('interactors')
export class InteractorController {
  constructor(private readonly interactorService: InteractorService) {}

  @Get()
  async findAll(@Query() query): Promise<InteractorsRO> {
    debugger;
    return await this.interactorService.findAll(query);
  }
}
