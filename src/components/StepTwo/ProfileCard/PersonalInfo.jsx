import React, { useState } from "react";
import inn from "../../../assets/StepTwo/in.png";
import word from "../../../assets/StepTwo/word.png";
import PersonalInfoEdit from "../../Modals/StepTwo/PersonalInfoEdit/PersonalInfoEdit"; 

const PersonalInfo = ({
  name,
  location,
  phone,
  email,
  initials,
}) => {
  const [isEditing, setIsEditing] = useState(false); // State to manage the edit form visibility

  const handleEditClick = () => {
    setIsEditing(true); // Show the PersonalInfoEdit component
  };

  const handleClose = () => {
    setIsEditing(false); // Hide the PersonalInfoEdit component
  };

  return (
    <>
      <section className="flex flex-wrap gap-8 justify-center items-start px-6 py-4 w-full rounded-xl border border-violet-200 border-solid max-md:px-5 max-md:max-w-full">
        <button
          className="gap-2.5 self-stretch w-[150px] h-[50px] px-8 py-2 text-base font-medium leading-none text-white whitespace-nowrap bg-neutral-800 min-h-[40px] rounded-[32px] max-md:px-5"
          onClick={handleEditClick} // Open edit form when clicked
        >
          تعديل
        </button>
        <div className="flex flex-col flex-1 shrink justify-center basis-16 min-w-[240px] max-md:max-w-full">
          <h1 className="text-2xl font-bold text-right text-neutral-800 max-md:max-w-full">
            {name}
          </h1>
          <div className="flex flex-col mt-3 w-full text-base text-right text-neutral-800 max-md:max-w-full">
            <div className="gap-2 self-stretch w-full max-md:max-w-full">
              {location}
            </div>
            <div className="flex gap-2 items-end mt-2 w-full justify-end">
              <div className="self-stretch my-auto text-right">{phone}</div>
              <div className="flex shrink-0 self-stretch my-auto w-px rounded-lg bg-slate-500 bg-opacity-20 h-[22px]" />
              <div className="self-stretch my-auto text-right">{email}</div>
            </div>
          </div>
          <div className="flex gap-2 items-center self-end mt-3">
            <img
              loading="lazy"
              src={inn}
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt=""
            />
            <img
              loading="lazy"
              src={word}
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col text-2xl font-semibold text-indigo-600 w-[65px]">
          <div className="px-3 py-3 bg-indigo-300 rounded-full h-[70px] w-[70px]">
            {initials}
          </div>
        </div>
      </section>

      {/* Conditional rendering of the PersonalInfoEdit component */}
      {isEditing && (
        <PersonalInfoEdit onSave={handleClose} /> // Pass handleClose to save
      )}
    </>
  );
};

export default PersonalInfo;