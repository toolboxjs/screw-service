import { PaginationArray } from '@screw/common/utils/pagination';
import { InterceptorEntity } from '@screw/common/entities/interceptor.entity';

export interface InterceptorRO extends InterceptorEntity {}

export interface InterceptorsRO extends PaginationArray<InterceptorEntity> {}
