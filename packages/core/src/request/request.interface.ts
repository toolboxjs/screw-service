import { RequestEntity } from '@screw/common/entities/request.entity';
import { PaginationArray } from '@screw/common/utils/pagination';

export interface RequestRO extends RequestEntity {}

export interface RequestsRO extends PaginationArray<RequestEntity> {}
