import React, { useState, useEffect } from "react";
import icon from "../../../../../src/assets/personltyTest/Vector.png";
import Button from "../../StepTwo/EducationForm/Button";
import {
  SendJobTitle,
  SendSkills,
} from "../../../../modules/steps/stepone/service";
import vec from "../../../../assets/StepOne/Vector.png";

const Skill = ({ name, isSelected, onToggle }) => (
  <label
    onClick={onToggle}
    dir="rtl"
    className="flex items-center w-[164px] h-[42px] px-3 my-auto rounded-3xl border border-violet-200 border-solid cursor-pointer"
  >
    <input
      type="checkbox"
      className="hidden"
      checked={isSelected}
      onChange={onToggle}
    />
    {isSelected ? (
      <img
        loading="lazy"
        src={vec}
        alt="Selected"
        className="w-5 aspect-square mr-2"
      />
    ) : (
      <div className="w-5 h-5 border border-black rounded-full mr-2" />
    )}
    <span className="pr-2 text-sm leading-relaxed text-neutral-800 text-right">
      {name}
    </span>
  </label>
);

const Job = ({ name, isSelected, onToggle }) => (
  <label
    onClick={onToggle}
    dir="rtl"
    className="flex items-center w-[164px] h-[42px] px-3 my-auto rounded-3xl border border-violet-200 border-solid cursor-pointer"
  >
    <input
      type="checkbox"
      className="hidden"
      checked={isSelected}
      onChange={onToggle}
    />
    {isSelected ? (
      <img
        loading="lazy"
        src={vec}
        alt="Selected"
        className="w-5 aspect-square mr-2"
      />
    ) : (
      <div className="w-5 h-5 border border-black rounded-full mr-2" />
    )}
    <span className="pr-2 text-sm leading-relaxed text-neutral-800 text-right">
      {name}
    </span>
  </label>
);

const NoSuggested = ({
  onSave,
  suggestedSkills,
  suggestedSkillsAR,
  jobTitles,
  carrer,
}) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setSelectedSkills(suggestedSkills);
  }, [suggestedSkills]);

  const handleToggleSkill = (skillName) => {
    setSelectedSkills((prev) =>
      prev.includes(skillName)
        ? prev.filter((s) => s !== skillName)
        : [...prev, skillName]
    );
  };

  const handleToggleJob = (jobName) => {
    setSelectedJob((prevJob) => (prevJob === jobName ? null : jobName));
  };

  const handleSave = async () => {
    const jobTitleData = { job_title: selectedJob };
    const skillsData = {
      skills: selectedSkills.map((skill) => {
        const index = suggestedSkills.indexOf(skill);
        return {
          skill_name: skill,
          skill_name_ar: suggestedSkillsAR[index] || skill,
        };
      }),
    };
    setLoading(true);
    setError(null);

    try {
      await SendJobTitle(jobTitleData);
      await SendSkills(skillsData);
      onSave();
      console.log("Job title and skills sent successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
      setError(
        "حدث خطأ أثناء حفظ البيانات. تأكد من اختيار مسمى وظيفي ثم حاول مرة أخرى."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        <main className="flex relative flex-col justify-center bg-white rounded-3xl min-w-[450px] pt-20 pb-8 ml-20 mr-20 overflow-hidden max-md:px-5 max-md:py-24">
          <div className="flex absolute top-10 right-10 z-0 items-end w-[20px]">
            <img
              loading="lazy"
              src={icon}
              className="object-contain self-stretch my-auto w-8 aspect-square"
              alt=""
              onClick={onSave}
            />
          </div>

          <div className="overflow-y-auto w-full px-5">
            <section
              dir="rtl"
              className="flex z-0 flex-col mt-2 w-full text-xl text-right text-neutral-800 max-md:max-w-full"
            >
              <h1 className="flex z-0 flex-col w-full pl-8 pr-8 text-xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full">
                نتيجة تحليل شخصيتك:
              </h1>
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 leading-8  max-md:max-w-full">
                <p className="max-md:max-w-full">{carrer || ""}</p>
              </div>
              <h1 className="flex z-0 flex-col w-full p-8 text-xl font-bold leading-none text-center text-neutral-800 mt-10 max-md:max-w-full">
                بالإضافة إلى المهارات التي اخترتها سابقاً هذه مهارات مقترحة بناء
                على أجوبتك في اختبار تحديد الشخصية
              </h1>
              <p className="leading-none mt-2 max-md:max-w-full">
                قم باختيار مسمى وظيفي واحد
              </p>
              <div className="flex flex-wrap gap-6 items-center mt-2 mb-10 w-full max-md:max-w-full">
                {jobTitles.length > 0 ? (
                  jobTitles.map((job, index) => (
                    <Job
                      key={index}
                      name={job.job_title_arabic}
                      isSelected={
                        selectedJob ===
                        `${job.job_title} (${job.job_title_arabic})`
                      }
                      onToggle={() =>
                        handleToggleJob(
                          `${job.job_title} (${job.job_title_arabic})`
                        )
                      }
                    />
                  ))
                ) : (
                  <p className="text-neutral-600">
                    لا توجد مسميات وظيفية مقترحة
                  </p>
                )}
              </div>

              <p className="leading-none max-md:max-w-full">
                تأكد من امتلاكك المهارات المعروضة أو قم بإزالتها
              </p>
              <div className="flex flex-wrap gap-6 items-center mt-2 w-full max-md:max-w-full">
                {suggestedSkills.length > 0 ? (
                  suggestedSkills.map((skill, index) => (
                    <Skill
                      key={index}
                      name={suggestedSkillsAR[index]}
                      isSelected={selectedSkills.includes(skill)}
                      onToggle={() => handleToggleSkill(skill)}
                    />
                  ))
                ) : (
                  <p className="text-neutral-600">لا توجد مهارات مقترحة</p>
                )}
              </div>

              {loading ? (
                <div className="flex justify-center items-center mt-10">
                  <div className="loader"></div>
                </div>
              ) : (
                <>
                  {error && (
                    <p className="text-red-500 mt-8 text-center">{error}</p>
                  )}
                  <Button onClick={handleSave} label="حفظ" />
                </>
              )}
            </section>
          </div>
        </main>
      </section>
    </>
  );
};

export default NoSuggested;
