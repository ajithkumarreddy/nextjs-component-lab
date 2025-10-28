"use client";
import { useState } from "react";
import type { StarRatingProps } from "./star-rating.types";
import {
  StarRatingButton,
  StarRatingClearButton,
  StarRatingIcon,
} from "./star-rating.styles";

const StarRating = ({
  id,
  name,
  className,
  title,
  defaultValue,
  onChange,
  step,
  readOnly,
  clearable,
  size,
}: StarRatingProps) => {
  const [rating, setRating] = useState(defaultValue ?? 0);
  const [hover, setHover] = useState(0);

  const getStarType = (starValue: number) => {
    const current = hover || rating;
    if (starValue <= current) return "full";
    if (step === 0.5 && current + 0.5 === starValue) return "half";
    return "empty";
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    starValue: number
  ) => {
    if (readOnly) return;

    let newRating = starValue;

    if (step === 0.5) {
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const hoverX = e.clientX - left;
      const isHalf = hoverX < width / 2;
      if (isHalf) {
        newRating = newRating - 0.5;
      }
    }

    setRating(newRating);
    onChange?.(newRating);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    starValue: number
  ) => {
    if (step === 0.5) {
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const hoverX = e.clientX - left;
      const isHalf = hoverX < width / 2;
      setHover(isHalf ? starValue - 0.5 : starValue);
    } else {
      setHover(starValue);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <h3 className="font-semibold text-md mb-2">{title}</h3>
      <div className="flex flex-row gap-2">
        {Array.from({ length: 5 }, (_, i) => {
          const starValue = i + 1;
          const type = getStarType(starValue);

          const starSrc =
            type === "full"
              ? "/svg/star-filled.svg"
              : type === "half"
              ? "/svg/star-half-filled.svg"
              : "/svg/star-outline.svg";

          return (
            <button
              key={starValue}
              type="button"
              onClick={(e) => handleClick(e, starValue)}
              onMouseMove={(e) => handleMouseMove(e, starValue)}
              onMouseLeave={() => setHover(0)}
              disabled={readOnly}
              className={StarRatingButton()}
            >
              <img src={starSrc} alt="star" className={StarRatingIcon({ size })} />
            </button>
          );
        })}
      </div>
      {clearable && !readOnly && (
        <button
          type="button"
          className={StarRatingClearButton()}
          onClick={() => setRating(0)}
          disabled={rating === 0}
        >
          Clear All
        </button>
      )}
      {name && (
        <input type="hidden" id={id} name={name} value={rating} readOnly />
      )}
    </div>
  );
};

export default StarRating;
