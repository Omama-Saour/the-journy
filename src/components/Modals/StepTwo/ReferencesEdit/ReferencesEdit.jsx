import React, { useState } from "react";
import InputField from "../EducationForm/InputField";
import Button from "../EducationForm/Button";
import ReferencesEditCard from "./ReferencesEditCard";
import icon from "../../../../../src/assets/personltyTest/Vector.png";
import plus from "../../../../../src/assets/StepTwo/plus.png";
import { Post_References } from "../../../../modules/steps/steptwo/service"; // Import the Post_References method

const ReferencesEdit = ({ onSave }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [referencesList, setReferencesList] = useState([]); // Track list of references
  const [error, setError] = useState(null); // Track any API errors
  const [loading, setLoading] = useState(false); // Track loading state

  const handleAddReference = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await Post_References({
        ref_first_name: firstName,
        ref_last_name: lastName,
        ref_phone: phone,
      });
      // console.log("Status Code:", response.status);
      setReferencesList([...referencesList, response.data]); // Add the new reference to the list
      setFirstName("");
      setLastName("");
      setPhone("");
      setError(null); // Clear any previous errors
    } catch (error) {
      setError("فشل في إضافة المرجع. حاول مرة أخرى"); // Handle error
    } finally {
      setLoading(false); // Reset loading state after the API call
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        <main className="flex relative flex-col justify-center bg-white rounded-3xl min-w-[850px] pt-20 pb-8 overflow-hidden max-md:px-5 max-md:py-24">
          <h1 className="flex z-0 flex-col w-full text-3xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full">
            تعديل المراجع
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
            <form className="flex z-0 flex-col justify-center mt-8 w-full">
         
              <div className="flex flex-wrap gap-8 items-start w-full text-sm text-neutral-800">
              <InputField
                  label="الكنية"
                  placeholder="أدخل الكنية"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)} // Capture last name input
                />
              <InputField
                  label="الاسم الأول"
                  placeholder="أدخل الاسم الأول"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} // Capture first name input
                />
              </div>

              <div className="flex flex-wrap gap-8 mt-4 pl-8 items-start w-full">
              <div className="w-1/2 ml-auto text-sm">
              <InputField
                  label="رقم الهاتف"
                  placeholder="أدخل رقم الهاتف"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} // Capture phone input
                />
              </div>
            
              </div>


              <button
                className="flex gap-1 justify-center items-center self-center mt-4 text-base font-extrabold tracking-wider leading-snug text-neutral-800"
                onClick={handleAddReference} // Trigger reference addition on click
                disabled={loading} // Disable button while loading
              >
                {loading ? (
                  <div className="flex justify-center items-center mt-10">
                    <div className="loader"></div>{" "}
                  </div>
                ) : (
                  <>
                    اضافة مرجع جديد
                    <img
                      loading="lazy"
                      src={plus}
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                    />
                  </>
                )}
              </button>

              {/* Display error message */}
              {error && <p className="text-red-500 text-center mt-2">{error}</p>}

              {/* Display each reference added */}
              {referencesList.map((reference, index) => (
                <ReferencesEditCard
                  key={index}
                  initialValues={{
                    firstName: reference.ref_first_name,
                    lastName: reference.ref_last_name,
                    phone: reference.ref_phone,
                  }}
                />
              ))}

              <Button onClick={onSave} label="حفظ" />
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default ReferencesEdit;
