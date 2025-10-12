import { ReactNode } from "react";

// Common Toast types
type ToastPlacement = "top-right" | "top-left" | "bottom-right" | "bottom-left";

export type ToastTypes = "info" | "success" | "error";

export type Toast = {
  id: number;
  title: string;
  message: string;
  type: ToastTypes;
  duration?: number | null;
};

// Toast Item types
export type ToastItemProps = {
  toast: Toast;
  dismiss: (id: number) => void;
};

// Toast List types
export type ToastListProps = {
  toasts: Toast[];
  placement: ToastPlacement;
  dismiss: (id: number) => void;
};

// Toast Provider types
export type ToastProviderProps = {
  children: ReactNode;
  placement: ToastPlacement;
};

// Toast Reducer types
export type TypeReducerActionType =
  | { type: "ADD"; payload: Toast }
  | { type: "REMOVE"; payload: { id: number } }
  | { type: "CLEAR" };
