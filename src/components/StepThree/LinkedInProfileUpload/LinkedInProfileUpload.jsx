import React from "react";
import UploadButton from "./UploadButton";
import profile from "../../../assets/StepThree/job_profile.png"

const LinkedInProfileUpload = () => {
  const instructions = [
    "1 . انتقل إلى ملفك الشخصي العام على لينكدان",
    "2 . ابحث عن زر المزيد أسفل اسمك والعنوان الرئيسي",
    "3 . حدد حفظ بتنسيق PDF من القائمة المنسدلة. سيؤدي هذا إلى تنزيل الملف على جهاز الكمبيوتر الخاص بك.",
  ];
  return (
    <section className="flex overflow-hidden flex-col justify-center p-8 text-right bg-white max-w-[796px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] max-md:px-5">
      <div className="flex flex-col w-full max-md:max-w-full">
        <img
          loading="lazy"
          src={profile}
          alt="LinkedIn profile illustration"
          className="object-contain w-full aspect-[1.74] rounded-[32px] max-md:max-w-full"
        />
        <div className="flex flex-col mt-14 w-full max-md:mt-10 max-md:max-w-full">
          <h2 dir="rtl" className="text-xl font-light leading-7 text-neutral-800 max-md:max-w-full">
            يتيح لك موقع لينكدان تنزيل ملفك الشخصي العام كملف PDF. نحتاج إلى هذا
            الملف لمراجعة خبرتك العملية ومعلومات أخرى.
          </h2>
          <h3 dir="rtl" className="mt-6 text-xl font-bold leading-none text-neutral-800 max-md:max-w-full">
            لتحميل ملف PDF الخاص بك:
          </h3>
          <ol className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
            {instructions.map((instruction, index) => (
              <li
                key={index}
                className="text-xl font-light leading-[50px] text-neutral-800 max-md:max-w-full "
                dir="rtl"
              >
                {instruction}
              </li>
            ))}
          </ol>
          <UploadButton />
        </div>
      </div>
    </section>
  );
};

export default LinkedInProfileUpload;
