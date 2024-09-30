import React from "react";

const ResumeSection = ({ icon, title }) => (
  <div className="flex gap-10 justify-between items-center mt-3 w-full whitespace-nowrap">
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
    />
    <div className="self-stretch my-auto">{title}</div>
  </div>
);

export default ResumeSection;
