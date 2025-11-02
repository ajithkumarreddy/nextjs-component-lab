"use client";

import { useEffect, useRef, useState } from "react";

const useThrottle = (value: any, delay: number) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const now = Date.now();
    const timeSinceLast = now - lastRan.current;

    if (timeSinceLast >= delay) {
      lastRan.current = now;
      setThrottledValue(value);
    } else {
      const remainingTime = delay - timeSinceLast;
      timer.current = window.setTimeout(() => {
        lastRan.current = Date.now();
        setThrottledValue(value);
        timer.current = null;
      }, remainingTime);
    }

    return () => {
      if (timer.current != null) {
        clearTimeout(timer.current);
        timer.current = null;
      }
    };
  }, [value, delay]);

  return throttledValue;
};

export default useThrottle;
