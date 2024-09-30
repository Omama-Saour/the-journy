import React from "react";
import frame from "../../assets/loading/Frame.png";
import rec from "../../assets/loading/rec.svg";

const Pricing = () => {
  return (
    <section className="flex flex-col px-24 py-1 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center w-full text-center uppercase whitespace-nowrap max-md:max-w-full">
        <h2 className="text-2xl font-semibold leading-none text-indigo-600 max-md:max-w-full">
          البرامج
        </h2>
        <h3 className="text-4xl font-extrabold leading-none text-neutral-800 max-md:max-w-full">
          التسعير
        </h3>
      </div>
      <div className="flex flex-col justify-center px-10 py-3 mt-10 w-full min-h-[325px] rounded-[32px] bg-gradient-to-r from-indigo-300 to-indigo-500 max-md:px-5 max-md:mt-10 max-md:max-w-full"> {/* Added gradient background */}
        <div className="flex flex-wrap gap-10 justify-between items-center w-full text-5xl font-bold tracking-wide leading-none text-white max-md:max-w-full">
          <img
            loading="lazy"
            src={frame}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.97] w-[35px]"
          />
          <h4 className="self-stretch my-auto text-white">برنامج الرحلة</h4> 
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-end mt-10 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center items-end leading-snug text-white min-w-[240px] max-md:max-w-full">
            <h5 className="text-xl font-bold">أهم المميزات</h5>
            <ul className="flex flex-wrap gap-10 items-start mt-4 text-lg max-md:max-w-full">
              <li className="flex flex-col justify-center items-end min-w-[240px]">
                <div className="flex gap-2 justify-center items-center">
                  <span className="self-stretch my-auto">إعداد سريع (متوسط ​​2-3 أيام)</span>
                  <img
                    loading="lazy"
                    src={rec}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </div>
                <div className="flex gap-2 justify-center items-center mt-3">
                  <span className="self-stretch my-auto">الأمان المدمج والامتثال</span>
                  <img
                    loading="lazy"
                    src={rec}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </div>
                <div className="flex gap-2 justify-center items-center mt-3">
                  <span className="self-stretch my-auto">فوائد مرنة ومحلية</span>
                  <img
                    loading="lazy"
                    src={rec}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </div>
              </li>
              <li className="flex flex-col justify-center items-end min-w-[240px]">
                <div className="flex gap-2 justify-center items-center">
                  <span className="self-stretch my-auto">الرضا مضمون</span>
                  <img
                    loading="lazy"
                    src={rec}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </div>
                <div className="flex gap-2 justify-center items-center mt-3">
                  <span className="self-stretch my-auto">لا توجد ودائع أو رسوم مخفية</span>
                  <img
                    loading="lazy"
                    src={rec}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </div>
                <div className="flex gap-2 justify-center items-center mt-3">
                  <span className="self-stretch my-auto">صفر رسوم دخول أو خروج</span>
                  <img
                    loading="lazy"
                    src={rec}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="flex gap-2.5 items-center font-bold min-w-[240px]">
            <div className="flex flex-col self-stretch my-auto">
              <div className="text-base text-white">صالح لمره واحده</div>
            </div>
            <div dir="rtl" className="self-stretch my-auto text-5xl leading-none text-white max-md:text-4xl">
            14.99 دولارًا
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;