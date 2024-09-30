import React from "react";
import ProgressSteps from "./ProgressSteps";
import CalendarComponent from "./CalendarComponent/CalendarComponent"

const MainContent = () => {
  return (
    <main className="flex z-10 flex-wrap gap-10 justify-center p-8 w-full min-h-[632px] max-md:px-5 max-md:max-w-full">

<CalendarComponent/>
      <ProgressSteps />
    </main>
  );
};

export default MainContent;
