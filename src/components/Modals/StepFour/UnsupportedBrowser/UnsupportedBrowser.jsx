import React from "react";
import icon from "../../../../../src/assets/personltyTest/Vector.png";

const UnsupportedBrowser = () => {
  return (
    <>
    <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
    <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
    <main className="flex relative flex-col justify-center px-20 py-28 bg-white rounded-3xl max-w-[850px] max-h-[540px] max-md:px-5 max-md:py-24">
      <section className="flex z-0 flex-col w-full text-center text-neutral-800 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h1 className="self-center text-3xl font-bold leading-none">
          المتصفح غير مدعوم
          </h1>
          <p dir="rtl" className="mt-6 text-2xl font-medium max-md:max-w-full">
          يبدو أنك تستخدم متصفحًا غير مدعوم حتى الآن. نحن نعمل بنشاط على إضافة الدعم لهذا المتصفح وسيتم إصداره قريبًا جدًا. في غضون ذلك، يرجى استخدام متصفح ويب على الكمبيوتر المحمول أو الكمبيوتر المكتبي لتجربة المقابلات التجريبية السلسة.
          </p>
        </div>
      </section>

      <header className="flex absolute top-10 right-10 z-0 items-end w-[20px]">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain self-stretch my-auto w-8 aspect-square"
      />
    </header>
      </main>
    </section>
    </>
  );
};

export default UnsupportedBrowser;
