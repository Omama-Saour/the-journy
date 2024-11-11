import React from "react";
import check from "../../../assets/auth/Done_24.png";
import { useNavigate } from "react-router-dom";

const Success = ({ show }) => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 m-4">
        <div
          dir="rtl"
          className="bg-white rounded-3xl shadow-lg p-20 mx-auto text-center max-md:min max-md:max-w-full"
        >
          <img loading="lazy" src={check} alt="" className="mx-auto mb-4" />
          <h2 className={`mt-4 mb-4 ${isMobile ? '' : 'ml-40 mr-40'} text-3xl font-bold`}>
            لقد قمت بانشاء حسابك بنجاح
          </h2>
          <p className="text-2xl mb-2">لنبدأ رحلتنا</p>
          <button
            onClick={() => navigate('/login', { replace: true })}
            className={`border-0 rounded-5 mt-4 ${isMobile ? 'pl-5 pr-5' : 'pl-10 pr-10'} pb-3 pt-3 text-lg bg-black text-white`}
          >
            الذهاب لتسجيل الدخول
          </button>
        </div>
      </div>
    </>
  );
};

export default Success;