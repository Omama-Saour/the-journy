import React from "react";
import vector6 from "../../assets/loading/Vector6.png";
import vector7 from "../../assets/loading/Vector7.png";
import vecrr from "../../assets/loading/Vectorr.png";

const Steps = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    isMobile ?  <section className="flex relative flex-col justify-center pt-14 pr-14 pl-14 w-full max-md:px-5 max-md:max-w-full">
    <div className="flex z-0 flex-col items-center w-full text-center uppercase max-md:max-w-full">
      <h2 className="text-[1.2rem] font-semibold leading-none text-indigo-600 max-md:max-w-full">
        كيف تكون الرحلة؟
      </h2>
      <h3 className="text-4xl font-extrabold leading-none text-neutral-800 max-md:max-w-full">
        الخطوات
      </h3>
    </div>
    <div className="flex z-0 flex-wrap gap-10 justify-center items-start mt-10 w-full max-md:mt-10 max-md:max-w-full">
      
      <div className="flex flex-col justify-center min-w-[240px] w-[271px]">
      <span className="text-indigo-600 font-bold text-end" style={{ transform: 'rotate(32deg)' }}>الترحيب والبدء</span>
      <span className="text-indigo-600 font-bold text-end mt-6 p-6" style={{ transform: 'rotate(16deg)' }}>اكتشاف الذات</span>
        <div className="flex shrink-0 bg-indigo-600 rounded-lg mt-4 h-[50px] shadow-[0px_14px_4px_rgba(37,132,252,0)] items-center justify-center">
        <span className="text-white font-bold">استكشاف الوظائف والإعداد</span>
        </div>
        <span className="text-indigo-600 font-bold text-end mt-4 p-6" style={{ transform: 'rotate(-18deg)' }}>تحضير المقابلة</span>
        <span className="text-indigo-600 font-bold text-end mt-6" style={{ transform: 'rotate(-32deg)' }}>التدريب المهني والدعم</span>
      </div>
      <div className="flex flex-col flex-1 shrink text-right basis-0 min-w-[240px] text-neutral-800 max-md:max-w-full">
        <div className="flex gap-6 justify-center items-center self-end mt-4 max-md:max-w-full">
          <h4 className="self-stretch my-auto text-4xl font-extrabold max-md:max-w-full">
            استكشاف الوظائف والإعداد
          </h4>
          <div className="self-stretch my-auto text-4xl font-bold max-md:text-4xl">
            3
          </div>
        </div>
        <ul dir="rtl" className="mt-3 text-xl font-bold leading-8 pr-5 max-md:max-w-full">
          <li>
            توصيات الوظائف: <br />
            <span className="font-normal">
              يقترح محرك البحث الذي يعمل بالذكاء الاصطناعي وظائف ذات صلة بناءً
              على ملفك الشخصي (الشخصية والمهارات والتفضيلات والموقع).
            </span>
            <br />
            <span className="font-normal">
              قم بتصفية وتحسين النتائج باستخدام معايير مختلفة للعثور على
              الوظيفة المثالية لك.
            </span>
            <br />
            <span className="font-normal">
              الحصول على أوصاف وظيفية مفصلة مع رؤى حول ثقافة الشركة وملاءمتها
              لك.
            </span>
          </li>
          <li className="mt-4">
          ⚫️ بناء السيرة الذاتية :
            <br />
            <span className="font-normal">
              استخدم قوالب جاهزة مصممة خصيصًا لمختلف القطاعات والأدوار .
            </span>
            <br />
            <span className="font-normal">
              يقترح الذكاء الاصطناعي محتوى بناءً على ملفك الشخصي والوظائف
              المستهدفة.
            </span>
            <br />
            <span className="font-normal">
              تساعدك المطالبات الذكية على تضمين المعلومات ذات الصلة وإبراز
              المهارات الأساسية.
            </span>
          </li>
          <li className="mt-4">
          ⚫️ LinkedIn تحسين ملف :
            <br />
            <span className="font-normal">
              احصل على توصيات لصورة ملفك الشخصي والعنوان والملخص وأقسام
              الخبرات.
            </span>
            <br />
            <span className="font-normal">
              يساعدك الذكاء الاصطناعي على كتابة أوصاف جذابة وتحديد الكلمات
              الأساسية ذات الصلة.
            </span>
            <br />
            <span className="font-normal">
              تعلم كيفية بناء علاقات قيمة داخل مجالك المهني.
            </span>
          </li>
        </ul>
      </div>
    </div>
    <img
      loading="lazy"
      src={vector6}
      alt=""
      className="object-contain absolute z-0 aspect-square h-[90px] left-[320px] top-[110px] w-[90px]"
    />

    <img
      loading="lazy"
      src={vector7}
      alt=""
      className="object-contain absolute z-0 aspect-square h-[90px] left-[50px] top-[450px] w-[90px]"
    />
  </section> 
  : 
  <section className="flex relative flex-col justify-center p-14 w-full max-md:px-5 max-md:max-w-full">
  <div className="flex z-0 flex-col items-center w-full text-center uppercase max-md:max-w-full">
    <h2 className="text-[1.2rem] font-semibold leading-none text-indigo-600 max-md:max-w-full">
      كيف تكون الرحلة؟
    </h2>
    <h3 className="text-4xl font-extrabold leading-none text-neutral-800 max-md:max-w-full">
      الخطوات
    </h3>
  </div>
  <div className="flex z-0 flex-wrap gap-10 justify-center items-start mt-10 w-full max-md:mt-10 max-md:max-w-full">
    <div className="flex flex-col flex-1 shrink text-right basis-0 min-w-[240px] text-neutral-800 max-md:max-w-full">
      <div className="flex flex-wrap gap-6 justify-center items-center self-end max-md:max-w-full">
        <h4 className="self-stretch my-auto text-4xl font-extrabold max-md:max-w-full">
          استكشاف الوظائف والإعداد
        </h4>
        <div className="self-stretch my-auto text-6xl font-bold max-md:text-4xl">
          3
        </div>
      </div>
      <ul dir="rtl" className="mt-3 text-xl font-bold leading-8 pl-5 max-md:max-w-full">
        <li>
        توصيات الوظائف: <br />
          <span className="font-normal">
            يقترح محرك البحث الذي يعمل بالذكاء الاصطناعي وظائف ذات صلة بناءً
            على ملفك الشخصي (الشخصية والمهارات والتفضيلات والموقع).
          </span>
          <br />
          <span className="font-normal">
            قم بتصفية وتحسين النتائج باستخدام معايير مختلفة للعثور على
            الوظيفة المثالية لك.
          </span>
          <br />
          <span className="font-normal">
            الحصول على أوصاف وظيفية مفصلة مع رؤى حول ثقافة الشركة وملاءمتها
            لك.
          </span>
        </li>
        <li className="mt-4">
        ⚫️ بناء السيرة الذاتية :
          <br />
          <span className="font-normal">
            استخدم قوالب جاهزة مصممة خصيصًا لمختلف القطاعات والأدوار .
          </span>
          <br />
          <span className="font-normal">
            يقترح الذكاء الاصطناعي محتوى بناءً على ملفك الشخصي والوظائف
            المستهدفة.
          </span>
          <br />
          <span className="font-normal">
            تساعدك المطالبات الذكية على تضمين المعلومات ذات الصلة وإبراز
            المهارات الأساسية.
          </span>
        </li>
        <li className="mt-4">
        ⚫️ LinkedIn تحسين ملف :
          <br />
          <span className="font-normal">
            احصل على توصيات لصورة ملفك الشخصي والعنوان والملخص وأقسام
            الخبرات.
          </span>
          <br />
          <span className="font-normal">
            يساعدك الذكاء الاصطناعي على كتابة أوصاف جذابة وتحديد الكلمات
            الأساسية ذات الصلة.
          </span>
          <br />
          <span className="font-normal">
            تعلم كيفية بناء علاقات قيمة داخل مجالك المهني.
          </span>
        </li>
      </ul>
    </div>
    <div className="flex flex-col justify-center py-36 min-w-[240px] w-[271px] max-md:py-24">
    <span className="text-indigo-600 font-bold text-end" style={{ transform: 'rotate(32deg)' }}>الترحيب والبدء</span>
    <span className="text-indigo-600 font-bold text-end mt-6 p-6" style={{ transform: 'rotate(16deg)' }}>اكتشاف الذات</span>
      <div className="flex shrink-0 bg-indigo-600 rounded-lg mt-4 h-[50px] shadow-[0px_14px_4px_rgba(37,132,252,0)] items-center justify-center">
      <span className="text-white font-bold">استكشاف الوظائف والإعداد</span>
      </div>
      <span className="text-indigo-600 font-bold text-end mt-4 p-6" style={{ transform: 'rotate(-18deg)' }}>تحضير المقابلة</span>
      <span className="text-indigo-600 font-bold text-end mt-6" style={{ transform: 'rotate(-32deg)' }}>التدريب المهني والدعم</span>
    </div>
  </div>
  <img
    loading="lazy"
    src={vecrr}
    alt=""
    className="object-contain absolute z-0 aspect-[1.01] h-[89px] right-[220px] top-[240px] w-[90px]"
  />

  <img
    loading="lazy"
    src={vector6}
    alt=""
    className="object-contain absolute z-0 aspect-square h-[90px] left-[135px] top-[50px] w-[90px]"
  />

  <img
    loading="lazy"
    src={vector7}
    alt=""
    className="object-contain absolute z-0 aspect-square h-[90px] left-[135px] top-[700px] w-[90px]"
  />
</section>
  );
};

export default Steps;
