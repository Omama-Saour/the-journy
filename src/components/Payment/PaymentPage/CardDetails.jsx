import React from "react";

const CardDetails = () => {
  return (
    <div className="flex flex-col mt-3 w-full text-sm min-h-[78px] text-neutral-800 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <label
          htmlFor="cardNumber"
          className="gap-1 self-stretch w-full font-bold text-right h-[22px] max-md:max-w-full"
        >
          رقم الكارت
        </label>
        <input
          type="text"
          id="cardNumber"
          dir="rtl"
          className="flex gap-2.5 items-center px-4 py-3 mt-1 w-full text-right bg-white border border-violet-200 border-solid min-h-[48px] rounded-[32px] max-md:max-w-full"
          placeholder="أدخل رقم الكارت"
        />
      </div>
      <div className="flex flex-wrap gap-4 items-start mt-3 w-full text-sm text-neutral-800 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-0">
          <label
            htmlFor="cvv"
            className="gap-1 self-stretch w-full font-bold text-right whitespace-nowrap h-[22px]"
          >
            cvv
          </label>
          <input
            type="text"
            id="cvv"
            dir="rtl"
            className="flex gap-2.5 items-center px-4 py-3 mt-1 w-full text-right bg-white border border-violet-200 border-solid min-h-[48px] rounded-[32px]"
            placeholder="أدخل cvv"
          />
        </div>
        <div className="flex flex-col flex-1 shrink basis-0">
          <label
            htmlFor="expiryDate"
            className="gap-1 self-stretch w-full font-bold text-right h-[22px]"
          >
            تاريخ الانتهاء
          </label>
          <input
            type="text"
            id="expiryDate"
            dir="rtl"
            className="flex gap-2.5 items-center px-4 py-3 mt-1 w-full text-right bg-white border border-violet-200 border-solid min-h-[48px] rounded-[32px]"
            placeholder="أدخل تاريخ الانتهاء"
          />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;