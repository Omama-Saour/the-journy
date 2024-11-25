import React, { useState, useEffect } from 'react';
import check from "../../../assets/auth/Done_24.png";
import { useNavigate } from "react-router-dom";

const SuccessPassword = ({ show }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize',   
 handleResize);
  }, []);
  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 m-4">
        <div
          dir="rtl"
          className="bg-white rounded-3xl shadow-lg pt-20 pb-20 mx-auto text-center max-md:min max-md:max-w-full"
        >
          <img loading="lazy" src={check} alt="" className="mx-auto mb-4 mt-6" />
          <h2 dir="rtl" className={`mt-8 ${isMobile ? '' : 'ml-40 mr-40'} text-3xl font-bold`}>
          لقد قمت بتعيين كلمة مرور جديد بنجاح!
          </h2>
          <button
            onClick={() => navigate('/login', { replace: true })}
            className={`border-0 rounded-5 mb-6 ${isMobile ? 'pl-10 pr-10 mt-8' : 'pl-10 pr-10 mt-2'} pb-3 pt-3 text-lg bg-black text-white`}
          >
            تسجيل دخول
          </button>
        </div>
      </div>
    </>
  );
};

export default SuccessPassword;