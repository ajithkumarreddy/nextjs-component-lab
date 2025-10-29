const getVisiblePages = (
  totalPages: number,
  activePage: number,
  visibleCount = 3
) => {
  let pages: (number | string)[] = [];

  if (totalPages <= visibleCount + 2) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (activePage <= visibleCount) {
    for (let i = 1; i <= visibleCount; i++) {
      pages.push(i);
    }
    pages.push("...", totalPages);
  } else if (activePage >= totalPages - visibleCount + 1) {
    pages.push(1, "...");
    for (let i = totalPages - visibleCount; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1, "...");
    for (let i = activePage - 1; i <= activePage + 1; i++) {
      pages.push(i);
    }
    pages.push("...", totalPages);
  }

  return pages;
};

export default getVisiblePages;
