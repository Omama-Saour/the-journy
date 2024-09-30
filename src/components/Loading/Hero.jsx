import React from "react";
import vector2 from "../../assets/loading/Vector2.png";
import vector5 from "../../assets/loading/Vector5.png";
import vector4 from "../../assets/loading/Vector4.png";
import g1 from "../../assets/loading/Group 11.png";
import g2 from "../../assets/loading/Group 22.png";
import g3 from "../../assets/loading/Group 33.png";
import vector11 from "../../assets/loading/Vector11.png";
import vector22 from "../../assets/loading/Vector22.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate=useNavigate()
  return (
    <section className="flex relative flex-col px-24 pt-8 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex z-0 flex-col w-full font-semibold text-center text-neutral-800 max-md:max-w-full">
        <h1 className="text-2xl opacity-75 w-[1240px] h-[20px] text-black max-md:max-w-full text-center">
          هل أنت مستعد لتحقيق حلمك ؟
        </h1>
        {/* <h2 className="mt-2  text-[5rem] font-extrabold leading-[135px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
          خطوات{" "}
          <span className="relative inline-block">
            <img src={vector2} alt="" className="absolute top-[30px] left-0 w-auto h-200" />
            بسيطة
          </span>{" "}
          ستغير <br /> ...طريقة بحثك عن عمل
        </h2> */}

        {/* <h2 className="mt-2 text-[5rem] font-extrabold leading-[135px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
    خطوات{" "}
    <span className="relative inline-block">
        <img
            src={vector2}
            alt=""
            className="absolute top-[20px] left-0 w-[400px] h-auto" // Adjust size and positioning as necessary
        />
        بسيطة
    </span>{" "}
    ستغير <br /> ...طريقة بحثك عن عمل
</h2> */}

        <h2 className="mt-2 text-[5rem] font-extrabold leading-[135px]">
          خطوات{" "}
          <span className="relative inline-block">
            <img
              src={vector2}
              alt=""
              className="absolute top-[20px] left-0 w-[400px] h-auto" // Try a larger size
            />
            بسيطة
          </span>{" "}
          ستغير <br /> ...طريقة بحثك عن عمل
        </h2>

        <p className="mt-2 text-3xl opacity-75 max-md:max-w-full">
          رحلتي المهنية هي ما أوصلتني اليه اليوم وأنا ممتنة لذلك ثق بي
        </p>
      </div>
      <button
      onClick={()=> navigate('/register',{replace:false})}
      className="gap-2.5 self-center px-12 py-6 mt-6 max-w-full text-lg leading-none text-center text-white whitespace-nowrap bg-neutral-800 min-h-[60px] rounded-[32px] w-[200px] max-md:px-5">
        لنبدأ
      </button>
      <div className="flex z-0 flex-wrap gap-8 items-end self-center mt-6 max-md:max-w-full">
        <span className="relative inline-block">
          <img
            src={vector5}
            alt=""
            className="absolute top-[0px] left-[-20px]"
          />

          <img
            loading="lazy"
            src={g1}
            alt="Decorative 1"
            className="object-contain shrink-0 rounded-none aspect-[0.74] min-w-[240px] w-[251px]"
          />
        </span>

        <img
          loading="lazy"
          src={g2}
          alt="Decorative 2"
          className="object-contain rounded-none aspect-[1.72] min-w-[240px] w-[501px] max-md:max-w-full"
        />

        {/* 
        third */}
        <span className="relative inline-block">
          <img
            src={vector4}
            alt=""
            className="absolute top-[-50px] left-[-40px]"
          />

          <img
            loading="lazy"
            src={g3}
            alt="Decorative 3"
            className="object-contain shrink-0 rounded-none aspect-[0.74] min-w-[240px] w-[250px]"
          />
        </span>
      </div>
      <img
        loading="lazy"
        src={vector11}
        alt=""
        className="object-contain absolute z-0 aspect-square h-[90px] left-[113px] top-[116px] w-[90px]"
      />
      <img
        loading="lazy"
        src={vector22}
        alt=""
        className="object-contain absolute z-0 aspect-[0.99] h-[86px] right-[115px] top-[266px] w-[85px]"
      />
    </section>
  );
};

export default Hero;