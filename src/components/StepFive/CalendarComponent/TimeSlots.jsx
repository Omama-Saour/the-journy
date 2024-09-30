import React, { useState } from "react";

const timeSlots = [
  ["1 : 30 م", "1 : 00 م", "12 : 30 م", "12 : 00 م", "11 : 30 ص", "11 : 00 ص"],
  ["4 : 30 م", "4 : 00 م", "3 : 30 م", "3 : 00 م", "2 : 30 م", "2 : 00 م"],
  ["7 : 30 م", "7 : 00 م", "6 : 30 م", "6 : 00 م", "5 : 30 م", "5 : 00 م"],
];

const TimeSlots = () => {
  const [selectedTime, setSelectedTime] = useState(null); // State to track selected time

  const handleTimeClick = (time) => {
    setSelectedTime(time); // Update selected time
  };

  return (
    <div className="flex flex-col justify-center w-full text-base font-semibold max-md:max-w-full">
      {timeSlots.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap gap-2 justify-between items-start mt-6 w-full max-md:max-w-full"
        >
          {row.map((time, timeIndex) => {
            const isDisabled =
              (rowIndex === 0 && (timeIndex === 0 || timeIndex === 5)) ||
              (rowIndex === 1 && timeIndex === 2);
            const isSelected = time === selectedTime; // Check if the time is selected

            return (
              <button
                dir="rtl"
                key={timeIndex}
                className={`px-6 py-4 rounded-xl ${
                  isDisabled
                    ? "bg-stone-300 cursor-not-allowed"
                    : isSelected
                    ? "text-white bg-neutral-800" 
                    : "bg-white border border-violet-200 border-solid"
                } max-md:px-5`}
                onClick={() => !isDisabled && handleTimeClick(time)} // Only handle click if not disabled
                disabled={isDisabled}
              >
                {time}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TimeSlots;