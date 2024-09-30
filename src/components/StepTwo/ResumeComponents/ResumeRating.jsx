import React from "react";

const ResumeRating = ({ rating, label }) => (
  <div className="flex gap-4 items-center">
    <div className="self-stretch my-auto text-indigo-600">{rating}</div>
    <div className="self-stretch my-auto text-neutral-800">{label}</div>
  </div>
);

export default ResumeRating;
