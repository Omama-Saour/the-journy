import React from "react";
import AskQuestion from "../../../../../src/assets/personltyTest/Ask_Question_48.png"; 
import icon from "../../../../../src/assets/personltyTest/Vector.png";

const PersonalityTest = ({
  onSave
}) => {
  return (
    <>
    <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
    <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
    <main className="flex relative flex-col justify-center px-20 py-28 bg-white rounded-3xl max-w-[850px] max-h-[580px] max-md:px-5 max-md:py-24">
      <img
        loading="lazy"
        src={AskQuestion}
        alt=""
        className="object-contain z-0 self-center max-w-full aspect-square w-[100px]"
      />
       <section className="flex z-0 flex-col mt-10 w-full text-center text-neutral-800 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h1 className="self-center text-3xl font-bold leading-none">
          اختبار الشخصي
        </h1>
        <p className="mt-6 text-2xl font-medium max-md:max-w-full">
          لانك لم تصل لوظيفتك بعد، فأنت على وشك البدء في اختبارنا الشخصي لمعرفة
          وظيفتك المستقبلية
        </p>
      </div>
    </section>
      <button
      onClick={onSave} 
      className="gap-1 self-center px-12 py-2 mt-10 text-lg font-medium leading-none text-right text-white bg-neutral-800 min-h-[56px] rounded-[32px] max-md:px-5">
      ابدأ الان
      </button>
      <header className="flex absolute top-10 right-10 z-0 items-end w-[20px]">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain self-stretch my-auto w-8 aspect-square"
        onClick={onSave} 
      />
    </header>
    </main>
    </section>
    </>
  );
};

export default PersonalityTest;
