import React, { useState, useEffect } from "react";
import Button from "../EducationForm/Button";
import icon from "../../../../../src/assets/personltyTest/Vector.png";
import { Edit_Summries } from "../../../../modules/steps/steptwo/service";

const PersonalSummaryEdit = ({ onSave, summary }) => {
  const [summaryy, setSummary] = useState(summary || ""); // Initialize with summary prop
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Update state when summary prop changes
  useEffect(() => {
    setSummary(summary || "");
  }, [summary]);

  // Handle input change
  const handleChange = (event) => {
    setSummary(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async () => {
    const data = { summary: summaryy };
    setLoading(true); // Set loading to true

    try {
      console.log(data);
      await Edit_Summries(data);
      onSave();
    } catch (error) {
      console.error("Failed to post summary:", error);
      setError("فشل في حفظ الملخص. حاول مرة أخرى.");
    } finally {
      setLoading(false);
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
              <section className="flex z-0 flex-col mt-10 w-full text-sm max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <label
                    htmlFor="personalSummary"
                    className="gap-1 self-stretch w-full font-bold text-right h-[22px] text-neutral-800 max-md:max-w-full"
                  >
                    ملخص شخصي
                  </label>
                  <textarea
                    id="personalSummary"
                    value={summaryy} // Use the state variable for value
                    onChange={handleChange} // Update onChange to handleChange
                    className="flex gap-2.5 items-start px-4 pt-3 pb-24 mt-2 w-full text-right bg-white border border-violet-200 border-solid min-h-[132px] rounded-[32px] text-neutral-800 max-md:max-w-full"
                    placeholder="أدخل ملخصك"
                    aria-label="أدخل ملخصك الشخصي"
                  />
                </div>
              </section>

              {/* Display error message */}
              {error && <div className="text-red-500 text-sm">{error}</div>}
              {loading ? (
                <div className="flex justify-center items-center mt-10">
                  <div className="loader"></div>
                </div>
              ) : (
                <Button onClick={handleSubmit} label="حفظ" />
              )}
            </section>
          </div>
        </main>
      </section>
    </>
  );
};

export default PersonalSummaryEdit;