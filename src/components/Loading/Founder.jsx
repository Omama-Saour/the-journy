import React from "react";
import founder from "../../assets/loading/founder.png";
import vec2 from "../../assets/loading/Vectorf.png";
import vec3 from "../../assets/loading/Vectorff.png";

const Founder = () => {
  const isMobile = window.innerWidth <= 768;
  return isMobile ? (
    //    <section className="flex flex-wrap gap-10 items-center p-14 w-full max-md:px-5 max-md:max-w-full">
    <section className="flex-col relative gap-10 items-center p-14 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex shrink self-stretch my-auto rounded-2xl min-w-[240px] w-[505px] max-md:max-w-full">
        <img
          loading="lazy"
          src={vec3}
          alt=""
          className="object-contain absolute z-20 shrink-0 left-0 top-[26px]"
        />

        <img
          loading="lazy"
          src={founder}
          alt="Expert advice illustration"
          className="object-contain z-10 p-2 w-full rounded-2xl max-md:max-w-full"
        />

<img
          loading="lazy"
          src={vec2}
          alt=""
          className="object-contain absolute z-20 shrink-0 right-2 top-[450px]"
        />
      </div>

      <div className="flex flex-col grow shrink justify-center self-stretch my-auto text-right min-w-[240px] w-[480px] max-md:max-w-full">
        <div className="flex flex-col mt-10 justify-center text-end w-full uppercase max-md:max-w-full">
          <h2 className="text-2xl font-semibold tracking-wide leading-none text-indigo-600 mt-4 max-md:max-w-full">
            <span className="">المبتكر</span>
          </h2>
          <h3 className="self-end text-4xl font-extrabold leading-none text-neutral-800 text-center">
            تعرف على المؤسس
          </h3>
        </div>
        <p
          dir="rtl"
          className="mt-6 text-[1.2rem] text-neutral-700 text-right leading-[36px] max-md:max-w-full"
        >
          اهلا وسهلا فيك
        </p>
        <p
          dir="rtl"
          className="text-[1.2rem] text-neutral-700 text-right max-md:max-w-full"
        >
          <span className="bg-[#DCF343] px-2 py-1 rounded-md">
            أنا فرح عويس ..
          </span>
        </p>
        <p
          dir="rtl"
          className="text-[1.2rem] text-neutral-700 text-right leading-[36px] max-md:max-w-full"
        >
          مبسوطة انك زرت موقع الرحلة وسعيدة بوجودك اليوم. <br />
          مع خبرة تمتد لما يزيد عن 14 سنة في سوق العمل قررت تصميم موقع سيساعدك
          أن تكون أقرب لوظيفة أحلامك. <br />
          خطوات بسيطة أسميتها بالرحلة - لتكون بمثابة رحلتك الآمنة والممتعة في
          ذات الوقت وتزيد من معرفتك وقدرتك على فهم متطلبات سوق العمل بشكل أكبر.
          اتمنى لكم رحلة خفيفة لطيفة ونتائجها كما تتمنوا كل التوفيق
        </p>
        <p
          dir="rtl"
          className="mt-2 text-[1.2rem] text-neutral-700 text-right max-md:max-w-full"
        >
          <span className="bg-[#DCF343] px-2 py-1 rounded-md">
            أريدك أن تثق بي.{" "}
          </span>
        </p>
      </div>
    </section>
  ) : (
    // <section className="flex-col relative gap-10 items-center p-14 w-full max-md:px-5 max-md:max-w-full">
   
     <section className="flex flex-wrap gap-10 items-center p-14 w-full max-md:px-5 max-md:max-w-full">
      {/* <div className="flex flex-col grow shrink items-start self-stretch my-auto rounded-2xl min-w-[240px] w-[505px] max-md:max-w-full">
        <img
          loading="lazy"
          src={founder}
          alt="Expert advice illustration"
          className="object-contain z-10 mr-0 w-full rounded-2xl aspect-[1.51] max-md:max-w-full"
        />
      </div> */}

<div className="flex-col relative flex shrink self-stretch my-auto rounded-2xl min-w-[240px] w-[505px] max-md:max-w-full">
        <img
          loading="lazy"
          src={vec3}
          alt=""
          className="object-contain absolute z-20 shrink-0 left-[-20px] top-[-20px]"
        />

        <img
          loading="lazy"
          src={founder}
          alt="Expert advice illustration"
          className="object-contain z-10 p-2 w-full rounded-2xl max-md:max-w-full"
        />

<img
          loading="lazy"
          src={vec2}
          alt=""
          className="object-contain absolute z-20 shrink-0 right-[-20px] top-[520px]"
        />
      </div>

      <div className="flex flex-col grow shrink justify-center self-stretch my-auto text-right min-w-[240px] w-[480px] max-md:max-w-full">
        <div className="flex flex-col justify-center text-end w-full uppercase max-md:max-w-full">
          <h2 className="text-2xl font-semibold tracking-wide leading-none text-indigo-600 mt-4 max-md:max-w-full">
            <span className="">المبتكر</span>
          </h2>
          <h3 className="self-end text-4xl font-extrabold leading-none text-neutral-800 text-center">
            تعرف على المؤسس
          </h3>
        </div>
        <p
          dir="rtl"
          className="mt-6 text-[1.2rem] text-neutral-700 text-right leading-[36px] max-md:max-w-full"
        >
          اهلا وسهلا فيك
        </p>
        <p
          dir="rtl"
          className="text-[1.2rem] text-neutral-700 text-right max-md:max-w-full"
        >
          <span className="bg-[#DCF343] px-2 py-1 rounded-md">
            أنا فرح عويس ..
          </span>
        </p>
        <p
          dir="rtl"
          className="text-[1.2rem] text-neutral-700 text-right leading-[36px] max-md:max-w-full"
        >
          مبسوطة انك زرت موقع الرحلة وسعيدة بوجودك اليوم. <br />
          مع خبرة تمتد لما يزيد عن 14 سنة في سوق العمل قررت تصميم موقع سيساعدك
          أن تكون أقرب لوظيفة أحلامك. <br />
          خطوات بسيطة أسميتها بالرحلة - لتكون بمثابة رحلتك الآمنة والممتعة في
          ذات الوقت وتزيد من معرفتك وقدرتك على فهم متطلبات سوق العمل بشكل أكبر.
          <br />
          اتمنى لكم رحلة خفيفة لطيفة ونتائجها كما تتمنوا
          <br />
          كل التوفيق
        </p>
        <p
          dir="rtl"
          className="mt-2 text-[1.2rem] text-neutral-700 text-right max-md:max-w-full"
        >
          <span className="bg-[#DCF343] px-2 py-1 rounded-md">
            أريدك أن تثق بي.{" "}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Founder;
