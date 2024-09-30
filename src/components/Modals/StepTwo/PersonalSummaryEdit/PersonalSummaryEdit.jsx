import React, { useState } from "react";
import SummaryInput from "./SummaryInput";
import Button from "../EducationForm/Button";
import icon from "../../../../../src/assets/personltyTest/Vector.png";
import { Post_Summries } from "../../../../modules/steps/steptwo/service";

const PersonalSummaryEdit = ({ onSave,  onRefresh }) => {
  const [summary, setSummary] = useState(""); // State for the summary input
  const [error, setError] = useState(""); // State for error messages
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (event) => {
    setSummary(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async () => {
    const data = { summary }; // Prepare the data to send
    setLoading(true); // Set loading to true

    try {
      await Post_Summries(data); // Call the API
      onRefresh(); // Call the refresh function
      onSave(); // Close the modal on successful save
    } catch (error) {
      console.error("Failed to post summary:", error);
      setError("فشل في حفظ الملخص. حاول مرة أخرى."); // Set error message
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        <main className="flex relative flex-col justify-center bg-white rounded-3xl min-w-[850px] pt-20 pb-8 overflow-hidden max-md:px-5 max-md:py-24">
          <h1 className="flex z-0 flex-col w-full text-3xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full">
            تعديل ملخص شخصي
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

          <div className="overflow-y-auto w-full px-5">
            <section
              dir="rtl"
              className="flex z-0 flex-col mt-10 w-full text-xl text-right text-neutral-800 max-md:max-w-full"
            >
              <p className="font-bold leading-none max-md:max-w-full">
                لكتابة ملخص شخصي صحيح:
              </p>
              <ol className="mt-6 list-decimal text-lg list-inside max-md:max-w-full">
                <li className="mb-3">
                  قدّم نفسك: درجتك الأكاديمية والدور الذي تبحث عنه.
                </li>
                <li className="mb-3">
                  سلّط الضوء على المهارات: المهارات والخبرات الأساسية.
                </li>
                <li className="mb-3">اعرض الإنجازات: الإنجازات البارزة.</li>
                <li className="mb-3">
                  توافق مع الوظيفة: مطابقة متطلبات الوظيفة.
                </li>
                <li className="mb-3">كن مختصرًا: 3-4 جمل.</li>
                <li>راجع بدقة</li>
              </ol>
              <SummaryInput value={summary} onChange={handleChange} />{" "}
              {/* Pass value and onChange */}
              {error && <div className="text-red-500 text-sm">{error}</div>}{" "}
              {/* Display error message */}
              {loading ? (
                <div className="flex justify-center items-center mt-10">
                  <div className="loader"></div>{" "}
                  {/* Loader instead of button */}
                </div>
              ) : (
                <Button onClick={handleSubmit} label="حفظ" /> // Show button if not loading
              )}
            </section>
          </div>
        </main>
      </section>
    </>
  );
};

export default PersonalSummaryEdit;
