import { tv } from "tailwind-variants";

export const headerStyles = {
  wrapper: tv({
    base: "flex items-center justify-between p-6 bg-white shadow-sm border-b border-gray-300",
  }),
  link: tv({
    base: "text-lg px-3 py-1 rounded-md bg-white text-black font-bold cursor-pointer transition-colors hover:underline underline-offset-2",
  }),
};
