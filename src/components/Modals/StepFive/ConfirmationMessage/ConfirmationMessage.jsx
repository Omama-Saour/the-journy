import React from "react";
import done from "../../../../assets/StepFour/Done_24.png";

const ConfirmationMessage = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        <main className="flex flex-col justify-center items-center px-20 py-28 bg-white rounded-3xl max-w-[900px] max-h-[500px] max-md:px-5 max-md:py-24">
          <img
            loading="lazy"
            src={done}
            alt=""
            className="object-contain max-w-full aspect-square w-[100px]"
          />
          <section className="flex flex-col self-stretch mt-8 w-full text-center text-neutral-800 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <h1 className="self-center text-3xl font-bold leading-none">
                تم حجز الاستشارة المهنية
              </h1>
              <p className="mt-3 text-2xl font-medium max-md:max-w-full">
                سوف يصلك رابط للمقابلة مع المختص عبر البريد الالكتروني
              </p>
            </div>
          </section>
          <button className="px-12 py-2 mt-6 text-lg font-medium leading-none text-right text-white whitespace-nowrap bg-neutral-800 min-h-[56px] rounded-[32px] max-md:px-5">
            حسنا
          </button>
        </main>
      </section>
    </>
  );
};

export default ConfirmationMessage;
