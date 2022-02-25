import { PaginationArray } from '@/common/utils/pagination-array';
import { InterceptorEntity } from '@/common/entities/interceptor.entity';

export interface InterceptorRO extends InterceptorEntity {}

export interface InterceptorsRO extends PaginationArray<InterceptorEntity> {}
