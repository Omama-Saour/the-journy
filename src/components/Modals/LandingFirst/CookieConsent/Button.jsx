import React from "react";

const Button = ({ children, onClick, variant }) => {
 
  const baseClasses =
    "gap-1 self-stretch py-6 px-12 my-auto whitespace-nowrap min-h-[56px] rounded-[32px] w-[200px] max-md:px-5";
  const variantClasses =
    variant === "primary"
      ? "text-white bg-neutral-800"
      : "text-neutral-800 bg-white border-2 border-solid border-stone-300";

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
};

export default Button;
