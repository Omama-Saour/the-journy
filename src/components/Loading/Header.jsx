import React from "react";
import journyImage from "../../assets/journy.png";

const Header = ({ onOldUserClick, onNewUserClick }) => {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center px-24 py-6 w-full text-lg font-medium leading-none text-right max-md:px-5 max-md:max-w-full">
      <div className="flex gap-6 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
        {/* <button
          onClick={onOldUserClick}
          className="gap-1 self-stretch px-12 py-6 my-auto border-2 border-solid border-stone-300 min-h-[56px] rounded-[32px] text-neutral-800 w-[200px] max-md:px-5"
        >
          مستخدم قديم
        </button>
        <button
          onClick={onNewUserClick}
          className="gap-2.5 self-stretch py-6 pr-12 pl-12 my-auto text-white bg-neutral-800 min-h-[56px] rounded-[32px] w-[200px] max-md:px-5"
        >
          مستخدم جديد
        </button> */}
        <button
            onClick={onOldUserClick}
             className="bg-white text-black border-2 border-solid border-stone-300"
            style={{
              padding: "24px, 50px, 24px, 50px",
              borderRadius: "32px",
              width: "200px",
              height: "56px",
            }}
          >
             مستخدم قديم 
          </button>
          <button
            onClick={onNewUserClick}
            className=" bg-black text-white"
            style={{
              padding: "24px, 50px, 24px, 50px",
              borderRadius: "32px",
              width: "200px",
              height: "56px",
            }}
          >
             مستخدم جديد 
          </button>
      </div>
      <img
        loading="lazy"
        src={journyImage} 
        alt="Company logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[2.85] w-[140px]"
      />
    </header>
  );
};

export default Header;
