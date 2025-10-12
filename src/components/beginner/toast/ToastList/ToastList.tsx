import React from "react";
import type { ToastListProps } from "../Toast.types";
import ToastItem from "../ToastItem/ToastItem";
import { toastListContainer } from "./ToastList.styles";

const ToastList: React.FC<ToastListProps> = ({ toasts, placement, dismiss }) => {
  return (
    <ul className={toastListContainer({ placement })}>
      {toasts.map((toast, index) => (
        <ToastItem key={index} toast={toast} dismiss={dismiss} />
      ))}
    </ul>
  );
};

export default ToastList;
