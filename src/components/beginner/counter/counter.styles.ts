import { tv } from "tailwind-variants";

export const counterStyles = {
  wrapper: tv({
    base: "w-80 p-8 rounded-lg shadow-lg text-center bg-primary mx-auto",
  }),
  value: tv({
    base: "text-4xl font-bold mb-6 text-white",
  }),
  button: tv({
    base: "px-5 py-2 rounded-md font-semibold transition-colors duration-200 cursor-pointer",
    variants: {
      intent: {
        increment: "bg-white text-blue-800 hover:bg-blue-100",
        decrement: "bg-white text-blue-800 hover:bg-blue-100",
        reset: "bg-white text-blue-800 hover:bg-blue-100",
      },
    },
  }),
};
