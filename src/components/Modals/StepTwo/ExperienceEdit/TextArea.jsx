import React from "react";

const TextArea = () => {
  return (
    <div className="flex flex-col mt-4 w-full text-sm max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <label className="gap-1 self-stretch w-full font-bold text-right whitespace-nowrap h-[22px] text-neutral-800 max-md:max-w-full">
          المسؤوليات
        </label>
        <textarea
          placeholder="أدخل ملخصك"
          className="flex gap-2.5 items-start px-4 pt-3 pb-24 mt-2 w-full text-right bg-white border border-violet-200 border-solid min-h-[132px] rounded-[32px] text-neutral-800 max-md:max-w-full"
        />
      </div>
    </div>
  );
};

export default TextArea;
