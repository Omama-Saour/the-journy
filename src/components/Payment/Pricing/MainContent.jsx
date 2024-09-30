import React from "react";
import Pricing from "./Pricing";
import arrow from "../../../assets/payment/arrow.png"

const MainContent = () => {
  return (
    <div className="flex flex-col">
    <main className="flex flex-col flex-1 px-24 py-10 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
        <h1 className="flex-1 shrink self-stretch my-auto text-2xl font-bold text-right basis-0 text-neutral-800 max-md:max-w-full">
          الرجوع للصفحة الرئيسية
        </h1>
        <div className="flex gap-1 justify-center items-center self-stretch my-auto w-6 min-h-[24px] rotate-[-3.141592653589793rad]">
          <img
            loading="lazy"
            src={arrow}
            alt=""
            className="object-contain self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>
      <h2 className="mt-12 text-3xl font-bold text-center text-neutral-800 max-md:mt-10 max-md:max-w-full">
        لا تفوت فرصة الاستمتاع بإمكانياتنا ! قم بالترقية الآن للحصول على تجربة
        كاملة لا يمكن الاستمتاع بها إلا بالاشتراك
      </h2>
      </main>
      <div className="flex flex-col mb-20 w-full min-h-[300px] max-md:mt-10 max-md:max-w-full">
        <Pricing />
      </div>
      </div>
  
  );
};

export default MainContent;
