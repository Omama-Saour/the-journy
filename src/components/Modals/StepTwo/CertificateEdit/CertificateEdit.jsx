import React from "react";
import InputField from "../EducationForm/InputField";
import Button from "../EducationForm/Button";
import CertificateEditCard from "./CertificateEditCard";
import icon from "../../../../../src/assets/personltyTest/Vector.png";
import plus from "../../../../../src/assets/StepTwo/plus.png";

const CertificateEdit = ({ onSave }) => {
  const educationFields = [
    { label: "الشهادة", placeholder: "أدخل اسم الشهادة" },
  ];

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        <main className="flex relative flex-col justify-center bg-white rounded-3xl min-w-[850px] pt-20 pb-8 overflow-hidden max-md:px-5 max-md:py-24">
          <h1 className="flex z-0 flex-col w-full text-3xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full">
            تعديل الشهادات
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
            {" "}
            <form className="flex z-0 flex-col justify-center mt-8 w-full">
              <div className="flex flex-wrap gap-8 items-start w-full text-sm text-neutral-800">
                {educationFields.slice(0, 2).map((field, index) => (
                  <InputField
                    key={index}
                    label={field.label}
                    placeholder={field.placeholder}
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-8 pl-8 items-start w-full">
                {educationFields.slice(2).map((field, index) => (
                  <div key={index} className="w-1/2 ml-auto">
                    <InputField
                      label={field.label}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <button 
              className="flex gap-1 justify-center items-center self-center mt-4 text-base font-extrabold tracking-wider leading-snug text-neutral-800"
              onClick={null}
              >
                اضافة شهادة جديدة
                <img
                  loading="lazy"
                  src={plus}
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                />
              </button>

              <CertificateEditCard
                initialValues={{
                 skill : "شهادة خيرة",
                }}
              />

              <Button onClick={onSave} label="حفظ" />
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default CertificateEdit;
