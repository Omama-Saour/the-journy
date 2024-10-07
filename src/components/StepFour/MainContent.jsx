import React, { useState, useEffect } from "react";
import ProgressSteps from "./ProgressSteps";
import InterviewPrepComponent from "./InterviewPrep/InterviewPrepComponent";
// import TranslationToggle from "./Listening/TranslationToggle";
import RecordingComponent from "./Recording/RecordingComponent";
import {
  Get_questionsNumber,
  Get_questionDetails,
} from "../../modules/steps/stepfour/service";

import AudioPrompt from "../../components/Modals/StepFour/AudioPrompt/AudioPrompt";

const MainContent = () => {
  const [showAudioPrompt, setshowAudioPrompt] = useState(false);
  const [showInterviewPrepComponent, setshowInterviewPrepComponent] = useState(true);
  const [showRecordingComponent, setshowRecordingComponent] = useState(false);
  const [questionDetails, setQuestionDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [questionList, setQuestionList] = useState([]);

  const Getques = async () => {
    try {
      const response = await Get_questionsNumber();
      console.log(response);
      console.log("تم!");

      const getQdetail = await Get_questionDetails(response.data[0].id);
      console.log(getQdetail)

    } catch (err) {
      console.error("Failed:", err);
    } finally {
      setshowAudioPrompt(false);
    }
  };

  const Showing = () => {
setshowInterviewPrepComponent(false);
setshowRecordingComponent(true);
setshowAudioPrompt(true);
  }
 
  return (
    <main className="flex z-10 flex-wrap gap-10 justify-center p-8 w-full min-h-[632px] max-md:px-5 max-md:max-w-full">
      {/* change moveing betwwen component */}

     { showInterviewPrepComponent &&
  <InterviewPrepComponent
  interviewDate="12/3/2024"
  onClick={Showing}
  />}

      {/* <TranslationToggle /> */}
     { showRecordingComponent && 
      <RecordingComponent />}
      <ProgressSteps />

      {/* call  Getques if the button clicked */}
      {showAudioPrompt && <AudioPrompt onStart={Getques} />}
    </main>
  );
};

export default MainContent;
