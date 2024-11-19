import React from "react";
import bg from "../../../../src/assets/StepEndbackground.png";
import icon from "../../../../src/assets/endstep.png";
import { useNavigate } from "react-router-dom";

const OneDone = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed inset-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        {/* w-[800px] */}
        <main className="flex relative flex-col md:flex-row justify-between bg-white rounded-3xl max-w-[850px] max-h-[580px] max-md:px-5 max-md:py-24">
          <div className="hidden md:block w-1/3 h-full relative">
            <img
              loading="lazy"
              src={bg}
              className="object-cover w-full h-full rounded-l-3xl"
              alt="Background"
            />
          </div>
          <div
            dir="rtl"
            className="flex flex-col justify-center items-center pr-16 py-28 w-full md:w-2/3"
          >
            <header className="flex flex-col w-full text-neutral-800">
              <img
                loading="lazy"
                src={icon}
                className="object-contain self-start my-auto w-[100px] aspect-square cursor-pointer"
                alt="Step Icon"
              />
              <h1 dir="rtl" className="mt-6 text-3xl font-bold leading-12">
                لقد اتممت الخطوة الأولي نحو النجاح!
                <br />
              </h1>
              <h1 dir="rtl" className="text-3xl font-bold leading-12">
                نحن فخورين بك, تبقي 4 خطوات
              </h1>
              <button
                className="px-2 mt-10 w-full text-lg font-medium leading-none text-center text-white bg-neutral-800 min-h-[50px] max-w-[130px] rounded-[32px] max-md:px-2"
                // onClick={onSave}
                onClick={() => navigate("/StepNTwo", { replace: true })}
              >
                التالي
              </button>
            </header>
          </div>
        </main>
      </section>
    </>
  );
};

export default OneDone;
