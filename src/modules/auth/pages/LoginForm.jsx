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
      setError("يوجد خطأ بادخال اسم المستخدم أو كلمة المرور");
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
            <Icon.Eye
              className="position-absolute"
              onClick={togglePasswordVisibility}
              style={{
                cursor: "pointer",
                left: "10px",
                top: "35%",
                transform: "translateY(-50%)",
              }}
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

      {error && <p className="text-danger mt-3">{error}</p>}

      {!error && showSuccess && <SuccessLogin show={showSuccess} />}
    </>
  );
}

export default LoginForm;
