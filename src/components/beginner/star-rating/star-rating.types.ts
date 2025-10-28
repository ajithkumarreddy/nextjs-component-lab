export type StarRatingProps = {
  id?: string;
  name?: string;
  className?: string;
  title: string;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  step: 1 | 0.5;
  readOnly?: boolean;
  clearable?: boolean;
  size?: "sm" | "md" | "lg";
};
