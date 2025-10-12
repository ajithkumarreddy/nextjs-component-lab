"use client";
import React from "react";
import { ToastItemProps } from "../Toast.types";
import { toastContainer, toastTitle } from "./ToastItem.styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ToastItem: React.FC<ToastItemProps> = ({ toast, dismiss }) => {
  const { id, title, message, type, duration } = toast;

  const onClose = () => {
    dismiss(id);
  };

  return (
    <li key={id} className={toastContainer({ type: type })}>
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
