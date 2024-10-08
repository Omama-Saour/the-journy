import React from "react";
import lod from "../../../assets/StepFour/lod.png"

const TranslationToggle = ({
  isOn,
  onToggle,
}) => {
  return (
    
    <section className="flex overflow-hidden flex-col justify-center p-8 bg-white max-w-[796px] max-h-[350px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] w-full max-md:max-w-full">
      <div className="items-center w-full max-md:max-w-full">
        {/* <h2 className="self-stretch my-auto text-sm font-semibold leading-snug text-neutral-800">
          الترجمة التوضيحية
        </h2>
        <input
          type="checkbox"
          className="flex shrink-0 w-5 h-5 bg-white rounded border border-solid border-neutral-800"
        /> */}
     
        <p dir="rtl" className="self-center mt-6 font-semibold text-center text-neutral-800 max-md:max-w-full">
        جاري تحميل الأسئلة..
      </p>
        {/* <button
      className="flex flex-col self-stretch my-auto w-5"
      onClick={onToggle}
      aria-pressed={isOn}
    >
      <div
        className={`flex shrink-0 w-5 h-5 bg-white rounded border border-solid border-neutral-800 ${
          isOn ? "bg-blue-500" : ""
        }`}
      />
    </button> */}
      </div>
      {/* <p dir="rtl" className="mt-6 text-sm font-semibold leading-snug text-center text-neutral-800 max-md:max-w-full">
        تم إيقاف تشغيل الترجمة التوضيحية. نوصي بعدم تشغيل التعليقات التوضيحية
        لمحاكاة المقابلة الحقيقية بشكل أفضل.
      </p> */}
      <img
        loading="lazy"
        src={lod}
        alt="Translation illustration"
        className="object-contain self-center mt-6 max-w-full aspect-square w-[150px]"
      />
    </section>
  );
};

export default TranslationToggle;
