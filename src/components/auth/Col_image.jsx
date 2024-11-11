import React from "react";
import image2 from "../../assets/auth/Frame 14412.png";
import image1 from "../../assets/auth/Group 7.png";
import image3 from "../../assets/auth/Group 10.png";
import image4 from "../../assets/auth/Frame 14413.png";
import image5 from "../../assets/auth/Frame 1vv413.png";
import image6 from "../../assets/auth/Group 8.png";
import image7 from "../../assets/auth/Frame 14vvv414.png";
import image8 from "../../assets/auth/Group 9.png";
import image9 from "../../assets/auth/Frame 1bbbb4415.png";

function ColImage() {
  return (
    <div className="w-full max-w-[624px] mx-auto">
      <div className="grid grid-cols-3">
        <img src={image1} alt="" className="p-1 w-full h-auto" />
        <img src={image2} alt="" className="p-1 w-full h-auto" />
        <img src={image3} alt="" className="p-1 w-full h-auto" />
      </div>

      <div className="grid grid-cols-3">
        {/* First Column */}
        <div>
          <img src={image5} alt="" className="p-1 w-full h-auto" />
          <img src={image6} alt="" className="p-1 w-full h-auto" />
        </div>

        {/* Second Column */}
        <div className="col-span-2 grid grid-rows-3">
          <img src={image4} alt="" className="p-1 w-full h-auto col-span-2" />
          <div className="grid grid-cols-2 row-span-2">
            <img src={image7} alt="" className="p-1 w-full h-auto" />
            <div className="grid grid-rows-2">
              <img src={image9} alt="" className="p-1 w-full h-auto" />
              <img src={image8} alt="" className="p-1 w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColImage;