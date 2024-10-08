import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import ProgressSteps from "./ProgressSteps";
import ResumeBuilder from "./ResumeComponents/ResumeBuilder";

const MainContent = () => {
  return (
    <main className="flex z-10 flex-wrap gap-10 justify-center p-8 w-full min-h-[632px] max-md:px-5 max-md:max-w-full">
     <ProfileCard/>
    <div className="flex flex-col">
        <ProgressSteps />
        <ResumeBuilder />
      </div>
    </main>
  );
};

export default MainContent;
