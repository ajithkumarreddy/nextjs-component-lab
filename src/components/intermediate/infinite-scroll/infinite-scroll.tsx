"use client";
import React from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

export const InfiniteScroll = () => {
  const { markerRef, items, isLoading, hasMore } = useIntersectionObserver();

  return (
    <div className="max-w-[900px] mx-auto p-4">
      <h2 className="mb-3 text-xl text-bold">Products</h2>

      <div className="grid grid-cols-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-3 flex flex-col gap-2"
          >
            <div className="w-full aspect-[16/10] overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="text-sm font-semibold">{item.title}</div>
            <div className="text-gray-600">{item.price}</div>
          </div>
        ))}
      </div>

      <div ref={markerRef} className="h-1" />

      <div className="p-3 text-center">
        {isLoading && <div className="font-bold">Loading more…</div>}
        {!isLoading && !hasMore && <div>No more items</div>}
      </div>
    </div>
  );
};

export default InfiniteScroll;
