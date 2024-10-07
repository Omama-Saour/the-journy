import React, { useState } from "react";
import Header from "../../../components/StepOne/Header";
import MainContent from "../../../components/StepOne/MainContent";
import patternbackground from "../../../assets/loading/patternbackground.png";
import OptionalSteps from "../../../components/Modals/StepOne/OptionalSteps/OptionalSteps";
import arrow from "../../../assets/StepOne/arrow-left-line.png";
import { SendSkillsAnswers, SendSkills } from "./service";
import { getGlobalData , getSelectedValueGlobal, getskillsChosen, getadditionalSkillsForSendSkills} from "../../../components/StepOne/globals";
import NoSuggested from "../../../components/Modals/StepOne/NoSuggested/NoSuggested";

const StepNone = () => {
  const handleImageClick = () => {
    const selectedValue = getSelectedValueGlobal(); 
  
    if (selectedValue === "no") {
      sendApi(); // Call sendApi if selected value is "no"
    } else if (selectedValue === "yes") {
      sendApiYes(); // Call sendApiYes if selected value is "yes"
    }
  };

  const [isOptionalSteps, setIsOptionalSteps] = useState(false);
  const [showNoSuggested, setShowNoSuggested] = useState(false);
  const [suggested, setSuggested] = useState({
    hardSkills: [],
    softSkills: [],
    hardSkillsAR: [],
    softSkillsAR: [],
    jobTitles: [],
  });

  // Loading and Error state
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEditClick = () => {
    setIsOptionalSteps(false);
  };

  const handleCloseNoSuggested = () => {
    setShowNoSuggested(false);
    setIsOptionalSteps(true); 
  };

  const sendApi = async () => {
    setLoading(true); 
    setErrorMessage("");// Clear previous error
    const { answers, additional_skills } = getGlobalData();
    const additionalSkillsForSendSkills = getadditionalSkillsForSendSkills();
 // Check for empty answers
 if (answers.includes('')) {
  setErrorMessage("يرجى التأكد من الإجابة على جميع الأسئلة."); // Error message for empty answers
  setLoading(false);
  return; // Stop further execution if there's an empty answer
}

    const numericAnswers = answers.map((answer) => Number(answer));
    const payload = {
      answers: numericAnswers,
      additional_skills,
    };

    try {
      const response = await SendSkillsAnswers(payload);
      console.log("API Response:", response.data);

      console.log("additionalSkillsForSendSkills")
      console.log(additionalSkillsForSendSkills)

      const responseskillssend = await SendSkills(additionalSkillsForSendSkills);
      console.log("API responseskillssend:", responseskillssend.data);

      if (response.data) {
        const hardSkills = response.data.suggested_hard_skills || [];
        const softSkills = response.data.suggested_soft_skills || [];
        const hardSkillsAR = response.data.suggested_hard_skills_ar || [];
        const softSkillsAR = response.data.suggested_soft_skills_ar || [];
        const jobTitles = response.data.top_relevant_job_titles || [];
        
        setSuggested({ hardSkills, softSkills, hardSkillsAR,softSkillsAR, jobTitles });

        if (
          hardSkills.length > 0 ||
          softSkills.length > 0 ||
          jobTitles.length > 0
        ) {
          setShowNoSuggested(true);
        } else {
          console.log("No suggested skills or job titles available.");
        }
      }
    } catch (error) {
      console.error("Error sending API:", error);
      setErrorMessage(
        "خطأ في إرسال البيانات، تأكد من الإجابة على جميع الأسئلة وإضافة بعض المهارات ثم حاول مجدداً"
      );
    } finally {
      setLoading(false);
    }
  };

  const sendApiYes = async () => {
    setLoading(true); 
    setErrorMessage("");
    const skills  = getskillsChosen();
    console.log("YES: slected skills to send:")
    console.log(skills)

    // const skillsData = { skills: skills.map(skill => ({ skill_name: skill })) };
    
    const skillsData = getskillsChosen();

    try{
     const response = await SendSkills(skillsData);
     console.log(response)
     setIsOptionalSteps(true);
    } catch (error) {
      console.error("Error sending API:", error);
      setErrorMessage(
        "خطأ في إرسال البيانات، تأكد من إضافة بعض المهارات ثم حاول مجدداً"
      );
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div
      className="flex overflow-hidden flex-col"
      style={{
        backgroundImage: `url(${patternbackground})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <MainContent />

      {/* api if slected value : no */}
      {errorMessage && (
        <div className="text-red-500 text-xl text-center bg-white">{errorMessage}</div>
      )}
      <div className="flex relative gap-2.5 items-center px-24 py-14 max-md:px-5">
        {/* bg-stone-300 */}
        <div className="flex gap-2.5 justify-center items-center self-stretch pr-4 pl-5 my-auto bg-black h-[75px] min-h-[75px] rotate-[-3.141592653589793rad] rounded-[50px] w-[75px]">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center">
                <div className="loader"></div>
              </div>
            </div>
          ) : (
            <img
              loading="lazy"
              src={arrow}
              alt=""
              className="object-contain self-stretch my-auto w-10 aspect-square"
              onClick={handleImageClick}
            />
          )}
        </div>
      </div>

      {isOptionalSteps && <OptionalSteps onSave={handleEditClick} />}

      {showNoSuggested && (
        <NoSuggested
          onSave={handleCloseNoSuggested}
          suggestedSkills={[...suggested.hardSkills, ...suggested.softSkills]} 
          suggestedSkillsAR = {[...suggested.hardSkillsAR, ...suggested.softSkillsAR]}
          jobTitles={suggested.jobTitles} 
        />
      )}

      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid;
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
    </div>
  );
};

export default StepNone;
