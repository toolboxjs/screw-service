import { PaginationArray } from '@screw/common/utils/pagination-array';
import { InterceptorEntity } from 'packages/common/entities/interceptor.entity';

export interface InterceptorRO extends InterceptorEntity {}

export interface InterceptorsRO extends PaginationArray<InterceptorEntity> {}
