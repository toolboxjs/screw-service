import { PaginationArray } from '@/common/utils/pagination-array';
import { LocalStorageEntity } from './local-storage.entity';

export interface LocalStorageRO extends LocalStorageEntity {}

export interface LocalStoragesRO extends PaginationArray<LocalStorageEntity> {}
