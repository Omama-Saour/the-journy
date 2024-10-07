// import React, { useState, useRef } from "react";
// import InputField from "../EducationForm/InputField";
// import Button from "../EducationForm/Button";
// import icon from "../../../../../src/assets/personltyTest/Vector.png";

// const PersonalInfoEdit = ({
//   onSave,
//   firstname,
//   lastname,
//   cityy,
//   country,
//   phone,
//   email,
//   initials,
//   websiteurl,
//   linkedinurl,
// }) => {
//   const [photo, setPhoto] = useState(null);
//   const fileInputRef = useRef(null); 

//   const handlePhotoUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imgURL = URL.createObjectURL(file);
//       setPhoto(imgURL);
//     }
//   };

//   const inputFields = [
//     { label: "الاسم الاخير", defaultValue: lastname, placeholder: "أدخل الاسم الاخير" },
//     { label: "الاسم الاول", defaultValue: firstname, placeholder: "أدخل الاسم الاول" },
//     { label: "المحافظة", defaultValue: cityy, placeholder: "أدخل المحافظة" },
//     { label: "الدولة", defaultValue: country, placeholder: "أدخل الدولة" },
//     { label: "البريد الالكتروني", defaultValue: email, placeholder: "أدخل البريد الالكتروني" },
//     { label: "رقم الهاتف", defaultValue: phone, placeholder: "أدخل رقم الهاتف" },
//     { label: "لينك لينكدان", defaultValue: linkedinurl, placeholder: "أدخل لينك لينكدان" },
//     { label: "رابط الموقع", defaultValue: websiteurl, placeholder: "أدخل رابط الموقع" },
//   ];

//   const handleButtonClick = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <>
//       <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
//       <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
//         <main className="flex relative flex-col justify-center pt-20 pb-8 bg-white rounded-3xl max-w-[850px] overflow-hidden max-md:px-5 max-md:py-24">
//           <h1 className="flex z-0 flex-col w-full text-3xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full">
//             تعديل معلوماتك الشخصية
//           </h1>

//           <div className="overflow-y-auto w-full px-5">
//             <section className="flex z-0 flex-col justify-center items-center self-center mt-10">
//               <div className="flex flex-col max-w-full text-3xl font-semibold text-indigo-600 w-[100px]">
//                 <div className="w-full bg-indigo-300 rounded-full h-[100px] max-md:px-5 flex justify-center items-center overflow-hidden">
//                   {photo ? (
//                     <img
//                       src={photo}
//                       alt="Uploaded"
//                       className="object-cover w-full h-full rounded-full"
//                     />
//                   ) : (
//                     initials // Show initials if no photo
//                   )}
//                 </div>
//               </div>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handlePhotoUpload}
//                 className="hidden" // Hide the input
//                 ref={fileInputRef} // Attach the ref to the input
//               />
//               <Button onClick={handleButtonClick} label="رفع صورة شخصية" />
//             </section>
//             <div className="flex absolute top-10 right-10 z-0 items-end w-[20px]">
//               <img
//                 loading="lazy"
//                 src={icon}
//                 className="object-contain self-stretch my-auto w-8 aspect-square"
//                 alt=""
//                 onClick={onSave} // Close the window when the icon is clicked
//               />
//             </div>
//             <form className="flex z-0 flex-col mt-10 w-full text-sm text-neutral-800 max-md:max-w-full">
//               <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
//                 {inputFields.map((field, index) => (
//                   <InputField
//                     key={index}
//                     label={field.label}
//                     placeholder={field.defaultValue || field.placeholder}
//                   />
//                 ))}
//               </div>
//               <Button label="حفظ" />
//             </form>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// };

// export default PersonalInfoEdit;
import React, { useState, useRef } from "react";
import InputField from "../EducationForm/InputField";
import Button from "../EducationForm/Button";
import icon from "../../../../../src/assets/personltyTest/Vector.png";
import { Edit_Personal_Enformtion } from "../../../../modules/steps/steptwo/service"; 

const PersonalInfoEdit = ({
  onSave,
  onRefresh,
  firstname,
  lastname,
  cityy,
  country,
  phone,
  email,
  initials,
  websiteurl,
  linkedinurl,
}) => {
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    first_name: firstname,
    last_name: lastname,
    city: cityy,
    country: country,
    phone: phone,
    email: email,
    website_url: websiteurl,
    linkedin_url: linkedinurl,
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const fileInputRef = useRef(null); 

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setPhoto(imgURL);
    }
  };

  const handleInputChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state to true
    setError(null); // Reset error state

    const dataToSend = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      city: formData.city,
      website_url: formData.website_url,
      linkedin_url: formData.linkedin_url,
      _method: "PUT",
    };
    
    try {
      const response = await Edit_Personal_Enformtion(dataToSend);
      console.log(response);
      onRefresh();
      onSave(); // Close the modal or perform further actions
    } catch (error) {
      console.error("Error saving personal information", error);
      setError("فشل في حفظ المعلومات الشخصية. حاول مرة أخرى."); // Set the error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const inputFields = [
    { label: "الاسم الاخير", placeholder: "أدخل الاسم الاخير", key: "last_name" },
    { label: "الاسم الاول", placeholder: "أدخل الاسم الاول", key: "first_name" },
    { label: "المحافظة", placeholder: "أدخل المحافظة", key: "city" },
    { label: "الدولة", placeholder: "أدخل الدولة", key: "country" },
    { label: "البريد الالكتروني", placeholder: "أدخل البريد الالكتروني", key: "email" },
    { label: "رقم الهاتف", placeholder: "أدخل رقم الهاتف", key: "phone" },
    { label: "لينك لينكدان", placeholder: "أدخل لينك لينكدان", key: "linkedin_url" },
    { label: "رابط الموقع", placeholder: "أدخل رابط الموقع", key: "website_url" },
  ];

  const handleButtonClick = () => {
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

          <div className="overflow-y-auto w-full px-5">
            <section className="flex z-0 flex-col justify-center items-center self-center mt-10">
              <div className="flex flex-col max-w-full text-3xl font-semibold text-indigo-600 w-[100px]">
                <div className="w-full bg-indigo-300 rounded-full h-[100px] max-md:px-5 flex justify-center items-center overflow-hidden">
                  {photo ? (
                    <img
                      src={photo}
                      alt="Uploaded"
                      className="object-cover w-full h-full rounded-full"
                    />
                  ) : (
                    initials // Show initials if no photo
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
                onClick={() => {
                  onSave();      
                  onRefresh();   
                }}  
              />
            </div>
            <form className="flex z-0 flex-col mt-10 w-full text-sm text-neutral-800 max-md:max-w-full" onSubmit={handleSubmit}>
              <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
                {inputFields.map((field, index) => (
                  <InputField
                    key={index}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={formData[field.key]} // Bind the value to state
                    onChange={(e) => handleInputChange(e, field.key)} // Update input change function
                  />
                ))}
              </div>
              {error && <div className="text-red-500 text-sm">{error}</div>}
            {loading ? (
                <div className="flex justify-center items-center mt-10">
                  <div className="loader"></div>{" "}
                </div>
              ) : (
                <Button onClick={handleSubmit} label="حفظ" /> 
              )}
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default PersonalInfoEdit;