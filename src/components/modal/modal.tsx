"use client";
import React, { type FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./modal-content";

const Modal: FC<{}> = ({}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById("modal-root");
    elementRef.current = element;

    return () => {
      elementRef.current = null;
    };
  }, []);

  return (
    <div className="max-w-3xl h-[400px] p-12 mx-auto flex justify-center items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white h-auto w-auto p-2 font-semibold cursor-pointer"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>
      {showModal && elementRef.current
        ? createPortal(
            <ModalContent onClose={() => setShowModal(false)} />,
            elementRef.current
          )
        : null}
    </div>
  );
};

export default Modal;
