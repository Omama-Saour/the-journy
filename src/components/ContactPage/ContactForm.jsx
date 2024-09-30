import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[750px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col p-8 w-full bg-white rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full text-center text-neutral-800 max-md:max-w-full">
          <h2 className="w-full text-4xl font-bold leading-loose max-md:max-w-full">
            للتواصل معنا
          </h2>
          <p className="text-lg leading-snug max-md:max-w-full">
            دائما في انتظارك
          </p>
        </div>
        <form className="flex flex-col mt-4 w-full max-md:max-w-full">
          <div className="flex flex-col w-full text-sm max-md:max-w-full">
            <div className="flex flex-col w-full min-h-[74px] text-neutral-800 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <label
                  htmlFor="name"
                  className="gap-1 self-stretch w-full font-bold text-right whitespace-nowrap h-[22px] max-md:max-w-full"
                >
                  الأسم
                </label>
                <input
                  type="text"
                  id="name"
                  className="flex gap-2.5 items-center px-4 py-3 mt-1 w-full text-right bg-white border border-violet-200 border-solid min-h-[48px] rounded-[32px] max-md:max-w-full"
                  placeholder="أدخل الاسم"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3 w-full min-h-[78px] text-neutral-800 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <label
                  htmlFor="email"
                  className="gap-1 self-stretch w-full font-bold text-right h-[22px] max-md:max-w-full"
                >
                  البريد الالكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  className="flex gap-2.5 items-center px-4 py-3 mt-1 w-full text-right bg-white border border-violet-200 border-solid min-h-[48px] rounded-[32px] max-md:max-w-full"
                  placeholder="أدخل بريدك الالكتروني"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3 w-full max-md:max-w-full">
              <label
                htmlFor="inquiry"
                className="gap-1 self-stretch w-full font-bold text-right whitespace-nowrap h-[22px] text-neutral-800 max-md:max-w-full"
              >
                الاستفسار
              </label>
              <textarea
                id="inquiry"
                className="flex gap-2.5 items-start px-4 pt-3 pb-24 mt-2 w-full text-right bg-white border border-violet-200 border-solid min-h-[132px] rounded-[32px] text-neutral-800 max-md:max-w-full"
                placeholder="أدخل استفسارك"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="gap-2.5 self-stretch px-12 py-6 mt-10 w-full text-lg font-medium leading-none text-center text-white bg-neutral-800 min-h-[60px] rounded-[32px] max-md:px-5 max-md:max-w-full"
          >
            انشاء حساب
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
