import React, { useState } from "react";
import ProgressSteps from "./ProgressSteps";
import InterviewPrepComponent from "./InterviewPrep/InterviewPrepComponent";
import TranslationToggle from "./Listening/TranslationToggle";
import RecordingComponent from "./Recording/RecordingComponent";
import { Get_questionsNumber } from "../../modules/steps/stepfour/service";
import AudioPrompt from "../../components/Modals/StepFour/AudioPrompt/AudioPrompt";

const MainContent = () => {
  const [showAudioPrompt, setShowAudioPrompt] = useState(false);
  const [showInterviewPrepComponent, setShowInterviewPrepComponent] = useState(true);
  const [showRecordingComponent, setShowRecordingComponent] = useState(false);

  // Get tomorrow's date
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const formattedDate = `${String(tomorrow.getDate()).padStart(2, '0')}/${String(tomorrow.getMonth() + 1).padStart(2, '0')}/${tomorrow.getFullYear()}`;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [questionList, setQuestionList] = useState([]);

  const Getques = async () => {
    setShowAudioPrompt(false);
    setShowInterviewPrepComponent(false);
    setShowRecordingComponent(true);
    setLoading(true); 
    setError(null); // Reset error state

    try {
      const response = await Get_questionsNumber();
      console.log(response);
      setQuestionList(response.data); 
    } catch (err) {
      console.error("Failed:", err);
      setError("حدث خطأ في تحميل الأسئلة، أعد المحاولة"); 
    } finally {
      setLoading(false); 
    }
  };

  const Showing = () => {
    setShowAudioPrompt(true);
  };

  return (
    <main className="flex z-10 flex-wrap gap-10 justify-center p-8 w-full min-h-[632px] max-md:px-5 max-md:max-w-full">
      {showInterviewPrepComponent && (
        <InterviewPrepComponent interviewDate={formattedDate} onClick={Showing} />
      )}

      {loading && <TranslationToggle />}
      {error && 
          <section dir="rtl" className="flex overflow-hidden flex-col items-center p-8 bg-white max-w-[796px] max-h-[350px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] w-full max-md:max-w-full">
      <p className="text-red-500">{error}</p>
   </section>
      }

      {showRecordingComponent && !loading && !error && (
        <RecordingComponent questions={questionList} />
      )}

      <ProgressSteps />

      {showAudioPrompt && <AudioPrompt onStart={Getques} />}
    </main>
  );
};

export default MainContent;