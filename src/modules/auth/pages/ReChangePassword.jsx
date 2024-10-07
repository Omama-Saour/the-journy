import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Colimage from "../../../components/auth/Col_image";
import * as Icon from "react-bootstrap-icons";
import NavLogin from "../../../components/auth/NavLogin";
import { useNavigate } from "react-router-dom";

function ReChangePassword() {
  const navigate = useNavigate();

  return (
    <>
      <NavLogin />
      <div className="p-2 mt-2"> {/* Use Tailwind for margin-top */}
        <Row className="w-full"> {/* Ensure Row is full width */}
          <Col xs={12} md={6} className="flex justify-center"> {/* Responsive column */}
            <Colimage />
          </Col>
          <Col xs={12} md={6} className="flex flex-col"> {/* Responsive column */}
            <p className="fw-bold mb-4 fs-5 p-4 text-right flex items-center justify-end">
              <span>الرجوع</span>
              <Icon.ArrowRight className="ms-3 mt-2 cursor-pointer" onClick={() => navigate(-1)} />
            </p>
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-4">
                يرجى التحقق من صندوق الوارد الخاص بك لتأكيد عنوان بريدك الإلكتروني
              </h2>
              <div className="text-end mx-4"> {/* Use margin-x for horizontal spacing */}
                <h6>
                  <span>gggg@gmail.com</span> تم طلب اعادة تعيين كلمة المرور ل
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
              className="border-0 rounded-5 mt-3 p-2 fs-5 w-full" // Use Tailwind for width
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