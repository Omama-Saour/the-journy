import React from "react";
import S1 from "../../../src/assets/loading/S1.png";
import S2 from "../../../src/assets/loading/S2.png";
import S3 from "../../../src/assets/loading/S3.png";
import S4 from "../../../src/assets/loading/S4.png";
import S5 from "../../../src/assets/loading/S5.png";
import S6 from "../../../src/assets/loading/S6.png";

const Feature = ({ icon, description }) => (
  <div className="flex overflow-hidden flex-col grow shrink justify-center items-end p-6 min-w-[240px] w-[330px] max-md:px-5">
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="object-contain w-10 aspect-square"
    />
    <div dir="rtl" className="mt-3">{description}</div>
  </div>
);

const Features = () => {
  const isMobile = window.innerWidth <= 768;
  const features = [
    {
      icon: S1,
      description: "نأخذ في الاعتبار أن كل عملية بحث عن وظيفة فريدة من نوعها.",
    },
    {
      icon: S2,
      description:
        "نوفر لك كل ما تحتاجه من بناء السيرة الذاتية إلى محاكاة المقابلات في مكان واحد.",
    },
    {
      icon: S3,
      description: "نحن نقدم أكثر من مجرد نصائح؛ نقدم الأدوات اللازمة للنجاح.",
    },
    {
      icon: S4,
      description:
        "نوصي بأفضل الأساليب للوصول إلى وظيفة أحلامك بناءً على ملفك واتجاهات الصناعة.",
    },
    {
      icon: S5,
      description: "نستخدم البيانات لتحسين استراتيجيتك في البحث عن وظيفة.",
    },
    {
      icon: S6,
      description: "نقدم لك خطة عمل شخصية بناءً على أهدافك ومهاراتك.",
    },
  ];

  return (
    <section className="flex relative flex-col px-24 py-14 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex z-0 flex-col items-center w-full text-center uppercase max-md:max-w-full">
        <h2 className="text-2xl font-semibold leading-none text-indigo-600 max-md:max-w-full">
          المميزات
        </h2>
        <h3 className="text-4xl font-extrabold leading-none text-neutral-800 max-md:max-w-full">
          لماذا الرحلة؟
        </h3>
      </div>
      <div className="flex relative z-0 items-center mt-14 w-full max-md:mt-10 max-md:max-w-full">
      {
        isMobile ? (
          <>
           <div className="flex absolute inset-x-0 z-0 shrink-0 h-px bg-indigo-300 bottom-[195px] min-w-[240px] top-[160px] w-[1240px] max-md:max-w-full" />
           <div className="flex absolute inset-x-0 z-0 shrink-0 h-px bg-indigo-300 bottom-[195px] min-w-[240px] top-[320px] w-[1240px] max-md:max-w-full" />
           <div className="flex absolute inset-x-0 z-0 shrink-0 h-px bg-indigo-300 bottom-[195px] min-w-[240px] top-[480px] w-[1240px] max-md:max-w-full" />
           <div className="flex absolute inset-x-0 z-0 shrink-0 h-px bg-indigo-300 bottom-[195px] min-w-[240px] top-[640px] w-[1240px] max-md:max-w-full" />
           <div className="flex absolute inset-x-0 z-0 shrink-0 h-px bg-indigo-300 bottom-[195px] min-w-[240px] top-[800px] w-[1240px] max-md:max-w-full" />
  </>
        ) :
        (
          <div className="flex absolute inset-x-0 top-2/4 z-0 justify-between items-start -translate-y-2/4 min-w-[240px] translate-x-[0%] w-[1240px] max-md:max-w-full">
          <div className="flex absolute inset-x-0 z-0 shrink-0 h-px bg-indigo-300 bottom-[195px] min-w-[240px] top-[196px] w-[1240px] max-md:max-w-full" />
          <div className="flex z-0 shrink-0 w-px bg-indigo-300 h-[392px]" />
          <div className="flex z-0 shrink-0 w-px bg-indigo-300 h-[392px]" />
          <div className="flex z-0 shrink-0 w-px bg-indigo-300 h-[392px]" />
          <div className="flex absolute z-0 shrink-0 w-px h-4 bg-indigo-600 right-[412px] top-[89px]" />
          <div className="flex absolute z-0 shrink-0 w-px h-4 bg-indigo-600 bottom-[95px] right-[412px]" />
          <div className="flex z-0 shrink-0 w-px bg-indigo-300 h-[392px]" />
          <div className="flex absolute z-0 shrink-0 w-px h-4 bg-indigo-600 left-[413px] top-[89px]" />
        </div>
        )
      }
        <div className="flex overflow-hidden z-0 flex-wrap flex-1 shrink gap-0.5 items-start text-lg font-bold text-right basis-0 min-w-[240px] text-neutral-800 max-md:max-w-full">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
