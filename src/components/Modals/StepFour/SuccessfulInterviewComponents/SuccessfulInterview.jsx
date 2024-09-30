import React from "react";
import done from "../../../../assets/StepFour/Done_24.png";

const SuccessfulInterview = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        <main className="flex flex-col justify-center items-center px-20 py-28 bg-white rounded-3xl max-w-[900px] max-h-[500px] max-md:px-5 max-md:py-24">
          <img
            loading="lazy"
            src={done}
            alt="Company Logo"
            className="object-contain max-w-full aspect-square w-[100px]"
          />
          <section className="flex flex-col self-stretch mt-10 w-full text-center text-neutral-800 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <h1
                dir="rtl"
                className="self-center text-3xl font-bold leading-none"
              >
                تم انهاء المقابلة بنجاح!
              </h1>
              <p className="mt-6 text-2xl font-medium max-md:max-w-full">
                ينقصنا خطوة اخيرة وهي المقابلة الحقيقه مع مختص
              </p>
            </div>
          </section>
          <button className="px-12 py-6 mt-10 text-lg font-medium leading-none text-right text-white bg-neutral-800 min-h-[56px] rounded-[32px] max-md:px-5">
            الخطوة التالية
          </button>
        </main>
      </section>
    </>
  );
};

export default SuccessfulInterview;
