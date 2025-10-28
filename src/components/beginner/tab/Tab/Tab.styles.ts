import { tv } from "tailwind-variants";

export const tabStyles = tv({
  base: [
    "px-4 py-2 text-sm font-medium font-semibold transition-all duration-200 cursor-pointer",
    "border-b-4 border-transparent",
    "hover:text-blue-600 hover:border-blue-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible: ring-rounded-md",
    "disable:text-gray-400 disabled:cursor-not-allowed",
  ],
  variants: {
    isActive: {
      true: "text-blue-600 border-blue-600 hover:border-blue-600",
      false: "text-gray-600 border-transparent",
    },
  },
  defaultVariants: {
    isActive: false,
  },
});
