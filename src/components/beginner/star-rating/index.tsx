'use client';
import StarRating from "./star-rating";

const StarRatingWithProps = () => {
  return (
    <div className="flex items-center justify-center">
      <StarRating 
        title="How's your experience?"
        defaultValue={3} 
        step={0.5}
        clearable
        size="lg"
      />
    </div>
  );
};

export default StarRatingWithProps;
