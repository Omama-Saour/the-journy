import React, { useState } from "react";

const RatingStep = ({ title, initialRating, onRatingChange }) => {
  const [selectedRating, setSelectedRating] = useState(initialRating);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    onRatingChange(rating); // Notify parent component
  };

  return (
    <div dir="rtl" className="flex flex-col mt-4 w-full max-md:max-w-full">
      <h2 className="w-full text-base font-medium leading-none text-neutral-800 max-md:max-w-full">
        {title}
      </h2>
      <div className="flex flex-col mt-2 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-9 justify-between items-start w-full text-base font-bold leading-6 text-center text-white whitespace-nowrap min-h-[42px] max-md:max-w-full">
          {[...Array(10)].map((_, index) => {
            const rating = index + 1;
            const isSelected = rating <= selectedRating;
            return (
              <div
                key={rating}
                onClick={() => handleRatingClick(rating)}
                className={`${
                  isSelected
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-neutral-800"
                } rounded-xl border border-violet-200 border-solid h-[42px] w-[42px] flex items-center justify-center cursor-pointer`}
              >
                {rating}
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-between items-start mt-2 w-full text-xs text-stone-500 max-md:max-w-full">
          <div className="flex-1 shrink basis-0">سيئ</div>
          <div className="flex-1 shrink text-left basis-0">أعجبني للغايه</div>
        </div>
      </div>
    </div>
  );
};

export default RatingStep;