import { tv } from "tailwind-variants";

const StarRatingContainer = tv({
  base: "flex flex-col gap-2",
});

const StarRatingTitle = tv({
  base: "font-semibold text-md mb-2",
});

const StarRatingButton = tv({
  base: "cursor-pointer p-1 focus:outline-none disabled:cursor-not-allowed mb-8",
});

const StarRatingIcon = tv({
  base: "block",
  variants: {
    size: {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const StarRatingClearButton = tv({
  base: `
    w-fit h-auto px-4 py-2
    rounded-md font-semibold
    cursor-pointer 
    disabled:cursor-not-allowed disabled:bg-gray-400
    `,
  variants: {
    intent: {
      primary: "bg-blue-600 hover:bg-blue-400 text-white",
      danger: "bg-red-600 hover:bg-red-400 text-white",
    },
  },
  defaultVariants: {
    intent: "danger",
  },
});

export {
  StarRatingContainer,
  StarRatingTitle,
  StarRatingButton,
  StarRatingIcon,
  StarRatingClearButton,
};
