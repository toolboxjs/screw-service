import { RequestEntity } from '@screw/common/entities/request.entity';
import { PaginationArray } from '@screw/common/utils/pagination';

export interface RequestParamRecord {
  type: string;
  default?: string | number | RequestParamRecord | RequestParamRecord[];
  children?: RequestParamRecord[];
}

export interface RequestParamRow extends Record<string, RequestParamRecord> {}

export interface RequestRO extends RequestEntity {}

export interface RequestsRO extends PaginationArray<RequestEntity> {}
