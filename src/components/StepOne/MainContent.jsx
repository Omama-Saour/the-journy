import React from "react";
import JobSearch from "./JobSearch";
import ProgressSteps from "./ProgressSteps";

const MainContent = () => {
  return (
    <main className="flex z-10 flex-wrap gap-10 justify-center p-8 w-full min-h-[632px] max-md:px-5 max-md:max-w-full">
      <JobSearch />
      <ProgressSteps />
    </main>
  );
};

export default MainContent;
