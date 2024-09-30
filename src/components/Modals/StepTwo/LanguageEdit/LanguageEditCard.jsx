import React from "react";
import InputField from "../EducationForm/InputField";
import deletee from "../../../../assets/StepTwo/delete.png";

const LanguageEditCard = ({ initialValues }) => {
  return (
    <form className="flex flex-col w-full px-6 pt-2 pb-4 mt-4 bg-white border-2 border-solid border-neutral-800 rounded-[32px]">
      <img
        loading="lazy"
        src={deletee}
        alt=""
        className="object-contain w-8 aspect-square"
      />

      <InputField
        label="اللغة"
        placeholder="اسم اللغة"
        value={initialValues?.skill || ""}
      />
    </form>
  );
};

export default LanguageEditCard;
