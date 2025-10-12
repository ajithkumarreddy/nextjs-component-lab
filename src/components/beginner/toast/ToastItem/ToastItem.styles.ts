import { tv } from "tailwind-variants";

export const toastContainer = tv({
  base: "flex gap-3 border rounded-md p-2 shadow-sm items-start min-w-[240px] max-w-[360px] pointer-events-auto",
  variants: {
    type: {
      info: "bg-sky-100 border-sky-200",
      success: "bg-emerald-100 border-emerald-200",
      error: "bg-rose-100 border-rose-200",
      warning: "bg-amber-100 border-amber-200",
    },
  },
  defaultVariants: {
    type: "info",
  },
});

export const toastTitle = tv({
  base: "font-medium",
  variants: {
    type: {
      info: "text-sky-700",
      success: "text-emerald-700",
      error: "text-rose-700",
      warning: "text-amber-700",
    },
  },
  defaultVariants: {
    type: "info",
  },
});
