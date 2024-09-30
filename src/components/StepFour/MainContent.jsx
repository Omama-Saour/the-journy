import React from "react";
import ProgressSteps from "./ProgressSteps";
// import InterviewPrepComponent from "./InterviewPrep/InterviewPrepComponent";
// import TranslationToggle from "./Listening/TranslationToggle";
import RecordingComponent from "./Recording/RecordingComponent"

const MainContent = () => {
  return (
    <main className="flex z-10 flex-wrap gap-10 justify-center p-8 w-full min-h-[632px] max-md:px-5 max-md:max-w-full">
  
  {/* change moveing betwwen component */}
  
{/* 
  <InterviewPrepComponent
  interviewDate="12/3/2024"
  /> */}

{/* <TranslationToggle/> */}

<RecordingComponent/>
      <ProgressSteps />
    </main>
  );
};

export default MainContent;
