import { tv } from "tailwind-variants";

const PaginationNavContainer = tv({
  base: "flex items-center justify-center gap-2",
});

const PaginationButtonControls = tv({
  base: `
    min-w-[32px] h-8 p-2
    flex items-center justify-center
    text-sm font-semibold text-black
    rounded-md cursor-pointer
    transition-colors duration-200
    hover:bg-gray-200 active:bg-gray-300
  `,
  variants: {
    isActive: {
      true: "bg-[#2F80ED] text-white hover:bg-[#2F80ED] active:bg-[#2563EB]",
    },
    disabled: {
      true: `
        opacity-50 cursor-not-allowed
        hover:bg-transparent active:bg-transparent
      `,
    },
  },
  defaultVariants: {
    isActive: false,
    disabled: false,
  },
});

export { PaginationNavContainer, PaginationButtonControls };
