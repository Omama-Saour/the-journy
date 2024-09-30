import React from "react";

const Button = ({ onClick, label }) => {
  return (
    <div className="flex z-0 gap-6 items-center self-center mt-10 mb-30 max-w-full text-lg font-medium leading-none text-right whitespace-nowrap w-[200px]">
      <button
        onClick={onClick}
        className="flex justify-center items-center gap-2.5 self-stretch px-12 py-3 my-auto bg-neutral-800 rounded-[32px] w-full max-md:px-5 text-white"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;