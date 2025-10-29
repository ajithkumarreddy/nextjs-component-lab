export type PaginationProps = {
  totalItems: number;
  pageSize?: number;
  currentPage?: number;
  defaultPage?: number;
  onPageChange?: (page: number) => void;
};
