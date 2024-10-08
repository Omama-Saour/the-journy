import React, { useState } from "react";
import InputField from "./InputField";
import DatePicker from "./DatePicker";
import CheckboxField from "./CheckboxField";
import Button from "./Button";
import EducationFormCard from "./EducationFormCard";
import icon from "../../../../../src/assets/personltyTest/Vector.png";
import plus from "../../../../../src/assets/StepTwo/plus.png";
import { Post_Education } from "../../../../modules/steps/steptwo/service";
import { Delete_Education } from "../../../../modules/steps/steptwo/service";

const EducationForm = ({ onSave, education }) => {
  const [college, setCollege] = useState("");
  const [university, setUniversity] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [isCurrentlyStudying, setIsCurrentlyStudying] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [educationList, setEducationList] = useState([]);
  const [educationListt, setEducationListt] = useState(education);
  const [deletingId, setDeletingId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        specialization,
        university_location: college,
        university_start_date: startDate,
        university_end_date: isCurrentlyStudying ? "" : endDate,
        university_name: university,
      };

      const response = await Post_Education(data);
      const newEducation = { ...data, id: response.data.id };

      setEducationList([...educationList, newEducation]);
      setCollege("");
      setUniversity("");
      setSpecialization("");
      setStartDate("");
      setEndDate("");
      setError(null);
      console.log(response);
    } catch (error) {
      setError("فشل في إضافة التعليم. حاول مرة أخرى");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleteLoading(true);
    setDeleteError(null);
    setDeletingId(id);
    try {
      let response = await Delete_Education(id);

      // Update educationList state to remove the item
      setEducationList((prevList) => prevList.filter((edu) => edu.id !== id));

      // If education is also in the state and you want to update it
      setEducationListt((prevEducation) =>
        prevEducation.filter((edu) => edu.id !== id)
      );

      console.log(response);
    } catch (error) {
      setDeleteError("فشل في حذف التعليم. حاول مرة أخرى");
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
            تعديل التعليم
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
              لكتابة قسم التعليم بشكل صحيح:
            </p>
            <ol dir="rtl" className="mt-6 list-decimal text-lg list-inside">
              <li className="mb-3">تأكد من وضع المعلومات الصحيحة</li>
              <li className="mb-3">
                في البداية تضع آخر الشهادات الحاصل عليها <br /> وبالتالي اذا كنت
                حاصل على شهادة جامعية فلا ضرورة لوجود مؤهلك في المدرسة
              </li>

              <li>
                أين تضع المؤهل العلمي: <br />
                <ul>
                  <li className="mb-1">
                    - إذا كنت تقدم على وظيفة أكاديمية يفضل وضعها بعد الهدف
                    الوظيفي
                    <br />
                    لأن صاحب العمل سيركز على مؤهلاتك العلمية في هذه الحالة
                  </li>
                  <li className="mb-1">
                    - إذا كانت لديك خبرة في مجال معين يفضل وضعها في آخر السيرة
                    الذاتية، <br />
                    لأن صاحب العمل سيلفت نظره خبرتك.
                  </li>
                  <li className="mb-1">
                    {" "}
                    - إذا كنت خريج جديد بدون خبرة يفضل وضع مؤهلك العلمي مباشرة
                    بعد الهدف الوظيفي
                  </li>
                  <li className="mb-1">
                    {" "}
                    - إذا كنت لم تنهي دراستك الجامعية تستطيع طبعا ذكرها
                    <br /> وذلك بوضع تواريخ من تاريخ البدء حتى تاريخ توقفك مع
                    ذكر أهم المواد التي درستها خلال الفترة
                  </li>
                </ul>
              </li>
            </ol>

            <form className="flex z-0 flex-col justify-center mt-10 w-full">
              <div className="flex flex-wrap gap-8 items-start w-full text-sm text-neutral-800">
                <InputField
                  label="الجامعة"
                  placeholder="أدخل اسم الجامعة"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                />
                <InputField
                  label="الكلية"
                  placeholder="أدخل الكلية"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-8 items-start mt-4 w-full">
                <div dir="rtl" className="flex-grow">
                  <DatePicker
                    label="تاريخ الانتهاء"
                    value={endDate}
                    onChange={setEndDate}
                    disabled={isCurrentlyStudying}
                  />
                  <CheckboxField
                    label="مازلت تدرس"
                    checked={isCurrentlyStudying}
                    onChange={() =>
                      setIsCurrentlyStudying(!isCurrentlyStudying)
                    }
                  />
                </div>
                <div dir="rtl" className="flex-grow">
                  <DatePicker
                    label="تاريخ البدأ"
                    value={startDate}
                    onChange={setStartDate}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-8 pl-8 items-start w-full">
                <div className="text-sm w-1/2 ml-auto">
                  <InputField
                    label="التخصص"
                    placeholder="أدخل التخصص"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
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
                    اضافة جهه تعليمية جديدة
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

              {/* Display each added education */}
              {educationList.map((education, index) => (
                <EducationFormCard
                  isNewEducation
                  key={index}
                  initialValues={{
                    university: education.university_name,
                    college: education.university_location,
                    startDate: education.university_start_date,
                    endDate: education.university_end_date,
                    isCurrentlyStudying: education.isCurrentlyStudying,
                    specialization: education.specialization,
                    id: education.id,
                  }}
                  onDelete={() => handleDelete(education.id)}
                  deleteLoading={deletingId === education.id}
                />
              ))}

              {/* Display old education */}
              {educationListt.map((educationn, index) => (
                <EducationFormCard
                  isNewEducation
                  key={index}
                  initialValues={{
                    university: educationn.university_name,
                    college: educationn.university_location,
                    startDate: educationn.university_start_date,
                    endDate: educationn.university_end_date,
                    isCurrentlyStudying: educationn.isCurrentlyStudying,
                    specialization: educationn.specialization,
                    id: educationn.id,
                  }}
                  onDelete={() => handleDelete(educationn.id)}
                  deleteLoading={deletingId === educationn.id}
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

export default EducationForm;
