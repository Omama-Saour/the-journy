import React from "react";
import hour from "../../../assets/StepFour/hour-glass.png"

const DateDisplay = ({ date }) => {
  return (
    <div className="flex gap-3 justify-center items-center mt-6 text-base font-semibold">
      <p className="self-stretch my-auto">
        لديك سماحية لمده يوم واحد للاستعداد , {date}
      </p>
      <img
        loading="lazy"
        src={hour}
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        alt=""
      />
    </div>
  );
};

export default DateDisplay;
