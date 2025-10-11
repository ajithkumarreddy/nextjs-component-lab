"use client";
import { useFetchClient } from "@/utils/useFetchClient";
import { useEffect, useState } from "react";
import type { SearchResponse, SearchResult } from "./search-autocomplete.types";
import useDebounce from "./hooks/useDebounce";

const SearchAutoComplete = () => {
  const { get } = useFetchClient();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await get<SearchResponse>(
          `https://dummyjson.com/products/search?q=${debouncedSearchTerm}`,
          {}
        );

        if (response.products.length > 0) {
          const mapped: SearchResult[] = response.products.map((p) => ({
            id: p.id,
            title: p.title,
            price: p.price,
            thumbnail: p.thumbnail,
          }));
          setSearchResults(mapped);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Failed to fetch products.", error);
        setSearchResults([]);
      }
    };

    fetchData();
  }, [debouncedSearchTerm]);

  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="w-120">
        <input
          className="w-full h-12 border-2 px-2 rounded-md mb-4"
          name="search-term"
          type="text"
          placeholder="Search for products"
          onChange={(e) => setSearchTerm(e.target.value)}
          data-testid="search-term"
        />
        <ul className="space-y-2">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <li
                key={product.id}
                className="p-2 border rounded-md hover:bg-gray-100 cursor-pointer"
              >
                {product.title}
              </li>
            ))
          ) : (
            <h2 className="text-gray-500">No search results found.</h2>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchAutoComplete;
