"use client";
import { useFetchClient } from "@/utils/useFetchClient";
import { useCallback, useEffect, useRef, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const useIntersectionObserver = () => {
  const markerRef = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState<number>(0);
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const { get } = useFetchClient();

  const fetchDetails = useCallback(
    async ({ page, limit }: { page: number; limit: number }) => {
      if (isLoading || !hasMore) return;
      setIsLoading(true);

      const skip = limit * page;

      try {
        const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
        const response = await get<any>(url, {});

        const products: Product[] = Array.isArray(response?.products)
          ? response.products
          : [];
        const total: number =
          typeof response?.total === "number" ? response.total : -1;

        if (products.length > 0) {
          setItems((prev) => [...prev, ...products]);
        }

        if (total >= 0) {
          const loaded = (page + 1) * limit;
          setHasMore(loaded < total);
        } else {
          if (products.length < limit) setHasMore(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [get, hasMore, isLoading]
  );

  useEffect(() => {
    if (!hasMore) return;
    fetchDetails({ page, limit: 5 });
  }, [page]);

  useEffect(() => {
    const node = markerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isLoading, hasMore]);

  return {
    markerRef,
    items,
    isLoading,
    hasMore,
  };
};

export default useIntersectionObserver;
