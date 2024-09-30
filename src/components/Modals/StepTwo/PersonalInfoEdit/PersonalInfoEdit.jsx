import React, { useState, useRef } from "react";
import InputField from "../EducationForm/InputField";
import Button from "../EducationForm/Button";
import icon from "../../../../../src/assets/personltyTest/Vector.png";

const PersonalInfoEdit = ({ onSave }) => {
  const [photo, setPhoto] = useState(null);
  const fileInputRef = useRef(null); // Create a reference for the file input

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setPhoto(imgURL);
    }
  };

  const inputFields = [
    { label: "الاسم الاول", placeholder: "أدخل الاسم الاول" },
    { label: "الاسم الاخير", placeholder: "أدخل الاسم الاخير" },
    { label: "المحافظة", placeholder: "أدخل المحافظة" },
    { label: "الدولة", placeholder: "أدخل الدولة" },
    { label: "لينك لينكدان", placeholder: "أدخل لينك لينكدان" },
    { label: "البريد الالكتروني", placeholder: "أدخل البريد الالكتروني" },
  ];

  const handleButtonClick = () => {
    // Trigger the file input click when the button is clicked
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        <main className="flex relative flex-col justify-center pt-20 pb-8 bg-white rounded-3xl max-w-[850px] overflow-hidden max-md:px-5 max-md:py-24">
          <h1 className="flex z-0 flex-col w-full text-3xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full">
            تعديل معلوماتك الشخصية
          </h1>

          <div className="overflow-y-auto  w-full px-5">
            <section className="flex z-0 flex-col justify-center items-center self-center mt-10">
              <div className="flex flex-col max-w-full text-3xl font-semibold text-indigo-600 w-[100px]">
                <div className=" w-full bg-indigo-300 rounded-full h-[100px] max-md:px-5 flex justify-center items-center overflow-hidden">
                  {photo ? (
                    <img
                      src={photo}
                      alt="Uploaded"
                      className="object-cover w-full h-full rounded-full"
                    />
                  ) : (
                    "م م" // Placeholder text when no image is uploaded
                  )}
                </div>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden" // Hide the input
                ref={fileInputRef} // Attach the ref to the input
              />
              <Button onClick={handleButtonClick} label="رفع صورة شخصية" />
            </section>
            <div className="flex absolute top-10 right-10 z-0 items-end w-[20px]">
              <img
                loading="lazy"
                src={icon}
                className="object-contain self-stretch my-auto w-8 aspect-square"
                alt=""
                onClick={onSave} // Close the window when the icon is clicked
              />
            </div>
            <form className="flex z-0 flex-col mt-10 w-full text-sm text-neutral-800 max-md:max-w-full">
              <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
                {inputFields.map((field, index) => (
                  <InputField
                    key={index}
                    label={field.label}
                    placeholder={field.placeholder}
                  />
                ))}
              </div>
              <Button onClick={onSave} label="حفظ" />
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default PersonalInfoEdit;