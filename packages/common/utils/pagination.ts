interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export class PaginationArray<T> {
  constructor(public rows: T[], public pagination?: Pagination) {}
}
