import React from "react";
import divice from "../../assets/loading/divice.png";
const ExpertAdvice = () => {
  const isMobile = window.innerWidth <= 768;
  return (
   isMobile ? 
   <section className="flex flex-wrap gap-10 items-center pl-14 pr-14 pb-14 w-full max-md:px-5 max-md:max-w-full">
   <div className="flex flex-col grow shrink items-start self-stretch my-auto rounded-2xl min-w-[240px] w-[505px] max-md:max-w-full">
     <img
       loading="lazy"
       src={divice}
       alt="Expert advice illustration"
       className="object-contain z-10 mr-0 w-full rounded-2xl aspect-[1.51] max-md:max-w-full"
     />
   </div>
   <div className="flex flex-col grow shrink justify-center self-stretch my-auto text-right min-w-[240px] w-[480px] max-md:max-w-full">
     <div className="flex flex-col justify-center text-center w-full uppercase max-md:max-w-full">
       <h2 className="text-2xl font-semibold tracking-wide leading-none text-indigo-600 max-md:max-w-full">
         <span className="">إرشاد</span>
       </h2>
       <h3 className="self-end text-4xl font-extrabold leading-none text-neutral-800 text-center">
         نصيحة من المتخصصين
       </h3>
     </div>
     <p dir="rtl" className="mt-6 text-[1.2rem] text-neutral-700 text-right leading-[36px] max-md:max-w-full">
       يوفر نظام الموارد البشرية لدينا فرصة للتطوير المهني من خلال ربط
       الموظفين بخبراء الصناعة للحصول على إرشادات ونصائح مخصصة. <br />
       تساهم هذه اللقاءات مع الخبراء في تقديم رؤى واستراتيجيات قيمة لمساعدة
       الموظفين على تعزيز مسيراتهم المهنية بفعالية.
     </p>
   </div>
 
 </section> 
 : 
  <section className="flex flex-wrap gap-10 items-center p-14 w-full max-md:px-5 max-md:max-w-full">
  <div className="flex flex-col grow shrink justify-center self-stretch my-auto text-right min-w-[240px] w-[480px] max-md:max-w-full">
    <div className="flex flex-col justify-center w-full uppercase max-md:max-w-full">
      <h2 className="text-2xl font-semibold tracking-wide leading-none text-indigo-600 max-md:max-w-full">
        <span className="">إرشاد</span>
      </h2>
      <h3 className="self-end text-4xl font-extrabold leading-none text-neutral-800">
        نصيحة من المتخصصين
      </h3>
    </div>
    <p dir="rtl" className="mt-6 text-[1.4rem] text-neutral-700 max-md:max-w-full">
      يوفر نظام الموارد البشرية لدينا فرصة للتطوير المهني من خلال ربط
      الموظفين بخبراء الصناعة للحصول على إرشادات ونصائح مخصصة. <br />
      تساهم هذه اللقاءات مع الخبراء في تقديم رؤى واستراتيجيات قيمة لمساعدة
      الموظفين على تعزيز مسيراتهم المهنية بفعالية.
    </p>
  </div>
  <div className="flex flex-col grow shrink items-start self-stretch my-auto rounded-2xl min-w-[240px] w-[505px] max-md:max-w-full">
    <img
      loading="lazy"
      src={divice}
      alt="Expert advice illustration"
      className="object-contain z-10 mr-0 w-full rounded-2xl aspect-[1.51] max-md:max-w-full"
    />
  </div>
</section>
  );
};

export default ExpertAdvice;
