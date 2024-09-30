import React from "react";

const SummaryInput = ({ value, onChange }) => {
  return (
    <section className="flex z-0 flex-col mt-10 w-full text-sm max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <label
          htmlFor="personalSummary"
          className="gap-1 self-stretch w-full font-bold text-right h-[22px] text-neutral-800 max-md:max-w-full"
        >
          ملخص شخصي
        </label>
        <textarea
          id="personalSummary"
          value={value} // Use the value prop
          onChange={onChange} // Use the onChange prop
          className="flex gap-2.5 items-start px-4 pt-3 pb-24 mt-2 w-full text-right bg-white border border-violet-200 border-solid min-h-[132px] rounded-[32px] text-neutral-800 max-md:max-w-full"
          placeholder="أدخل ملخصك"
          aria-label="أدخل ملخصك الشخصي"
        />
      </div>
    </section>
  );
};

export default SummaryInput;