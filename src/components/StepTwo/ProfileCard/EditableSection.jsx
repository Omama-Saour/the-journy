import React, { useState } from "react";
// import PersonalSummaryEdit from "../../../components/Modals/StepTwo/PersonalSummaryEdit/PersonalSummaryEdit";

const EditableSection = ({
  title,
  content,
  children,
  editComponent: EditComponent,
  onSave,
  onRefresh,
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
    <section className="flex flex-col justify-center px-6 py-4 mt-8 w-full rounded-xl border border-violet-200 border-solid max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full text-right max-md:max-w-full">
        <button 
        className="gap-2.5 self-stretch w-[150px] h-[50px] px-8 py-2 my-auto text-base font-medium leading-none text-white bg-neutral-800 min-h-[40px] rounded-[32px] max-md:px-5"
        onClick={handleEditClick}>
          تعديل

        </button>
        <h2 className="self-stretch my-auto text-base font-bold text-neutral-800">
          {title}
        </h2>
      </div>
      <div className="mt-4 w-full text-base text-right text-neutral-800 max-md:max-w-full">
        {content || children}
      </div>
    </section>

    {/* Conditional rendering of components */}
    {isEditing && (
       <EditComponent onSave={handleClose} onRefresh={onRefresh} />
    )}
  </>
  );
};

export default EditableSection;
