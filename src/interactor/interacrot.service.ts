import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { InteractorEntity } from './interactor.entity';
import { InteractorsRO } from './interactor.interface';

@Injectable()
export class InteractorService {
  constructor(
    @InjectRepository(InteractorEntity)
    private readonly interactorRepository: Repository<InteractorEntity>
  ) {}

  async findAll(query): Promise<InteractorsRO> {
    const qb = await getRepository(InteractorEntity).createQueryBuilder(
      'interactor'
    );
    qb.where('1 = 1');
    const interactors = await qb.getMany();
    return { rows: interactors };
  }
}
