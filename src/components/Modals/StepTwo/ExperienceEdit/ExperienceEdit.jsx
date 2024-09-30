import React from "react";
import InputField from "../EducationForm/InputField";
import DatePicker from "../EducationForm/DatePicker";
import CheckboxField from "../EducationForm/CheckboxField";
import TextArea from "./TextArea";
import Button from "../EducationForm/Button";
import plus from "../../../../assets/StepTwo/plus.png";
import icon from "../../../../../src/assets/personltyTest/Vector.png";

const ExperienceEdit = ({ onSave }) => {
  return (
    <>
    <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
    <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
      <main className="flex relative flex-col justify-center bg-white rounded-3xl min-w-[850px] pt-20 pb-8 overflow-hidden max-md:px-5 max-md:py-24">
   <h1 className="flex z-0 flex-col w-full text-3xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full">
        تعديل الخبرة
      </h1>
      <div className="flex absolute top-10 right-10 z-0 items-end w-[20px]">
              <img
                loading="lazy"
                src={icon}
                className="object-contain self-stretch my-auto w-8 aspect-square"
                alt=""
                onClick={onSave} // Close the window when the icon is clicked
              />
            </div>

      <div className="overflow-y-auto max-h-[500px] w-full px-5">
      <div className="flex z-0 flex-col mt-10 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-start w-full text-sm text-neutral-800 max-md:max-w-full">
          <InputField label="الشركة" placeholder="أدخل اسم الشركة" />
          <InputField label="الوظيفة" placeholder="أدخل اسم الوظيفة" />
        </div>
        <div className="flex flex-wrap gap-8 items-start mt-4 w-full">
                <div dir="rtl" className="flex-grow">
                  <DatePicker label="تاريخ الانتهاء" />
                  <CheckboxField label="مازلت تدرس" />
                </div>
                <div dir="rtl" className="flex-grow">
                  <DatePicker label="تاريخ البدأ" />
                </div>
              </div>
        <TextArea/>
        <div className="flex gap-1 justify-center items-center self-center mt-4 text-base font-extrabold tracking-wider leading-snug text-neutral-800">
          <span className="self-stretch my-auto">اضافة جهه شغل جديدية</span>
          <img
            loading="lazy"
            src={plus}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
        </div>
        <Button onClick={onSave} label="حفظ" />
      </div>
     
      </div>
    </main>
      </section>
    </>
  );
};

export default ExperienceEdit;
