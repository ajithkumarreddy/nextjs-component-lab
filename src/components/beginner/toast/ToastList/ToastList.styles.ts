import { tv } from "tailwind-variants";

export const toastListContainer = tv({
  base: "fixed z-9999 flex flex-col gap-2 pointer-events-none",
  variants: {
    placement: {
      "top-right": "top-2 right-2",
      "top-left": "top-2 left-2",
      "bottom-right": "bottom-2 right-2",
      "bottom-left": "bottom-2 left-2",
    },
  },
  defaultVariants: {
    placement: "top-right",
  },
});
