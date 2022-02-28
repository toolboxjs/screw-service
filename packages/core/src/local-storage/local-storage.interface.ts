import { PaginationArray } from '@screw/common/utils/pagination';
import { LocalStorageEntity } from '@screw/common/entities/local-storage.entity';

export interface LocalStorageRO extends LocalStorageEntity {}

export interface LocalStoragesRO extends PaginationArray<LocalStorageEntity> {}
