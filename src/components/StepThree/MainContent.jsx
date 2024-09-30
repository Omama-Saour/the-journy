import React from "react";
import ProgressSteps from "./ProgressSteps";

import LinkedInProfileUpload from "./LinkedInProfileUpload/LinkedInProfileUpload";

// import LoadingComponent from "./LoadingComponent/LoadingComponent";

// import AnalysisSection from "./LinkedInAnalysis/AnalysisSection";
// import SkillAssessment from "./LinkedInAnalysis/SkillAssessment";

const MainContent = () => {
  return (
    <main className="flex z-10 flex-wrap gap-10 justify-center p-8 w-full min-h-[632px] max-md:px-5 max-md:max-w-full">
  
      <LinkedInProfileUpload />
      {/* <LoadingComponent /> */}
      {/* <AnalysisSection /> */}

      {/* <ProgressSteps /> */}

      <div className="flex flex-col">
      <ProgressSteps />
      {/* <SkillAssessment /> */}
      </div>
    </main>
  );
};

export default MainContent;
