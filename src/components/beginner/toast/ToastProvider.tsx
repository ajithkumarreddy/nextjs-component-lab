"use client";
import React, { createContext, useContext, useReducer } from "react";
import type { Toast, ToastProviderProps } from "./Toast.types";
import ToastList from "./ToastList/ToastList";
import ToastReducer from "./reducer/toastReducer";

const ToastContext = createContext<{
  show: (payload: Toast) => void;
  dismiss: (id: number) => void;
  clear: () => void;
} | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if(!context) throw new Error("useToast must be used within ToastProvider");
  return context;
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children, placement }) => {
  const [toasts, dispatch] = useReducer(ToastReducer, []);

  const show = (payload: Toast) => {
    const { id } = payload;

    const toast = toasts.find((toast) => toast.id === id);

    if(!toast) {
      dispatch({ type: "ADD", payload: payload });
    }
  };

  const dismiss = (id: number) => {
    dispatch({ type: "REMOVE", payload: { id } });
  };

  const clear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <ToastContext.Provider value={{ show, dismiss, clear }}>
      {children}
      <ToastList toasts={toasts} placement={placement} dismiss={dismiss}/>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
