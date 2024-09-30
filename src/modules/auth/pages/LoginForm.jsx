import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import Loadding from "../../../components/Modals/Auth/Loadding";
import SuccessLogin from "../../../components/Modals/Auth/SuccessLogin";
import { LOGIN } from "../service";

function LoginForm() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const [error, setError] = useState(""); // حالة الخطأ
  const [showLoading, setShowLoading] = useState(false); // حالة التحميل
  const [showSuccess, setShowSuccess] = useState(false); // حالة النجاح
  const isFormValid = () => {
    return form.identifier && form.password;
  };

  const handle_change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log("errrrrrrr", error);

  const handleLogin = async (e) => {
    e.preventDefault();

    setShowLoading(true); // بدء واجهة التحميل
    setShowSuccess(false); // إعادة تعيين حالة النجاح
    setError(""); // إعادة تعيين الأخطاء السابقة

    try {
      await LOGIN(form); // استدعاء دالة تسجيل الدخول
      setShowSuccess(true); // إذا نجحت العملية
    } catch (err) {
      console.error("Login error details:", err.response); // طباعة معلومات الخطأ كاملة

      // في حال كان هناك رسائل خطأ مخصصة
      const errorMessage =
        err?.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول";
      setError("يوجد خطأ بادخال اسم المستخدم أو كلمة المرور"); // تعيين رسالة الخطأ
      console.log("errrrrrrr", errorMessage); // طباعة رسالة الخطأ بعد تعيينها
    } finally {
      setShowLoading(false); // إيقاف واجهة التحميل
    }
  };

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="fw-bold">مرحبا بعودتك</h2>
        <h6>الرجاء تسجيل الدخول للمتابعة</h6>
      </div>
      <Form className="text-end" onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="fw-bold">البريد الإلكتروني</Form.Label>
          <Form.Control
            className="rounded-5 mb-2 text-end p-2"
            type="email"
            placeholder="ادخل البريد الإلكتروني"
            name="identifier"
            required
            onChange={handle_change}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="fw-bold">كلمة المرور</Form.Label>
          <div className="position-relative">
            <Icon.Eye
              className="position-absolute"
              onClick={togglePasswordVisibility}
              style={{
                cursor: "pointer",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <Form.Control
              className="rounded-5 mb-2 text-end p-2 ps-5"
              type={passwordShown ? "text" : "password"}
              placeholder="ادخل كلمة المرور"
              name="password"
              required
              onChange={handle_change}
            />
          </div>
        </Form.Group>

        <div className="d-flex justify-content-between mt-5">
          <span onClick={() => navigate("/change-password")}>
            هل نسيت كلمة المرور؟
          </span>
          <Form.Check reverse label="تذكرني" />
        </div>
        <Button
          style={{   backgroundColor: isFormValid() ? "black" : "#BDBFC4" }}
          className={`border-0 rounded-5 w-100 mt-3 p-2 fs-5 `}
          type="submit"
          disabled={!isFormValid()} // الزر معطل إذا كانت الحقول غير صالحة
        >
          تسجيل دخول
        </Button>

        {/* عرض واجهة التحميل */}
        <Loadding show={showLoading} />
      </Form>

      {/* عرض رسالة الخطأ إذا وجدت */}
      {error && <p className="text-danger mt-3">{error}</p>}

      {/* عرض واجهة النجاح إذا لم يوجد خطأ وتم تسجيل الدخول بنجاح */}
      {!error && showSuccess && <SuccessLogin show={showSuccess} />}
    </>
  );
}

export default LoginForm;
