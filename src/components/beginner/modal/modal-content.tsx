"use client";
import { type FC, useEffect, useRef } from "react";

const ModalContent: FC<{ onClose: () => void }> = ({ onClose }) => {
  const elementRef = useRef<HTMLInputElement | null>(null);

  // focus on first element on mount
  useEffect(() => {
    const element = elementRef.current;
    if (element) element.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 flex flex-col">
        <b className="mb-4">Sample Modal Content</b>
        <input
          ref={elementRef}
          className="h-8 w-auto border-2 px-2 py-4 mb-4 rounded-md focus:outline-2"
          type="text"
          placeholder="Sample text field"
        />
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white rounded-md h-auto w-auto p-2 font-semibold cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
