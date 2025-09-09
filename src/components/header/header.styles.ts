import { tv } from "tailwind-variants";

export const headerStyles = {
  wrapper: tv({
    base: "flex items-center justify-between p-6 bg-white shadow-lg border-b border-gray-300",
  }),
  link: tv({
    base: "text-lg px-4 py-2 rounded-md bg-white text-black font-bold cursor-pointer transition-colors hover:underline underline-offset-2",
  }),
};
