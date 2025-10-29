"use client";
import { type FC, useEffect, useState } from "react";
import type { PaginationProps } from "./pagination.types";
import {
  PaginationButtonControls,
  PaginationNavContainer,
} from "./pagination.styles";
import getVisiblePages from "./helpers/getVisiblePages";

const Pagination: FC<PaginationProps> = ({
  totalItems,
  pageSize = 10,
  currentPage,
  defaultPage,
  onPageChange,
}: PaginationProps) => {
  const [activePage, setActivePage] = useState<number>(
    currentPage ?? defaultPage ?? 1
  );
  const totalPages = Math.max(1, Math.ceil((totalItems ?? 0) / pageSize));
  const pages = getVisiblePages(totalPages, activePage, 3);

  const handlePrevPage = () => {
    setActivePage((prev) => {
      const prevPage = typeof prev === "number" ? prev : 1;
      return Math.max(1, prevPage - 1);
    });
  };

  const handleNextPage = () => {
    setActivePage((prev) => {
      const prevPage = typeof prev === "number" ? prev : 1;
      return Math.min(totalPages, prevPage + 1);
    });
  };

  useEffect(() => {
    onPageChange?.(activePage);
  }, [activePage]);

  return (
    <nav className={PaginationNavContainer()}>
      {/* Prev Page */}
      <button
        type="button"
        className={PaginationButtonControls({ disabled: activePage <= 1 })}
        onClick={handlePrevPage}
        aria-label="Prev Page"
        disabled={activePage <= 1}
      >
        {"<"} Prev
      </button>

      {/* Pages */}
      {pages.map((page, i) =>
        page === "..." ? (
          <span key={`dots-${i}`} className="px-2 select-none text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => setActivePage(page as number)}
            aria-label={`Page ${page}`}
            aria-current={page === activePage ? "page" : undefined}
            className={PaginationButtonControls({ isActive: page === activePage })}
          >
            {page}
          </button>
        )
      )}

      {/* Next Page */}
      <button
        type="button"
        className={PaginationButtonControls({
          disabled: activePage === totalPages,
        })}
        onClick={handleNextPage}
        aria-label="Next Page"
        disabled={activePage === totalPages}
      >
        Next {">"}
      </button>
    </nav>
  );
};

export default Pagination;
