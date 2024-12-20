import React, { useState, useEffect } from 'react';
import journyImage from "../../assets/journy.png";

const Header = ({ onOldUserClick, onNewUserClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize',   
 handleResize);
  }, []);
  return (
    <header className={`flex flex-wrap gap-6 justify-between ${isMobile ? 'px-4' : 'px-24'} py-6 w-full text-lg font-medium leading-none text-right max-md:max-w-full min-md:max-w-full`}>
      <div className="flex gap-6 items-center self-stretch my-auto max-md:max-w-full">
      {isMobile ? null : (
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
           )}
          <button
            onClick={onNewUserClick}
            className="bg-black text-white"
            style={{
              padding: isMobile ? '10px' : '24px, 50px, 24px, 50px',
              borderRadius: '32px',
              width: isMobile ? '140px' : '200px',
              height: isMobile ? '40px' : '56px',
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
