import React, { useEffect, useState } from "react";
import EditableSection from "./EditableSection";
import PersonalInfo from "./PersonalInfo";
import ExperienceItem from "./ExperienceItem";
import PersonalSummaryEdit from "../../Modals/StepTwo/PersonalSummaryEdit/PersonalSummaryEdit";
import EducationForm from "../../Modals/StepTwo/EducationForm/EducationForm";
import ExperienceEdit from "../../Modals/StepTwo/ExperienceEdit/ExperienceEdit";
import SkillesEdit from "../../Modals/StepTwo/SkillesEdit/SkillesEdit";
import LanguageEdit from "../../Modals/StepTwo/LanguageEdit/LanguageEdit";
import CertificateEdit from "../../Modals/StepTwo/CertificateEdit/CertificateEdit";
import ReferencesEdit from "../../Modals/StepTwo/ReferencesEdit/ReferencesEdit";
import {
  Get_CV,
  Enhance_Experience,
  Enhance_Summery,
} from "../../../modules/steps/steptwo/service";
import Vectorr from "../../../assets/loading/Vectorr.png";
import Vector3 from "../../../assets/loading/Vector3.png";
import Loadding from "../../Modals/Auth/Loadding";
import EnhanceDisplay from "../Enhance/EnhanceDisplay";

