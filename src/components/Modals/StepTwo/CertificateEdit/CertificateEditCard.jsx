import React from "react";
import InputField from "../EducationForm/InputField";
import deletee from "../../../../assets/StepTwo/delete.png";
import DatePicker from "../EducationForm/DatePicker";

const CertificateEditCard = ({ initialValues }) => {
  return (
    <form className="flex flex-col w-full px-6 pt-2 pb-4 mt-4 bg-white border-2 border-solid border-neutral-800 rounded-[32px]">
      <img
        loading="lazy"
        src={deletee}
        alt=""
        className="object-contain w-8 aspect-square"
      />

      <div className="flex flex-wrap gap-8 items-start mt-4 w-full max-md:max-w-full">
      <div dir="rtl" className=" w-1/2">
        <DatePicker
          label="تاريخ الشهادة"
         value={initialValues?.certDate}
          disabled={true}
        />
        </div>
        <InputField
          label="الشهادة"
          placeholder="اسم الشهادة"
          value={initialValues?.cert || ""}
        />
      </div>
    </form>
  );
};

export default CertificateEditCard;
