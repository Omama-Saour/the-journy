import React from "react";
import InputField from "../EducationForm/InputField";
import DatePicker from "../EducationForm/DatePicker";
import CheckboxField from "../EducationForm/CheckboxField";
import deletee from "../../../../assets/StepTwo/delete.png";

const ExperienceEditCard = ({ isNewExperience = false, initialValues, onDelete, deleteLoading }) => {
  return (
    <form
      className={`flex flex-col w-full ${
        isNewExperience
          ? "px-6 pt-2 pb-4 mt-4 bg-white border-2 border-solid border-neutral-800 rounded-[32px]"
          : ""
      }`}
    >

{isNewExperience &&
        (deleteLoading ? (
          <div className="object-contain w-8 aspect-square cursor-pointer">
            <div className="loader"></div>
          </div>
        ) : (
          <img
            loading="lazy"
            src={deletee}
            onClick={onDelete}
            alt=""
            className="object-contain w-8 aspect-square cursor-pointer"
          />
        ))}

      <div
        className={`flex flex-col ${
          isNewExperience ? "mt-3" : ""
        } w-full max-md:max-w-full`}
      >
        <div className="flex flex-wrap gap-8 items-start w-full text-sm text-neutral-800 max-md:max-w-full">
          <InputField
            label="الشركة"
            placeholder="أدخل الشركة"
            value={initialValues?.company || ""}
            readOnly
          />
          <InputField
            label="الوظيفة"
            placeholder="أدخل اسم الوظيفة"
            value={initialValues?.job || ""}
            readOnly
          />
        </div>

        <div className="flex flex-wrap gap-8 items-start mt-4 w-full">
          <div dir="rtl" className="flex-grow">
            <DatePicker
              label="تاريخ الانتهاء"
              value={initialValues.endDate || ""}
              disabled={true}
              readOnly
            />
            <CheckboxField
              label="مازلت تعمل لديهم"
              checked={!initialValues.endDate} 
              disabled={true}
              readOnly
            />
          </div>
          <div dir="rtl" className="flex-grow">
            <DatePicker
              label="تاريخ البدأ"
              value={initialValues.startDate || ""}
              disabled={true}
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full text-sm max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <label className="gap-1 self-stretch w-full font-bold text-right whitespace-nowrap h-[22px] text-neutral-800 max-md:max-w-full">
              المسؤوليات
            </label>
            <textarea
              placeholder="أدخل المسؤوليات"
              value={initialValues?.responsibiltes || ""}
              readOnly
              className="flex gap-2.5 items-start px-4 pt-3 pb-24 mt-2 w-full text-right bg-white border border-violet-200 border-solid min-h-[132px] rounded-[32px] text-neutral-800 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ExperienceEditCard;
