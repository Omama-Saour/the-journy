import React from "react";
import Image1 from "../../../assets/payment/img1.png";
import Image2 from "../../../assets/payment/img2.png";
import vec from "../../../assets/payment/Vector1.png";
import vec2 from "../../../assets/payment/Vector.png";
import vec3 from "../../../assets/payment/Vector3.png";
import vec4 from "../../../assets/payment/Vector4.png";
const BackgroundImages = () => {
  return (
    <>
       <img
        loading="lazy"
        src={Image2} 
        alt=""
        className="object-contain absolute z-0 max-w-full aspect-[1.02] h-[300px] left-[23px] top-[127px] w-[319px]"
      />
      <img
        loading="lazy"
        src={Image1} 
        alt=""
        className="object-contain absolute bottom-96 z-0 max-w-full aspect-[0.93] h-[300px] left-[304px] w-[296px]"
      />
      <img
        loading="lazy"
        src={vec} 
        alt=""
        className="object-contain absolute z-0 max-w-full aspect-[1.19] h-[113px] left-[230px] top-[120px] w-[134px]"
      />
      <img
        loading="lazy"
        src={vec2} 
        alt=""
        className="object-contain absolute z-0 max-w-full h-18 aspect-[1.19] bottom-[470px] left-[275px] w-[120px]"
      />
      <img
        loading="lazy"
        src={vec3} 
        alt=""
        className="object-contain absolute z-0 max-w-full aspect-[1.19] h-[113px] left-[400px] top-[200px] w-[134px]"
      />
      <img
        loading="lazy"
        src={vec4} 
        alt=""
        className="object-contain absolute z-0 max-w-full h-11 aspect-[2.72] bottom-[470px] left-[118px] w-[120px]"
      />
    </>
  );
};

export default BackgroundImages;
