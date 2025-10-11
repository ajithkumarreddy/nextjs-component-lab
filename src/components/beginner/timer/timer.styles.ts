import { tv } from "tailwind-variants";

export const timerStyles = {
  wrapper: tv({
    base: "w-90 p-8 rounded-lg shadow-lg text-center bg-primary mx-auto",
  }),
  listContainer: tv({
    base: "flex flex-row justify-center items-center gap-4",
  }),
  listItems: tv({
    base: "flex flex-col justify-center items-center text-primary text-3xl font-bold w-20 h-20 bg-white rounded-md shadow",
  }),
};
