import React from "react";
import InputField from "./InputField";
import DatePicker from "./DatePicker";
import CheckboxField from "./CheckboxField";
import deletee from "../../../../assets/StepTwo/delete.png";

const EducationFormCard = ({ isNewEducation = false, initialValues }) => {
  return (
    <form
      className={`flex flex-col w-full ${
        isNewEducation
          ? "px-6 pt-2 pb-4 mt-4 bg-white border-2 border-solid border-neutral-800 rounded-[32px]"
          : ""
      }`}
    >
      {isNewEducation && (
        <img
          loading="lazy"
          src={deletee}
          alt=""
          className="object-contain w-8 aspect-square"
        />
      )}
      <div
        className={`flex flex-col ${
          isNewEducation ? "mt-3" : ""
        } w-full max-md:max-w-full`}
      >
        <div className="flex flex-wrap gap-8 items-start w-full text-sm text-neutral-800 max-md:max-w-full">
          <InputField
            label="الجامعة"
            placeholder="أدخل اسم الجامعة"
            value={initialValues?.university || ""}
          />
          <InputField
            label="الكلية"
            placeholder="أدخل الكلية"
            value={initialValues?.college || ""}
          />
        </div>

        <div className="flex flex-wrap gap-8 items-start mt-4 w-full">
          <div dir="rtl" className="flex-grow">
            <DatePicker
              label="تاريخ الانتهاء"
              value={initialValues.endDate || ""} 
            />
            <CheckboxField
              label="مازلت تدرس"
              checked={initialValues?.isCurrentlyStudying}
            />
          </div>
          <div dir="rtl" className="flex-grow">
            <DatePicker
              label="تاريخ البدأ"
              value={initialValues.startDate || ""} 
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-8 pl-8 items-start w-full">
          <div className="w-1/2 ml-auto">
            <InputField
              label="التخصص"
              placeholder="أدخل التخصص"
              value={initialValues?.specialization || ""}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EducationFormCard;
