import { InteractorEntity } from './interactor.entity';

export interface InteractorsRO {
  rows: InteractorEntity[];
  pagination?: {
    current?: number;
    pageSize?: number;
    total?: number;
  };
}
