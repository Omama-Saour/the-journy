import React from "react";
import Header from "../../../components/StepOne/Header";
import MainContent from "../../../components/StepFour/MainContent";
import patternbackground from "../../../assets/loading/patternbackground.png";
import arrow from "../../../assets/StepOne/arrow-left-line.png";
// import AudioPrompt from "../../../components/Modals/StepFour/AudioPrompt/AudioPrompt";
// import UnsupportedBrowser from "../../../components/Modals/StepFour/UnsupportedBrowser/UnsupportedBrowser"
// import SuccessfulInterview from "../../../components/Modals/StepFour/SuccessfulInterviewComponents/SuccessfulInterview"

const StepNFour = () => {
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

      <div className="flex relative gap-2.5 items-center px-24 py-14 max-md:px-5">
        <div className="flex gap-2.5 justify-center items-center self-stretch pr-4 pl-5 my-auto bg-stone-300 h-[75px] min-h-[75px] rotate-[-3.141592653589793rad] rounded-[50px] w-[75px]">
          <img
            loading="lazy"
            src={arrow}
            alt=""
            className="object-contain self-stretch my-auto w-10 aspect-square"
          />
        </div>
      </div>

      {/* edit state for widows */}
      {/* <AudioPrompt /> */}
      {/* <UnsupportedBrowser/> */}
      {/* <SuccessfulInterview/> */}

    </div>
  );
};

export default StepNFour;