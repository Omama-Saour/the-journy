import React from "react";
import vec2 from "../../../assets/loading/Vector2.png"

const MainContent = ({ userName, onStart }) => {
  return (
    <main className="flex z-0 flex-col flex-1 self-stretch px-24 w-full text-right bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex relative flex-col flex-1 items-end py-6 w-full max-md:max-w-full">
        <div className="flex z-0 flex-col justify-center items-end max-w-full text-2xl font-semibold leading-none text-stone-500 w-[686px]">
          <div>,أهلا {userName}</div>
          <h1 className="mt-4 text-6xl font-bold leading-[100px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
            أنت على بعد خطوة واحدة فقط من تعزيز <br /> ملفك الشخصي للتوظيف
          </h1>
          <div className="mt-2">!افتح مستقبل العمل</div>
        </div>
        <button
          onClick={onStart}
          className="gap-1 px-12 py-2 mt-8 text-lg font-medium leading-none text-white bg-neutral-800 min-h-[56px] rounded-[32px] max-md:px-5"
        >
          !ابدأ رحلتك معنا الآن
        </button>
        <img
          loading="lazy"
          src={vec2}
          alt=""
          className="object-contain absolute z-0 self-start w-72 max-w-full aspect-[1.96] bottom-[130px] h-[147px] right-[398px]"
        />
      </div>
    </main>
  );
};

export default MainContent;
