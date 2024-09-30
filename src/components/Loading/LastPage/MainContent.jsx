import React from "react";

const MainContentLastPage = ({ userName, onReStart }) => {
  return (
    <main className="flex z-0 flex-col flex-1 self-stretch px-24 w-full text-right bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex relative flex-col flex-1 items-end py-6 w-full max-md:max-w-full">
        <div className="flex z-0 flex-col mt-10 justify-center items-end max-w-full text-2xl font-semibold leading-none text-stone-500 w-[686px]">
          <div>,أهلا {userName}</div>
          <h1 dir="rtl" className="mt-4 text-6xl font-bold leading-[100px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[74px]">
          لقد أنهيت رحلتك معنا بنجاح!
          </h1>
          <div className="mt-2">نتمني لك مستقبل زاهر في مسيرتك المهنية</div>
        </div>
        <button
          onClick={onReStart}
          className="gap-1 px-12 py-2 mt-8 text-lg font-medium leading-none text-white bg-neutral-800 min-h-[56px] rounded-[32px] max-md:px-5"
        >
          اعادة الرحلة مجددا
        </button>
      </div>
    </main>
  );
};

export default MainContentLastPage;
