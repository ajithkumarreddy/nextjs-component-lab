import { tv } from "tailwind-variants";

export const tabPanelStyles = tv({
  base: [
    "p-4 bg-white rounded-xl shadow-sm",
    "transition-opacity duration-200 ease-in-out",
    "border border-gray-200",
    "focus:outline-none",
    "data-hidden:pointer-events-none",
  ],
});
