import React, { useState } from "react";
import InputField from "../EducationForm/InputField";
import DatePicker from "../EducationForm/DatePicker";
import CheckboxField from "../EducationForm/CheckboxField";
import Button from "../EducationForm/Button";
import plus from "../../../../assets/StepTwo/plus.png";
import icon from "../../../../../src/assets/personltyTest/Vector.png";
import ExperienceEditCard from "./ExperienceEditCard";
import { Post_Experiences } from "../../../../modules/steps/steptwo/service";
import { Delete_Experiences } from "../../../../modules/steps/steptwo/service";

const ExperienceEdit = ({ onSave, experiences }) => {
  // State for the new experience input fields
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [responsibilities, setResponsibilities] = useState("");
  const [loading, setLoading] = useState(false);
  const [experiencesList, setExperiencesList] = useState([]);
  const [experiencesListt, setExperiencesListt] = useState(experiences);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const handleSubmit = async () => {
    const data = {
      exper_name: jobTitle,
      exper_start_date: startDate,
      exper_end_date: isCurrentlyWorking ? "" : endDate,
      company_name: companyName,
      company_location: "",
      responsibilities: [
        {
          responsability_name: responsibilities,
        },
      ],
    };

    try {
      setLoading(true);
      const response = await Post_Experiences(data);
      const newExperiences = { ...data, id: response.data.experience.id };
      setExperiencesList([...experiencesList, newExperiences]);
      setCompanyName("");
      setJobTitle("");
      setStartDate("");
      setEndDate("");
      setResponsibilities("");
      setError(null);
      console.log("Experience added successfully:", response.data);
    } catch (error) {
      setError("فشل في إضافة الخبرة. حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleteLoading(true);
    setDeleteError(null);
    setDeletingId(id);
    try {
      let response = await Delete_Experiences(id);
      console.log("id");
      console.log(id);
      console.log("id printed");
      // Update educationList state to remove the item
      setExperiencesList((prevList) => prevList.filter((edu) => edu.id !== id));

      // If education is also in the state and you want to update it
      setExperiencesListt((prevEducation) =>
        prevEducation.filter((edu) => edu.id !== id)
      );

      console.log(response);
    } catch (error) {
      setDeleteError("فشل في حذف الخبرة. حاول مرة أخرى");
    } finally {
      setDeleteLoading(false);
      setDeletingId(null);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        <main className="flex relative flex-col justify-center bg-white rounded-3xl min-w-[850px] pt-20 pb-8 overflow-hidden max-md:px-5 max-md:py-24">
          <h1 className="flex z-0 flex-col w-full text-3xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full">
            تعديل الخبرة
          </h1>
          <div className="flex absolute top-10 right-10 z-0 items-end w-[20px]">
            <img
              loading="lazy"
              src={icon}
              className="object-contain self-stretch my-auto w-8 aspect-square"
              alt=""
              onClick={onSave}
            />
          </div>

          <div className="overflow-y-auto max-h-[500px] w-full px-5">
            <p
              dir="rtl"
              className="mt-10 font-bold leading-none max-md:max-w-full"
            >
              لكتابة معلومات الخبرة بشكل صحيح:
            </p>
            <ol
              dir="rtl"
              className="mt-6 list-decimal text-lg list-inside max-md:max-w-full"
            >
              <li className="mb-3">
                الخبرة تشمل الخبرات والتدريبات خلال الجامعة
              </li>
              <li className="mb-3">
                صف مهامك الرئيسية وابدأ كل مهمة بأفعال قوية
              </li>

              <li className="mb-3">
                لا تستخدم فعل واحد فقط، ودائما عند كتابة مهامك ركز على ما هو
                مطلوب بقطاعك
                <br />
                وما تطلبه الشركات التي تطمح للعمل لديها وأظهره في البداية
              </li>
              <li className="mb-3">لا يجب أن تتجاوز الخبرات أكثر من ثمانية</li>
              <li className="mb-3">لا تكرر الخبرات</li>
              <li className="mb-3">انتبه على الأخطاء الإملائية </li>
            </ol>

            <div className="flex z-0 flex-col mt-10 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-8 items-start w-full text-sm text-neutral-800 max-md:max-w-full">
                <InputField
                  label="الشركة"
                  placeholder="أدخل اسم الشركة"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <InputField
                  label="الوظيفة"
                  placeholder="أدخل اسم الوظيفة"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-8 items-start mt-4 w-full">
                <div dir="rtl" className="flex-grow">
                  <DatePicker
                    label="تاريخ الانتهاء"
                    value={endDate}
                    disabled={isCurrentlyWorking}
                    onChange={(date) => setEndDate(date)}
                  />
                  <CheckboxField
                    label="مازلت تعمل لديهم"
                    checked={isCurrentlyWorking}
                    onChange={() => setIsCurrentlyWorking(!isCurrentlyWorking)}
                  />
                </div>
                <div dir="rtl" className="flex-grow">
                  <DatePicker
                    label="تاريخ البدأ"
                    value={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-4 w-full text-sm max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <label className="gap-1 self-stretch w-full font-bold text-right whitespace-nowrap h-[22px] text-neutral-800 max-md:max-w-full">
                    المسؤوليات
                  </label>
                  <textarea
                    placeholder="أدخل المسؤوليات"
                    value={responsibilities}
                    onChange={(e) => setResponsibilities(e.target.value)}
                    className="flex gap-2.5 items-start px-4 pt-3 pb-24 mt-2 w-full text-right bg-white border border-violet-200 border-solid min-h-[132px] rounded-[32px] text-neutral-800 max-md:max-w-full"
                  />
                </div>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="flex gap-1 justify-center items-center self-center mt-4 text-base font-extrabold tracking-wider leading-snug text-neutral-800"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex justify-center items-center mt-10">
                    <div className="loader"></div>
                  </div>
                ) : (
                  <>
                    اضافة جهه شغل جديدية
                    <img
                      loading="lazy"
                      src={plus}
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                    />
                  </>
                )}
              </button>

              {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
              )}

              {/* Display each added experience */}
              {experiencesList.map((experience, index) => (
                <ExperienceEditCard
                  isNewExperience
                  key={index}
                  initialValues={{
                    company: experience.company_name,
                    job: experience.exper_name,
                    startDate: experience.exper_start_date,
                    endDate: experience.isCurrentlyWorking
                      ? ""
                      : experience.exper_end_date,
                    isCurrentlyWork: experience.isCurrentlyWorking,
                    responsibiltes:
                      experience.responsibilities[0].responsability_name,
                    id: experience.id,
                  }}
                  onDelete={() => handleDelete(experience.id)}
                  deleteLoading={deletingId === experience.id}
                />
              ))}

              {/* Display old Experience */}
              {experiencesListt.map((experiences, index) => (
                <ExperienceEditCard
                  isNewExperience
                  key={index}
                  initialValues={{
                    company: experiences.company_name,
                    job: experiences.experience_name,
                    startDate: experiences.start_date,
                    endDate: experiences.end_date,
                    isCurrentlyWork: experiences.isCurrentlyWork,
                    responsibiltes: experiences.company_location,
                    id: experiences.id,
                  }}
                  onDelete={() => handleDelete(experiences.id)}
                  deleteLoading={deletingId === experiences.id}
                />
              ))}
              <Button label="حفظ" />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default ExperienceEdit;
