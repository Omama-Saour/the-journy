import React from "react";
import check from "../../../assets/StepThree/check-true.png";
// import checkF from "../../../assets/StepThree/check-false.png";

const AnalysisCard = ({ title, items }) => {
  return (
    <div className="flex flex-col justify-center px-6 py-4 mt-8 w-full rounded-xl border-2 border-violet-200 border-solid max-md:px-5 max-md:max-w-full">
      <h2 className="self-end font-bold text-lg">{title}</h2>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-wrap gap-8 items-start mt-4 w-full max-md:max-w-full"
        >
          <div className="flex-1 shrink basis-0 max-md:max-w-full">
            {/* Replace \n with <br /> for rendering line breaks */}
            <div
              dangerouslySetInnerHTML={{
                __html: item.content.replace(/\n/g, "<br />"),
              }}
            />
          </div>
          <img
            loading="lazy"
            src={check}
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-[150px]">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AnalysisCard;