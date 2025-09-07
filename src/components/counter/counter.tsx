"use client";
import { useState } from "react";
import type { FC } from "react";
import { CounterProps } from "./counter.types";
import { counterStyles } from "./counter.styles";

const Counter: FC<CounterProps> = ({ initialValue = 0, step = 1 }) => {
  const [count, setCount] = useState(initialValue);

  // increment handler
  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + step;
      return newCount <= 0 ? 0 : newCount;
    });
  };

  // decrement handler
  const handleDecrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount - step;
      return newCount <= 0 ? 0 : newCount;
    });
  };

  // reset handler
  const handleReset = () => {
    setCount(initialValue);
  };

  return (
    <div className={counterStyles.wrapper()}>
      <p className={counterStyles.value()}>{count}</p>
      <div className="space-x-2">
        <button
          className={counterStyles.button({ intent: "increment" })}
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className={counterStyles.button({ intent: "decrement" })}
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          className={counterStyles.button({ intent: "reset" })}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
