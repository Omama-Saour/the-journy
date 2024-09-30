import React from "react";
import arrow from "../../../assets/payment/arrow.png"

const BackButton = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
      <div className="flex-1 shrink self-stretch my-auto text-2xl font-bold text-right basis-0 text-neutral-800 max-md:max-w-full">
        الرجوع للصفحة الرئيسية
      </div>
      <div className="flex gap-1 justify-center items-center self-stretch my-auto w-6 min-h-[24px]">
        <img
          loading="lazy"
          src={arrow}
          alt=""
          className="object-contain self-stretch my-auto w-6 aspect-square"
        />
      </div>
    </div>
  );
};

export default BackButton;
