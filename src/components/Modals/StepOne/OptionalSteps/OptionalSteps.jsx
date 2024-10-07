import React from "react";
import ProgressBar from "./Steps";
import icon from "../../../../../src/assets/personltyTest/Vector.png";

const OptionalSteps = ({ onSave }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        <main className="flex relative flex-col justify-center px-20 py-28 bg-white rounded-3xl max-w-[850px] max-h-[580px] max-md:px-5 max-md:py-24">
          <header className="flex z-0 flex-col w-full text-center text-neutral-800 max-md:max-w-full">
            <h1 className="self-center text-3xl font-bold leading-none">
              خطوات اختيارية
            </h1>
            <p className="mt-3 text-2xl font-medium max-md:max-w-full">
              هذه الخطوات تسهل علينا بناء سيرة ذاتية دقيقة
            </p>
          </header>
          <ProgressBar />
          <div className="flex absolute top-10 right-10 z-0 items-end w-[20px]">
            <img
              loading="lazy"
              src={icon}
              className="object-contain self-stretch my-auto w-8 aspect-square"
              alt=""
              onClick={onSave}
            />
          </div>
        </main>
      </section>
    </>
  );
};

export default OptionalSteps;
