"use client";
import { type FC, useState } from "react";
import type { AccordianItemProps } from "./accordian.types";

const AccordianItem: FC<AccordianItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-2 p-2 mb-2">
      <button
        className="w-full text-left cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div
          id={`content-${title}`}
          className="overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-2">{content}</div>
        </div>
      )}
    </div>
  );
};

export default AccordianItem;
