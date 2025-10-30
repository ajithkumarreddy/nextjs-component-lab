import { tv } from "tailwind-variants";

export const stopwatchStyles = {
  wrapper: tv({
    base: "w-90 max-w-md p-8 rounded-lg shadow-lg text-center bg-primary mx-auto",
  }),
  timeDisplay: tv({
    base: "text-4xl font-mono text-white tracking-wider",
  }),
  buttonContainer: tv({
    base: "flex flex-row justify-center items-center gap-4 mt-6",
  }),
  button: tv({
    base: "px-4 py-2 rounded text-lg font-semibold shadow transition-colors duration-200 cursor-pointer rounded-md",
    variants: {
      variant: {
        start: "bg-green-500 hover:bg-green-600 text-white",
        pause: "bg-yellow-500 hover:bg-yellow-600 text-white",
        reset: "bg-gray-200 hover:bg-gray-300 text-gray-800",
      },
    },
  }),
};