const ProfileCard = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enhancementLoading, setEnhancementLoading] = useState(false);
  const [enhancementDone, setEnhancementDone] = useState(false);
  const [enhancementError, setEnhancementError] = useState(null);
  const [enhancementData, setEnhancementData] = useState(null);

  const onClose = () => {
    setEnhancementDone(false);
  };

  const handleGetEnhance = async () => {
    setEnhancementLoading(true); // Start loading for enhancement
    setEnhancementDone(false);
    const summaryData = {
      text: safeSummary.summary ,
    };

    const experienceData = {
      content: experiences.map((exp) => ({
        title: exp.experience_name,
        company: exp.company_name,
        start_date: exp.start_date,
        end_date: exp.end_date || "",
        description: exp.description,
      })),
    };

    try {
      // Call the Enhance_Experience API
      const experienceResponse = await Enhance_Experience(experienceData);
      console.log("Experience Response:", experienceResponse.data);

      // Call the Enhance_Summery API
      const summaryResponse = await Enhance_Summery(summaryData);
      console.log("Summary Response:", summaryResponse.data);

      setEnhancementData({
        experience: experienceResponse.data,
        summary: summaryResponse.data,
      });
      setEnhancementDone(true);
    } catch (error) {
      setEnhancementError(
        "حدث خطأ في الحصول على الاقتراحات. يرجى المحاولة مجدداً"
      );
      console.error("Error during API calls:", error);
    } finally {
      setEnhancementLoading(false); 
    }
  };

  const fetchProfileData = async () => {
    setLoading(true);
    try {
      const response = await Get_CV();
      setProfileData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  if (loading) {
    return (
      <section className="flex overflow-hidden flex-col justify-start p-8 bg-white min-w-[240px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] w-[796px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex justify-center items-center mt-40 mb-40">
            <div className="loader"></div>
          </div>
        </div>
        <style jsx>{`
          .loader {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top: 4px solid #3498db;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </section>
    );
  }

  if (!profileData) {
    return (
      <section className="flex overflow-hidden flex-col justify-start p-8 bg-white min-w-[240px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] w-[796px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex justify-center items-center">
            <p dir="rtl" className="text-red-500">
              خطأ في تحميل البيانات، أعد تحميل الصفحة.
            </p>
          </div>
        </div>
      </section>
    );
  }

     const {
      personal_info = {},
      // job_title,
      summary, 
      education = [],
      experiences = [],
      skills = [],
      languages = [],
      certificates = [],
      references = [],
    } = profileData || {}; 
  
    // Set a default value for summary
    const safeSummary = summary ? summary : { summary: "-" }; // Fallback if summary is null
  
  return (
    <>
      <section className="flex overflow-hidden flex-col justify-start p-8 bg-white min-w-[240px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] w-[796px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          {/* <div
            dir="rtl"
            className="flex flex-warp mr-8 mb-8 w-full max-md:max-w-full"
          >
            <div className="text-lg font-bold">المسمى الوظيفي:</div>
            <div className="text-base mr-2 font-semibold text-neutral-800">
              {job_title.job_title || "لا يوجد مسمى وظيفي"}
            </div>
          </div> */}

          <PersonalInfo
            firstname={personal_info.first_name  || "-"}
            lastname={personal_info.last_name  || "-"}
            cityy={personal_info.city || "-"}
            country={personal_info.country || "-"}
            phone={personal_info.phone  || "-"}
            email={personal_info.email  || "-"}
            initials={`${personal_info.first_name[0]  || "-"}${personal_info.last_name[0]  || "-"}`}
            websiteurl={personal_info.website_url  || "-"}
            linkedinurl={personal_info.linkedin_url  || "-"}
            onRefresh={fetchProfileData}
          />
          <EditableSection
            title="ملخص شخصي"
            editComponent={PersonalSummaryEdit}
            onRefresh={fetchProfileData}
            summary={safeSummary.summary  || "-"}
          >
            <div className="text-base text-neutral-800">
              {safeSummary.summary || "-"}
            </div>
          </EditableSection>
          <EditableSection
            title="التعليم"
            editComponent={EducationForm}
            onRefresh={fetchProfileData}
            education={education}
          >
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col justify-center w-full text-base text-neutral-800 max-md:max-w-full mb-5"
              >
                <div className="flex gap-2 items-center self-end">
                  <div className="flex flex-col justify-center self-stretch my-auto w-full">
                    <div className="text-right">{edu.university_name  || "-"}</div>
                    <div className="flex items-center mt-2 w-full">
                      <div className="self-stretch my-auto text-stone-500">
                        {`${edu.university_start_date  || "-"} - ${
                          edu.university_end_date || "لا يزال يدرس"
                        }`}
                      </div>
                      <div className="self-stretch my-auto ml-9">
                        {edu.university_location  || "-"}
                      </div>
                    </div>
                  </div>
                  <div className="flex shrink-0 self-stretch my-auto h-14 bg-violet-200 rounded-lg w-[5px]" />
                </div>
                <div className="mt-3 text-right max-md:max-w-full">
                  :التخصص <br />
                  <span className="text-stone-500">{edu.specialization  || "-"}</span>
                </div>
              </div>
            ))}
          </EditableSection>
          <EditableSection
            title="الخبرة"
            editComponent={ExperienceEdit}
            onRefresh={fetchProfileData}
            experiences={experiences}
          >
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                title={exp.experience_name  || "-"}
                company={exp.company_name  || "-"}
                period={`${exp.start_date  || "-"} - ${exp.end_date || "لا يزال يعمل"}`}
                responsibilities={exp.description || "-"}
              />
            ))}
          </EditableSection>
          <EditableSection
            title="المهارات"
            editComponent={SkillesEdit}
            onRefresh={fetchProfileData}
            skills={skills}
          >
            {/* <div className="text-base text-neutral-800">
              {skills.map((skill, index) => (
                <div key={index} className="text-base text-neutral-800">
                  {skill.skill_name_ar ? skill.skill_name_ar : skill.skill_name  || "-"}
                </div>
              ))}
            </div> */}

<div dir="rtl" className="flex flex-wrap gap-2 text-base text-neutral-800">
  {skills.map((skill, index) => (
    <div key={index} className="border border-gray-300 rounded-[31px] p-2">
      {skill.skill_name_ar ? skill.skill_name_ar : skill.skill_name || "-"}
    </div>
  ))}
</div>
          </EditableSection>
          <EditableSection
            title="اللغات"
            editComponent={LanguageEdit}
            onRefresh={fetchProfileData}
            languages={languages}
          >
            <div className="text-base text-neutral-800">
              {languages.map((language, index) => (
                <div key={index} className="text-base text-neutral-800">
                  {language.language_name  || "-"}
                </div>
              ))}
            </div>
          </EditableSection>
          <EditableSection
            title="الشهادات"
            editComponent={CertificateEdit}
            onRefresh={fetchProfileData}
            certificates={certificates}
          >
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="text-base text-neutral-800"
              >{`(${cert.certificate_date || "-"}) ${cert.certificate_name || "-"}`}</div>
            ))}
          </EditableSection>
          <EditableSection
            title="المراجع"
            editComponent={ReferencesEdit}
            onRefresh={fetchProfileData}
            references={references}
          >
            {references.map((ref, index) => (
              <div
                key={index}
                className="text-base text-neutral-800"
              >{`${ref.first_name || "-"} ${ref.last_name || "-"} - ${ref.phone || "-"}`}</div>
            ))}
          </EditableSection>
        </div>

        <button
          className="w-full h-[70px] mt-8 text-base font-medium leading-none text-black border-2 border-blue-500 bg-blue-50 min-h-[40px] rounded-[20px] max-md:px-5 overflow-hidden"
          onClick={handleGetEnhance}
          style={{
            backgroundImage: `url(${Vectorr}), url(${Vector3})`,
            backgroundPosition: "bottom right, top left",
            backgroundSize: "8%, 8%",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
          الحصول على اقتراحات الذكاء الاصطناعي
        </button>
        {enhancementError && (
          <div className="text-red-500 text-center mt-4">
            {enhancementError}
          </div>
        )}
        {enhancementLoading && <Loadding show={enhancementLoading} />}

        {enhancementDone && (
          <EnhanceDisplay
            show={enhancementDone}
            data={enhancementData}
            onClose={onClose}
          />
        )}
        <style jsx>{`
          .loader {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top: 4px solid #3498db;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default ProfileCard;
