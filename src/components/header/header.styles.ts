import { tv } from "tailwind-variants";

export const headerStyles = {
  wrapper: tv({
    base: "flex items-center justify-between bg-white shadow-lg border-b border-gray-300",
  }),
  link: tv({
    base: "text-lg rounded-md bg-white text-black font-bold cursor-pointer transition-colors hover:underline underline-offset-2",
    variants: {
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-4 text-base",
        lg: "px-4 py-2 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }),
};
