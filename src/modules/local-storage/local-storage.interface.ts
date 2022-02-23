import { PaginationArray } from '@/utils/pagination-array';
import { LocalStorageEntity } from './local-storage.entity';

export interface LocalStoragesRO extends PaginationArray<LocalStorageEntity> {}
