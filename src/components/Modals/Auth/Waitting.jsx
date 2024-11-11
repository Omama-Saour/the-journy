import React from "react";
import rocket from "../../../assets/auth/Group.png";

const Waitting = ({ show }) => {
  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 m-4">
        <div
          dir="rtl"
          className="bg-white rounded-3xl shadow-lg p-20 mx-auto text-center max-md:px-5 max-md:max-w-full"
        >
          <img loading="lazy" src={rocket} alt="" className="mx-auto mb-5" />
          <h2 className="mt-5 mb-5 text-3xl font-bold">انتظر للحظات</h2>
          <p className="text-2xl mb-2">
            قد يحتاج الأمر بعض الوقت لإنشاء حسابك.
          </p>
          <p className="text-lg mb-2">
            وفي الوقت نفسه، يرجى التحقق من حسابك من خلال النقر على الرابط الذي
            أرسلناه
          </p>
          <p className="text-lg">إلى عنوان بريدك الإلكتروني.</p>
        </div>
      </div>
    </>
  );
};

export default Waitting;
