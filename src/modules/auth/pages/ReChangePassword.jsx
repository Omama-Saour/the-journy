import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from "react-bootstrap";
import Colimage from "../../../components/auth/Col_image";
import * as Icon from "react-bootstrap-icons";
import NavLogin from "../../../components/auth/NavLogin";
import { useNavigate, useLocation } from "react-router-dom";

function ReChangePassword() {
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
  const location = useLocation();
  const { email } = location.state || {};

  return (
    isMobile ? 
    <>
      <NavLogin />
      <div className="p-14 mt-2">
    
          <Col> 
            <p className="fw-bold mb-14 fs-5 text-right flex items-center justify-end">
              <span>الرجوع</span>
              <Icon.ArrowRight className="ms-3 mt-2 cursor-pointer" onClick={() => navigate(-1)} />
            </p>
            <div className="text-center mb-5">
              <h2 className="text-4xl font-bold mb-4" style={{ lineHeight: '3rem' }}>
                يرجى التحقق من صندوق الوارد الخاص بك لتأكيد عنوان بريدك الإلكتروني
              </h2>
              <div className="text-end mx-4"> 
                <h6 dir="rtl" className="mt-10">
                  {" "} تم طلب اعادة تعيين كلمة المرور ل
                   <span>{email}</span>
                </h6>
                
                <h6 className="mb-3">
                  اذا تم العثور على هذا البريد صالحا, فستتلقى قريبا بريدا
                  الكترونيا يحتوي على تعليمات اعادة تعيين كلمة المرور
                </h6>
                <h6>
                  إذا لم تقم بادخال عنوان البريد الإلكتروني الخاص بمنصة الرحلة,
                  فلن تتلقى بريداً لاعادة تعيين كلمة المرور
                </h6>
              </div>
            </div>
            <Button
              className="border-0 rounded-5 mt-3 p-2 fs-5 w-full" 
              style={{ backgroundColor: "black" }}
              onClick={() => navigate('/rechange-password2', { replace: true })}
            >
              اعادة تعيين كلمة المرور
            </Button>
          </Col>
     
      </div>
    </> : 
     <>
     <NavLogin />
     <div className="p-2 mt-2">
       <Row className="w-full">
         <Col xs={12} md={6} className="flex justify-center"> 
           <Colimage />
         </Col>
         <Col xs={12} md={6} className="flex flex-col"> 
           <p className="fw-bold mb-4 fs-5 p-4 text-right flex items-center justify-end">
             <span>الرجوع</span>
             <Icon.ArrowRight className="ms-3 mt-2 cursor-pointer" onClick={() => navigate(-1)} />
           </p>
           <div className="text-center mb-5">
             <h2 className="fw-bold mb-4">
               يرجى التحقق من صندوق الوارد الخاص بك لتأكيد عنوان بريدك الإلكتروني
             </h2>
             <div className="text-end mx-4"> 
               <h6 dir="rtl">
                 تم طلب اعادة تعيين كلمة المرور ل
                 <span>{email}</span>
               </h6>
               <h6 className="mb-3">
                 اذا تم العثور على هذا البريد صالحا, فستتلقى قريبا بريدا
                 الكترونيا يحتوي على تعليمات اعادة تعيين كلمة المرور
               </h6>
               <h6>
                 إذا لم تقم بادخال عنوان البريد الإلكتروني الخاص بمنصة الرحلة,
                 فلن تتلقى بريداً لاعادة تعيين كلمة المرور
               </h6>
             </div>
           </div>
           <Button
             className="border-0 rounded-5 mt-3 p-2 fs-5 w-full" 
             style={{ backgroundColor: "black" }}
             onClick={() => navigate('/rechange-password2', { replace: true })}
           >
             اعادة تعيين كلمة المرور
           </Button>
         </Col>
       </Row>
     </div>
   </>
  );
}

export default ReChangePassword;