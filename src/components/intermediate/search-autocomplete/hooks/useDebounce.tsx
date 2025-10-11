'use client';
import { useState, useEffect } from "react";

/**
 *
 * @param value value to be debounced
 * @param delay delay in ms
 * @returns Debounced value
 */
const useDebounce = <T,>(value: T, delay: number = 500): T => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
