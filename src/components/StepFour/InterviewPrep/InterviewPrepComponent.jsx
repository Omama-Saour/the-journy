import React from "react";
import DateDisplay from "./DateDisplay";

const InterviewPrepComponent = ({
  interviewDate, onClick
}) => {
  return (
    <section className="flex overflow-hidden flex-col justify-center p-8 text-right bg-white max-w-[796px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] text-neutral-800 max-h-[380px] max-md:px-5">
      <article className="flex flex-col items-center p-6 w-full bg-white rounded-lg shadow-sm max-md:px-5 max-md:max-w-full">
        <p className="self-stretch text-xl max-md:max-w-full">
          استعد لمقابلاتك بثقة باستخدام تقنيات الذكاء الاصطناعي المتطورة في
          المقابلات التجريبية الصوتية في الوقت الفعلي. احصل على تعليقات دقيقة
          واقتراحات لتحسين أدائك وودّع القلق من المقابلات.
        </p>
        <DateDisplay date={interviewDate} />
        <div className="flex justify-center w-full mt-6"> 
          <button 
          onClick={onClick}
          className="gap-2.5 px-12 py-6 text-lg font-medium leading-none text-white bg-neutral-800 min-h-[56px] rounded-[32px] w-[200px] max-md:px-5">
            ابدأ المقابلة
          </button>
        </div>
      </article>
    </section>
  );
};

export default InterviewPrepComponent;
