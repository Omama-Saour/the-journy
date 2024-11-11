import React from "react";
import AaboutUs from "../../assets/loading/aboutus.png";
import vec from "../../assets/loading/Vector4.png";

const AboutUs = () => {
  const isMobile = window.innerWidth <= 768;
  return isMobile ? (
    <section className="flex-col gap-10 items-center pr-14 pl-14 w-full max-md:px-5 max-md:max-w-full">
    <div className="flex z-0 flex-col self-stretch my-auto rounded-2xl min-w-[240px] w-[625px] max-md:max-w-full">
        <img
          loading="lazy"
          src={AaboutUs}
          alt="Our story illustration"
          className="object-contain z-10 mt-6 w-full rounded-2xl aspect-[1.55] max-md:max-w-full"
        />
      </div>
      <div className="flex z-0 flex-col self-stretch my-auto text-right min-w-[240px] w-[600px] max-md:max-w-full">
        <div dir="rtl" className="flex mt-4 max-md:max-w-full">
        <img
            loading="lazy"
            src={vec}
            alt=""
            className="object-contain left-[80px] z-0 shrink-0 self-start aspect-[1.01] h-[80px] w-[80px]"
          />
          <div className="flex flex-col justify-center items-center ml-20 w-full uppercase whitespace-nowrap max-md:max-w-full">
        
            <h2 className="text-2xl font-semibold tracking-wide leading-none text-indigo-600 max-md:max-w-full">
              عنا
            </h2>
            <h3 className="text-4xl font-extrabold leading-none text-neutral-800 max-md:max-w-full">
              قصتنا
            </h3>
          </div>
         
        </div>

        <p
          dir="rtl"
          className="mt-8 text-[1.2rem] text-neutral-700 leading-[36px] max-md:max-w-full"
        >
          لم تبدأ القصة الآن لقد بدأت قبل ١٤ عاما. <br />
          خلال هذه السنوات تعلمت الكثير، وساهمت في رحلة ما يزيد عن ٣ الآف
          متقدم/ة، مؤمنة في قرارة بأن عملية التوظيف تغير حياة العديدين ولكن
          بالحقيقة، غيرت حياتي وأسلوب تفكيري ونظرتي لدقائق الأمور وتفاصيلها.{" "}
          <br />
          واليوم، أنا مؤمنة أن القصة ستستمر.
        </p>
      </div>
      
    </section>
  ) : (
    <section className="flex relative gap-10 items-center p-14 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex z-0 flex-col self-stretch my-auto text-right min-w-[240px] w-[600px] max-md:max-w-full">
        <div className="flex flex-col justify-center w-full uppercase whitespace-nowrap max-md:max-w-full">
          <h2 className="text-2xl font-semibold tracking-wide leading-none text-indigo-600 max-md:max-w-full">
            عنا
          </h2>
          <h3 className="text-4xl font-extrabold leading-none text-neutral-800 max-md:max-w-full">
            قصتنا
          </h3>
        </div>
        <p
          dir="rtl"
          className="mt-8 text-[1.4rem] text-neutral-700 max-md:max-w-full"
        >
          لم تبدأ القصة الآن لقد بدأت قبل ١٤ عاما. <br />
          خلال هذه السنوات تعلمت الكثير، وساهمت في رحلة ما يزيد عن ٣ الآف
          متقدم/ة، مؤمنة في قرارة بأن عملية التوظيف تغير حياة العديدين ولكن
          بالحقيقة، غيرت حياتي وأسلوب تفكيري ونظرتي لدقائق الأمور وتفاصيلها.{" "}
          <br />
          واليوم، أنا مؤمنة أن القصة ستستمر.
        </p>
      </div>
      <div className="flex z-0 flex-col self-stretch my-auto rounded-2xl min-w-[240px] w-[625px] max-md:max-w-full">
        <img
          loading="lazy"
          src={AaboutUs}
          alt="Our story illustration"
          className="object-contain z-10 w-full rounded-2xl aspect-[1.55] max-md:max-w-full"
        />
      </div>
      <img
        loading="lazy"
        src={vec}
        alt=""
        className="object-contain absolute top-0 left-28 z-0 shrink-0 self-start aspect-[1.01] h-[89px] w-[90px]"
      />
    </section>
  );
};

export default AboutUs;
