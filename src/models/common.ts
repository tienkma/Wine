export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}
export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export interface RequestPayload {
  params?: {
    limit?: string | number;
    page?: string | number;
  };
  filter?: Record<string, any>;
}
