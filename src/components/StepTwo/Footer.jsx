import React from "react";

const Footer = () => {
  return (
    <footer className="flex overflow-hidden relative flex-col pt-56 w-full min-h-[100px] max-md:pt-24 max-md:max-w-full">
      <div className="flex relative gap-2.5 items-center px-24 py-14 max-md:px-5">
        <div className="flex gap-2.5 justify-center items-center self-stretch pr-4 pl-5 my-auto bg-stone-300 h-[75px] min-h-[75px] rotate-[-3.141592653589793rad] rounded-[50px] w-[75px]">
          <img
            loading="lazy"
            src=""
            alt=""
            className="object-contain self-stretch my-auto w-10 aspect-square"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
