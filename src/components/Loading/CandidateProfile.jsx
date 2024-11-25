import React, { useState, useEffect } from 'react';
import profile from "../../assets/loading/profile.png";
import Vector33 from "../../assets/loading/Vector33.png";

const CandidateProfile = () =>  {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize',   
 handleResize);
  }, []);
  return (
   isMobile ?  <section className="flex-col relative gap-10 items-center p-14 w-full max-md:px-5 max-md:max-w-full">
  
   <img
     loading="lazy"
     src={Vector33}
     alt=""
     className="object-contain absolute top-1 z-0 shrink-0 self-start aspect-[1.25] h-[70px] left-[20px] w-[80px]"
     style={{ transform: 'rotate(-60deg)' }}
   />

{/* <div className="flex z-10 flex-col items-start self-stretch my-auto rounded-2xl min-w-[240px] w-[625px] max-md:max-w-full"> */}
     <img
       loading="lazy"
       src={profile}
       alt="Candidate profile illustration"
       className="object-contain z-10 mr-10 w-full rounded-2xl aspect-[1.52] max-md:max-w-full"
     />
   {/* </div> */}
   <div className="flex z-0 flex-col self-stretch my-auto mt-4 text-center min-w-[240px] w-[600px] max-md:max-w-full">
     <div className="flex flex-col justify-center w-full uppercase max-md:max-w-full">
       <h2 className="text-2xl font-semibold tracking-wide leading-none text-indigo-600 max-md:max-w-full">
         بحث
       </h2>
       <h3 className="self-end text-4xl font-extrabold leading-none text-neutral-800 max-md:max-w-full">
         إثراء الملف الشخصي للمرشحين
       </h3>
     </div>
     <p dir="rtl" className="mt-8 text-[1.2rem] text-neutral-700 text-right leading-[36px] max-md:max-w-full">
       جمع رؤى تتجاوز السيرة الذاتية.
       يتصفح محرك الذكاء الاصطناعي الويب بحثًا عن البيانات على أكثر من 20 من
       وسائل التواصل الاجتماعي والمنصات العامة لإثراء ملفات تعريف المرشحين
       تلقائيًا.<br />
       يتم إثراء البيانات بسلاسة أثناء إنشاء المرشح.
     </p>
   </div>

  
   
 </section> 
 : 
 <section className="flex relative gap-10 items-center p-14 w-full max-md:px-5 max-md:max-w-full">
 <div className="flex z-0 flex-col items-start self-stretch my-auto rounded-2xl min-w-[240px] w-[625px] max-md:max-w-full">
   <img
     loading="lazy"
     src={profile}
     alt="Candidate profile illustration"
     className="object-contain z-10 -mr-10 w-full rounded-2xl aspect-[1.52] max-md:max-w-full"
   />
 </div>
 <div className="flex z-0 flex-col self-stretch my-auto text-right min-w-[240px] w-[600px] max-md:max-w-full">
   <div className="flex flex-col justify-center w-full uppercase max-md:max-w-full">
     <h2 className="text-2xl font-semibold tracking-wide leading-none text-indigo-600 max-md:max-w-full">
       بحث
     </h2>
     <h3 className="self-end text-4xl font-extrabold leading-none text-neutral-800 max-md:max-w-full">
       إثراء الملف الشخصي للمرشحين
     </h3>
   </div>
   <p dir="rtl" className="mt-8 text-[1.3rem] text-neutral-700 max-md:max-w-full">
     جمع رؤى تتجاوز السيرة الذاتية.
     يتصفح محرك الذكاء الاصطناعي الويب بحثًا عن البيانات على أكثر من 20 من
     وسائل التواصل الاجتماعي والمنصات العامة لإثراء ملفات تعريف المرشحين
     تلقائيًا.<br />
     يتم إثراء البيانات بسلاسة أثناء إنشاء المرشح.
   </p>
 </div>
 <img
   loading="lazy"
   src={Vector33}
   alt=""
   className="object-contain absolute top-3 z-0 shrink-0 self-start aspect-[1.25] h-[81px] right-[37px] w-[101px]"
 />
</section>
  );
};

export default CandidateProfile;
