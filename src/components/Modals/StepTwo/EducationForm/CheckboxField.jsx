import React from "react";

const CheckboxField = ({ label, checked, onChange }) => {
  return (
    <div className="flex gap-2 items-center mt-2 w-full min-h-[20px]">
      <div className="flex flex-col self-stretch my-auto w-5">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange} 
          className="flex shrink-0 w-5 h-5 bg-white rounded border border-solid border-neutral-800"
          aria-label={label}
        />
      </div>
      <label className="self-stretch my-auto text-sm font-semibold leading-snug text-neutral-800">
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
