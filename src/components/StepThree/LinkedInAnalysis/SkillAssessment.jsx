import React from "react";
import check from "../../../assets/StepThree/check-true.png";
import checkF from "../../../assets/StepThree/check-false.png";
import CircularProgress from "../../StepTwo/ResumeComponents/CircularProgress";

const SkillAssessment = ({analysisData}) => {

 // Extract the score or section value
 const overallScore = analysisData["Overall Score"];
  return (
    <div className="flex flex-col mt-8 w-full max-w-[350px]">
      <div className="flex overflow-hidden gap-2.5 items-start p-8 w-full bg-white rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] max-md:px-5">
        <div className="flex flex-col flex-1 shrink justify-center w-full basis-0 min-w-[240px]">
          <div className="flex flex-col justify-center items-center self-center max-w-full text-base font-semibold w-[113px]">
          <CircularProgress value={overallScore||0}/>
            <div className="flex flex-col mt-3 w-full max-w-[113px]">
              <div className="flex gap-4 items-center">
                <div className="self-stretch my-auto text-indigo-600">
                  مناسب
                </div>
                <div dir="rtl" className="self-stretch my-auto text-neutral-800">
                  تقييم:{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center mt-7 w-full">
            <div className="flex gap-1 justify-center items-center self-stretch my-auto text-lg whitespace-nowrap text-neutral-800">
              <img
                loading="lazy"
                src={checkF}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <div className="self-stretch my-auto">15</div>
            </div>
            <div className="flex flex-col flex-1 shrink justify-center self-stretch py-1 my-auto basis-0">
              <div className="flex flex-col items-start px-8 bg-white rounded-[3000px] max-md:pl-5">
                <div className="flex shrink-0 h-2 bg-indigo-600 rounded-[3000px] w-[119px]" />
              </div>
            </div>
            <div className="flex gap-1 justify-center items-center self-stretch my-auto text-lg whitespace-nowrap text-neutral-800">
              <img
                loading="lazy"
                src={check}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <div className="self-stretch my-auto">25</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAssessment;
