import Button from "./Button";
import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize',   
 handleResize);
  }, []);
  const [isVisible, setIsVisible] = useState(true);

  const handleSkip = () => {
    setIsVisible(false);
  };

  const handleAllowAll = () => {
    setIsVisible(false);
    // يمكن إضافة منطق آخر للسماح بجميع الكوكيز هنا
  };

  if (!isVisible) return null; // إذا كانت النافذة غير مرئية، لا ترسم أي شيء

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 flex flex-col justify-center px-5 py-4 z-50">
        <div dir="rtl" className="flex flex-wrap justify-center items-center p-8 w-full bg-white rounded-3xl shadow-[2px_2px_10px_rgba(32,32,32,0.15)] max-md:px-5 max-md:max-w-full">  
          <div className="flex flex-col flex-1 shrink justify-center self-stretch p-4 my-auto basis-0 min-w-[240px] text-neutral-800 max-md:max-w-full">
            <h2 className={`self-start ${isMobile ? 'text-2xl' : 'text-3xl'} font-bold leading-none max-md:max-w-full`}>
              هذا الموقع يستخدم ملفات تعريف الارتباط
            </h2>
            <p className={`mt-4 ${isMobile ? 'text-3xm' : 'text-base'} leading-6 text-right max-md:max-w-full`}>
              نحن نستخدم ملفات تعريف الارتباط لجمع وتحليل المعلومات حول أداء
              الموقع واستخدامه، لتوفير ميزات الوسائط الاجتماعية وتحسين المحتوى
              والإعلانات وتخصيصها. تعرف على المزيد
            </p>
          </div>
          <div className="flex gap-4 items-center self-stretch my-auto text-lg font-medium leading-none text-right min-w-[240px]"> 
            <Button onClick={handleAllowAll} variant="primary">
              السماح للكل
            </Button>
            <Button onClick={handleSkip} variant="secondary">
              تخطي
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookieConsent;
