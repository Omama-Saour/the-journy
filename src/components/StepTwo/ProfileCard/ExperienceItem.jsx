import React from "react";

const ExperienceItem = ({
  title,
  company,
  period,
  responsibilities,
}) => {
  return (
    <div className="flex flex-col justify-center w-full text-base text-neutral-800 max-md:max-w-full">
      <div className="flex gap-2 items-center self-end">
        <div className="flex flex-col justify-center self-stretch my-auto w-[234px]">
          <div className="text-right">{title}</div>
          <div className="flex items-end mt-2 w-full">
            <div className="self-stretch my-auto text-stone-500">{period}</div>
            <div className="self-stretch my-auto ml-8">{company}</div>
          </div>
        </div>
        <div className="flex shrink-0 self-stretch my-auto h-14 bg-violet-200 rounded-lg w-[5px]" />
      </div>
      <div className="mt-4 text-right max-md:max-w-full">
        :المسئوليات{" "}
        <ol>
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="mt-2">
              {/* <span className="text-stone-500">{index + 1} . </span> */}
              <span className="text-stone-500 ml-4">{responsibility}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ExperienceItem;
