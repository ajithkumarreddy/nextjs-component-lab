"use client";
import type { Toast } from "./Toast.types";
import { useToast } from "./ToastProvider";

// sample toast
const Toasts: Toast[] = [
  {
    id: 1,
    title: "Important Info",
    message: "success",
    type: "info",
    duration: 2000,
  },
  {
    id: 2,
    title: "Important Info",
    message: "Sorry, There's some issue from our side.",
    type: "success",
  },
  {
    id: 3,
    title: "Important Info",
    message: "Hello there!",
    type: "error",
  },
];

const ToastProviderWithProps = () => {
  const { show, clear } = useToast();

  return (
    <div className="flex flex-col gap-3 items-center justify-center w-300 mx-auto">
      <button
        className="w-auto h-10 px-2 py-2 bg-blue-500 text-white cursor-pointer font-semibold rounded-md"
        onClick={() => show(Toasts[0])}
      >
        Show Toast 1
      </button>
      <button
        className="w-auto h-10 px-2 py-2 bg-blue-500 text-white cursor-pointer font-semibold rounded-md"
        onClick={() => show(Toasts[1])}
      >
        Show Toast 2
      </button>
      <button
        className="w-auto h-10 px-2 py-2 bg-blue-500 text-white cursor-pointer font-semibold rounded-md"
        onClick={() => show(Toasts[2])}
      >
        Show Toast 3
      </button>
      <button
        className="w-auto h-10 px-2 py-2 bg-blue-500 text-white cursor-pointer font-semibold rounded-md"
        onClick={() => clear()}
      >
        Clear Toast
      </button>
    </div>
  );
};

export default ToastProviderWithProps;
