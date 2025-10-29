'use client';
import { useState } from "react";
import Pagination from "./pagination";

const PaginationWithProps = () => {
  const [activePage, setActivePage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  return (
    <div className="flex flex-col my-50 justify-center items-center">
      <h2 className="font-semibold mb-10">Current Page: {activePage}</h2>
      <Pagination
        totalItems={200}
        pageSize={10}
        defaultPage={1}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationWithProps;
