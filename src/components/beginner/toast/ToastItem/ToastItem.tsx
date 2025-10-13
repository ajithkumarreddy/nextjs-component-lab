"use client";
import React, { useEffect, useRef } from "react";
import { ToastItemProps } from "../Toast.types";
import { toastContainer, toastTitle } from "./ToastItem.styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ToastItem: React.FC<ToastItemProps> = ({ toast, dismiss }) => {
  const { id, title, message, type, duration } = toast;
  const startTimerRef = useRef<number | null>(null);
  const remainingTimerRef = useRef<number>(duration ?? 0);
  const timeoutRef = useRef<number | null>(null);

  const onClose = () => {
    dismiss(id);
  };

  const onPause = () => {
    if (duration === 0) return;

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (startTimerRef.current != null) {
      const elapsed = Date.now() - startTimerRef.current;
      remainingTimerRef.current = Math.max(
        0,
        remainingTimerRef.current - elapsed
      );
    }
  };

  const onResume = () => {
    if (duration === 0) return;

    startTimerRef.current = Date.now();
    timeoutRef.current = window.setTimeout(() => {
      dismiss(id);
    }, remainingTimerRef.current);
  };

  useEffect(() => {
    if (duration === 0) return;

    startTimerRef.current = Date.now();
    timeoutRef.current = window.setTimeout(() => {
      dismiss(id);
    }, remainingTimerRef.current);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [id, duration, dismiss]);

  return (
    <li
      key={id}
      className={toastContainer({ type: type })}
      onMouseEnter={onPause}
      onMouseLeave={onResume}
    >
      <div className="flex-1">
        {title && <div className={toastTitle()}>{title}</div>}
        <div className="font-medium">{message}</div>
      </div>

      <div className="flex-shrink-0 ml-2">
        <button onClick={onClose} className="cursor-pointer">
          <AiOutlineCloseCircle className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};

export default ToastItem;
