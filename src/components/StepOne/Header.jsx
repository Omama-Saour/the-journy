import React, { useState } from "react";
import journyImage from "../../assets/journy.png";
import { LOGOUT } from "../../../src/modules/auth/service";
import LogOutConfirm from "../Modals/Auth/LogOutConfirm"; 

const Header = () => {
  const [showLogOutConfirm, setShowLogOutConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogoutClick = () => {
    setShowLogOutConfirm(true);
  };

  const handleConfirmLogout = async () => {
    setIsLoading(true);
    await LOGOUT(); 
    setIsLoading(false);
    setShowLogOutConfirm(false);
  };

  const handleCancelLogout = () => {
    setShowLogOutConfirm(false);
  };

  return (
    <>
      <header className="flex flex-wrap gap-10 justify-between items-center px-24 py-6 w-full text-lg font-medium leading-none text-right text-white min-h-[108px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-6 items-center self-stretch my-auto w-[200px]">
          <button
            onClick={handleLogoutClick}
            className="bg-black text-white"
            style={{
              padding: "24px, 50px, 24px, 50px",
              borderRadius: "32px",
              width: "200px",
              height: "56px",
            }}
          >
         تسجيل خروج
          </button>
        </div>
        <img
          loading="lazy"
          src={journyImage}
          alt="Company logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[2.85] w-[140px]"
        />
      </header>
      <LogOutConfirm 
        show={showLogOutConfirm} 
        onConfirm={handleConfirmLogout} 
        onCancel={handleCancelLogout} 
        isLoading={isLoading} 
      />
    </>
  );
};

export default Header;