import React from "react";
import calender from "../../../../assets/StepTwo/calender.png";

const DatePicker = ({ label, value, onChange, disabled }) => {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <label className="gap-1 self-stretch w-full text-sm font-bold text-right h-[22px] text-neutral-800">
        {label}
      </label>
      <div className="flex gap-10 justify-between items-center px-4 py-3 mt-1 w-full text-sm text-center bg-white border border-violet-200 border-solid min-h-[48px] rounded-[32px] text-neutral-800">
        <input
          type="date"
          disabled={disabled}
          value={value}
          onChange={(e) => onChange(e.target.value)} 
          className="flex-1 bg-transparent text-neutral-800 text-right outline-none cursor-pointer"
        />
        <img
          loading="lazy"
          src={calender}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </div>
    </div>
  );
};

export default DatePicker;
