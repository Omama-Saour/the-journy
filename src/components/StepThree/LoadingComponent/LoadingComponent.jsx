import React from "react";
import ww from "../../../assets/StepThree/step3l.png"

const LoadingComponent = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-8 py-32 text-2xl font-bold leading-none bg-white min-w-[240px] max-w-[796px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] text-neutral-800  w-[796px] max-md:px-5 max-md:max-w-full">
   <div className="flex flex-col items-center w-full max-md:max-w-full">
        <img
          loading="lazy"
          src={ww}
          alt=""
          className="object-contain max-w-full aspect-square w-[250px]"
        />
        <p>انتظر حتي يقوم تفحص الملف</p>
      </div>
    </section>
  );
};

export default LoadingComponent;
