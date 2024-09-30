import React from "react";
import Line from "../../../src/assets/loading/Line 6.png"

const ThankYouCard = () => {
  return (
    <div className="flex flex-col justify-center self-stretch my-auto text-right text-white min-w-[240px] w-[400px]">
      <div className="flex overflow-hidden flex-col justify-center px-8 py-36 w-full bg-indigo-600 min-h-[606px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] max-md:px-5 max-md:py-24">
        <h2 className="text-8xl font-bold leading-[90px] max-md:text-4xl max-md:leading-10">
          شكرا <br /> .لك
        </h2>
        <img
          loading="lazy"
          src={Line}
          className="object-contain mt-10 w-full aspect-[166.67]"
          alt=""
        />
        <p className="mt-10 text-[1.4rem] leading-none">
          !سوف نتواصل معك في أقرب فرصة 
        </p>
      </div>
    </div>
  );
};

export default ThankYouCard;
