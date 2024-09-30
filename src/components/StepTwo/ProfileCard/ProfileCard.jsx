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
import { Get_Summries } from "../../../modules/steps/steptwo/service";

const ProfileCard = ({
  name,
  location,
  phone,
  email,
  initials,
  summary,
  education,
  experience,
}) => {
  const [summaries, setSummaries] = useState([]);
  const [loading, setLoading] = useState(true); 

  const fetchSummaries = async () => {
    setLoading(true); 
    try {
      const response = await Get_Summries();
      if (Array.isArray(response.data.data)) {
        setSummaries(response.data.data);
      } else {
        console.error("Expected response.data.data to be an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching summaries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummaries(); 
  }, []);

  return (
    <section className="flex overflow-hidden flex-col justify-start p-8 bg-white min-w-[240px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] w-[796px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <PersonalInfo
          name={name}
          location={location}
          phone={phone}
          email={email}
          initials={initials}
        />
        <EditableSection title="ملخص شخصي" editComponent={PersonalSummaryEdit} onRefresh={fetchSummaries}>
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="loader"></div> 
            </div>
          ) : Array.isArray(summaries) && summaries.length > 0 ? (
            summaries.map((summaryItem) => (
              <div key={summaryItem.id} className="text-base text-neutral-800">
                {summaryItem.summary}
              </div>
            ))
          ) : (
            <div className="text-base text-neutral-800">
              لا توجد ملخصات متاحة
            </div>
          )}
        </EditableSection>
        <EditableSection title="التعليم" editComponent={EducationForm}>
          <div className="flex flex-col justify-center w-full text-base text-neutral-800 max-md:max-w-full">
            <div className="flex gap-2 items-center self-end">
              <div className="flex flex-col justify-center self-stretch my-auto w-[210px]">
                <div className="text-right">{education.institution}</div>
                <div className="flex items-center mt-2 w-full">
                  <div className="self-stretch my-auto text-stone-500">
                    {education.period}
                  </div>
                  <div className="self-stretch my-auto ml-9">
                    {education.location}
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 self-stretch my-auto h-14 bg-violet-200 rounded-lg w-[5px]" />
            </div>
            <div className="mt-4 text-right max-md:max-w-full">
              :التخصص <br />
              <span className="text-stone-500">{education.specialization}</span>
            </div>
          </div>
        </EditableSection>
        <EditableSection title="الخبرة" editComponent={ExperienceEdit}>
          <ExperienceItem
            title={experience.title}
            company={experience.company}
            period={experience.period}
            responsibilities={experience.responsibilities}
          />
        </EditableSection>
        <EditableSection
          title="المهارات"
          content="-"
          editComponent={SkillesEdit}
        />
        <EditableSection
          title="اللغات"
          content="-"
          editComponent={LanguageEdit}
        />
        <EditableSection
          title="الشهادات"
          content="-"
          editComponent={CertificateEdit}
        />
        <EditableSection
          title="المراجع"
          content="-"
          editComponent={ReferencesEdit}
        />
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
};

export default ProfileCard;
