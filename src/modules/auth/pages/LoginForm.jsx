import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loadding from "../../../components/Modals/Auth/Loadding";
import SuccessLogin from "../../../components/Modals/Auth/SuccessLogin";
import { LOGIN } from "../service";
import eyeOpen from "../../../assets/auth/eye-open.png";
import eyeClose from "../../../assets/auth/eye-close.png";

function LoginForm() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [eye, setEye] = useState(true);

  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
    setEye(!eye);
  };

  const [error, setError] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const isFormValid = () => {
    return form.identifier && form.password;
  };

  const handle_change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log("errrrrrrr", error);

  const handleLogin = async (e) => {
    e.preventDefault();

    setShowLoading(true);
    setShowSuccess(false);
    setError("");

    try {
      await LOGIN(form);
      setShowSuccess(true);
    } catch (err) {
      console.error("Login error details:", err.response);

      const errorMessage =
        err?.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول";
      setError("يوجد خطأ بادخال البريد الالكتروني أو كلمة المرور");
      // برجاء ادخال كلمة مرور الصحيحة أو اختيار نسيان كلمة المرور
      console.log("error", errorMessage);
    } finally {
      setShowLoading(false);
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
          <input
            className="w-full p-2 rounded-5 mb-3 text-end border focus:outline-none focus:ring-2 focus:ring-black"
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
            {/* <Icon.Eye
              className="position-absolute"
              onClick={togglePasswordVisibility}
              style={{
                cursor: "pointer",
                left: "10px",
                top: "35%",
                transform: "translateY(-50%)",
              }}
            /> */}
            <img
              className="position-absolute"
              style={{
                cursor: "pointer",
                left: "10px",
                top: "35%",
                transform: "translateY(-50%)",
              }}
              onClick={togglePasswordVisibility}
              src={eye ? eyeClose : eyeOpen}
              alt=""
            />
            <input
              className="w-full p-2 rounded-5 mb-3 text-end border focus:outline-none focus:ring-2 focus:ring-black"
              type={passwordShown ? "text" : "password"}
              placeholder="ادخل كلمة المرور"
              name="password"
              required
              onChange={handle_change}
            />
          </div>
        </Form.Group>
        {error && <p dir="rtl" className="text-danger">{error}</p>}

        <div className="d-flex justify-content-between mt-5">
          <span onClick={() => navigate("/change-password")}>
            هل نسيت كلمة المرور؟
          </span>
          <Form.Check reverse label="تذكرني" />
        </div>

        <Button
          style={{ backgroundColor: isFormValid() ? "black" : "#BDBFC4" }}
          className={`border-0 rounded-5 w-100 mt-3 p-2 fs-5 `}
          type="submit"
          disabled={!isFormValid()}
        >
          تسجيل دخول
        </Button>

        <Loadding show={showLoading} />
      </Form>

     
      {!error && showSuccess && <SuccessLogin show={showSuccess} />}
    </>
  );
}

export default LoginForm;
