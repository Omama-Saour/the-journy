import React from "react";
import InputField from "../EducationForm/InputField";
import deletee from "../../../../assets/StepTwo/delete.png";

const ReferencesEditCard = ({ initialValues,   onDelete,
  deleteLoading }) => {
  return (
    <form className="flex flex-col w-full px-6 pt-2 pb-4 mt-4 bg-white border-2 border-solid border-neutral-800 rounded-[32px]">
    
        {
        deleteLoading ? (
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
        )}

      <div className="flex flex-wrap gap-8 items-start w-full text-sm text-neutral-800 max-md:max-w-full">
        <InputField
          label="الكنية"
          placeholder="الكنية"
          value={initialValues?.lastName || ""}
        />
        <InputField
          label="المرجع"
          placeholder="اسم المرجع"
          value={initialValues?.firstName || ""}
        />
      </div>

      <div className="flex flex-wrap gap-8 mt-4 pl-8 items-start w-full">
        <div className="w-1/2 ml-auto text-sm ">
          <InputField
            label="رقم الهاتف"
            placeholder="رقم الهاتف"
            value={initialValues?.phone || ""}
          />
        </div>
      </div>
    </form>
  );
};

export default ReferencesEditCard;
