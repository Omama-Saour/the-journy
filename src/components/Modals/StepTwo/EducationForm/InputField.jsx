import React from "react";

const InputField = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-h-[78px] min-w-[240px]">
      <label className="gap-1 self-stretch w-full font-bold text-right whitespace-nowrap h-[22px]">
        {label}
      </label>
      <input
        dir="rtl"
        className="flex gap-2.5 items-start px-4 py-3 mt-1 w-full bg-white border border-violet-200 border-solid min-h-[48px] rounded-[32px]"
        placeholder={placeholder}
        aria-label={label}
        value={value} 
        onChange={onChange} // Capture the change event
      />
    </div>
  );
};

export default InputField;
