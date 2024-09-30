import React from "react";

const TextArea = () => {
  return (
    <div className="flex flex-col mt-4 w-full text-sm max-md:max-w-full">
      <label
        htmlFor="suggestion"
        className="gap-1 self-stretch w-full font-bold text-right h-[22px] text-neutral-800 max-md:max-w-full"
      >
        ماذا تقترح للتجديد في خدماتنا؟
      </label>
      <textarea
        id="suggestion"
        dir="rtl"
        className="flex gap-2.5 items-start px-4 pt-3 pb-24 mt-2 w-full text-end bg-white border border-violet-200 border-solid min-h-[132px] rounded-[32px] text-neutral-800 max-md:max-w-full"
        placeholder="أدخل اقتراحك"
        aria-label=" ماذا تقترح للتجديد في خدماتنا؟"
      />
    </div>
  );
};

export default TextArea;
