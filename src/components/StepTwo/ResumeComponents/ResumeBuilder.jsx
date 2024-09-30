import React from "react";
import ResumeSection from "./ResumeSection";
import ResumeRating from "./ResumeRating";
import checkF from "../../../assets/StepThree/check-false.png";
import check from "../../../assets/StepThree/check-true.png";
import CircularProgress from "./CircularProgress";

const resumeSections = [
  {
    icon: checkF,
    title: "معلوماتك الشخصية",
  },
  {
    icon: checkF,
    title: "ملخص عنك",
  },
  {
    icon:check,
    title: "التعليم",
  },
  {
    icon: check,
    title: "الخبرة",
  },
  {
    icon: check,
    title: "المهارات",
  },
  {
    icon: check,
    title: "اللغات",
  },
  {
    icon: check,
    title: "الشهادات",
  },
  {
    icon: check,
    title: "المراجع",
  },
];

const ResumeBuilder = () => {
  return (
    <main className="flex flex-col mt-10 text-base max-w-[350px]">
      <section className="flex overflow-hidden gap-2.5 items-start p-8 w-full bg-white rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)]">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
          <div className="flex flex-col justify-center items-center self-center max-w-full font-semibold w-[113px]">
            <CircularProgress value={75}/>
            <div className="flex flex-col mt-2 w-full max-w-[113px]">
              <ResumeRating rating="مناسب" label=":تقييم" />
            </div>
          </div>
          <nav className="flex flex-col mt-4 w-full text-neutral-800">
            {resumeSections.map((section, index) => (
              <ResumeSection
                key={index}
                icon={section.icon}
                title={section.title}
              />
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
};

export default ResumeBuilder;
