"use client";
import React, {
  type FC,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import { createPortal } from "react-dom";
import ModalContent from "./modal-content";

const Modal: FC<{}> = ({}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // modal root ref
  useEffect(() => {
    const element = document.getElementById("modal-root");
    elementRef.current = element;

    return () => {
      elementRef.current = null;
    };
  }, []);

  // keydown event handler
  useEffect(() => {
    if (!showModal) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [showModal, setShowModal]);

  // focus on previous active element
  useLayoutEffect(() => {
    if (!showModal) return;

    previousActiveElementRef.current =
      document.activeElement as HTMLElement | null;

    return () => {
      try {
        previousActiveElementRef.current?.focus();
      } catch {
        /* ignore if focus fails */
      }
    };
  }, [showModal]);

  return (
    <div className="max-w-3xl h-[400px] p-12 mx-auto flex justify-center items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white h-auto w-auto px-3 py-2 rounded-md font-semibold cursor-pointer border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
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
