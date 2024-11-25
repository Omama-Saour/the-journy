import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SuccessPassword from "../../../components/Modals/Auth/SuccessPassword";
import { RESET_PASSWORD } from "../service";
import eyeOpen from "../../../assets/auth/eye-open.png";
import eyeClose from "../../../assets/auth/eye-close.png";
import checktrue from "../../../assets/auth/checktrue.png";
import checkfalse from "../../../assets/auth/checkfalse.png";

function ReChangePasswordForm() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize',   
 handleResize);
  }, []);

  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [form, setForm] = useState({
    newPassword_confirmation: "",
    newPassword: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);
  const [eye, setEye] = useState(true);

  const [passwordShownConfirm, setPasswordShownConfirm] = useState(false);
  const [eyeConfirm, setEyeConfirm] = useState(true);

  const isFormValid = () => {
    return form.password && form.newPassword && form.newPassword_confirmation;
  };

  const handle_change = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [e.target.name]: e.target.value });

    // Validate password if it's the password field
    if (name === "password") {
      validatePassword(value);
    }
  };

  // Password validation states
  const [hasNumber, setHasNumber] = useState(false);
  const [hasMinLength, setHasMinLength] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
    setEye(!eye);
  };

  const togglePasswordVisibilityConfirm = () => {
    setPasswordShownConfirm(!passwordShownConfirm);
    setEyeConfirm(!eyeConfirm);
  };

  const validatePassword = (password) => {
    setHasNumber(/\d/.test(password));
    setHasMinLength(password.length >= 8);
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(password));
    setHasUpperCase(/[A-Z]/.test(password));
    setHasLowerCase(/[a-z]/.test(password));
  };

  const handle_submit = async (e) => {
    e.preventDefault();
    setErrorMessages({});
    setLoading(true); // Start loading

    // Check for password confirmation match
    if (form.newPassword !== form.newPassword_confirmation) {
      setErrorMessages((prev) => ({
        ...prev,
        newPassword_confirmation:
          "كلمة المرور الجديدة وتأكيد كلمة المرور لا تتطابق.",
      }));
      setLoading(false); // Stop loading
      return;
    }

    try {
      await RESET_PASSWORD(form);
      setShowSuccess(true);
      setErrorMessages({});
    } catch (err) {
      const serverError =
        err?.response?.data?.message ||
        "حدث خطأ أثناء إعادة تعيين كلمة المرور. يرجى المحاولة مرة أخرى.";
      setErrorMessages((prev) => ({
        ...prev,
        general: serverError,
      }));
      setShowSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center mb-5">
        {
          isMobile ? 
          <h2 className="text-4xl font-bold" style={{ lineHeight: '3rem' }}>إعادة تعيين كلمة المرور</h2> 
          :
          <h2 className="fw-bold">إعادة تعيين كلمة المرور</h2>
        }
       
        <h6 dir="rtl">
          لا داعي للقلق، سنرسل لك رسالة لمساعدتك في إعادة تعيين كلمة المرور
          الخاصة بك.
        </h6>
      </div>
      <Form className="text-end" onSubmit={handle_submit}>
        {/* Password Field */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="fw-bold">تكوين كلمة المرور</Form.Label>
          <div className="position-relative">
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

        {isMobile ? (
          <Col className="">
            <Col className="mb-2 d-flex align-items-center justify-content-end">
              <span className="mr-2">رقم واحد على الأقل</span>
              <img src={hasNumber ? checktrue : checkfalse} alt="" />
            </Col>
            <Col className="mb-2 d-flex align-items-center justify-content-end">
              <span className="mr-2">الحد الأدنى للطول هو 8 أحرف</span>
              <img src={hasMinLength ? checktrue : checkfalse} alt="" />
            </Col>
            <Col className="mb-2 d-flex align-items-center justify-content-end">
              <span className="mr-2">حرف خاص واحد على الأقل</span>
              <img src={hasSpecialChar ? checktrue : checkfalse} alt="" />
            </Col>
            <Col className="mb-2 d-flex align-items-center justify-content-end">
              <span className="mr-2">حرف واحد كبير على الأقل</span>
              <img src={hasUpperCase ? checktrue : checkfalse} alt="" />
            </Col>
            <Col className="mb-3 d-flex align-items-center justify-content-end">
              <span className="mr-2">حرف واحد صغير على الأقل</span>
              <img src={hasLowerCase ? checktrue : checkfalse} alt="" />
            </Col>
          </Col>
        ) : (
          <Row className="">
            <Col
              xs="6"
              className="mb-2 d-flex align-items-center justify-content-end"
            >
              <span className="mr-2">رقم واحد على الأقل</span>
              <img src={hasNumber ? checktrue : checkfalse} alt="" />
            </Col>
            <Col
              xs="6"
              className="mb-2 d-flex align-items-center justify-content-end"
            >
              <span className="mr-2">الحد الأدنى للطول هو 8 أحرف</span>
              <img src={hasMinLength ? checktrue : checkfalse} alt="" />
            </Col>
            <Col
              xs="6"
              className="mb-2 d-flex align-items-center justify-content-end"
            >
              <span className="mr-2">حرف خاص واحد على الأقل</span>
              <img src={hasSpecialChar ? checktrue : checkfalse} alt="" />
            </Col>
            <Col
              xs="6"
              className="mb-2 d-flex align-items-center justify-content-end"
            >
              <span className="mr-2">حرف واحد كبير على الأقل</span>
              <img src={hasUpperCase ? checktrue : checkfalse} alt="" />
            </Col>
            <Col xs="6"></Col>
            <Col
              xs="6"
              className="mb-3 d-flex align-items-center justify-content-end"
            >
              <span className="mr-2">حرف واحد صغير على الأقل</span>
              <img src={hasLowerCase ? checktrue : checkfalse} alt="" />
            </Col>
          </Row>
        )}

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label className="fw-bold">تأكيد كلمة المرور</Form.Label>
          <div className="position-relative">
            <img
              className="position-absolute"
              style={{
                cursor: "pointer",
                left: "10px",
                top: "35%",
                transform: "translateY(-50%)",
              }}
              onClick={togglePasswordVisibilityConfirm}
              src={eyeConfirm ? eyeClose : eyeOpen}
              alt=""
            />
            <input
              className="w-full p-2 rounded-5 mb-3 text-end border focus:outline-none focus:ring-2 focus:ring-black"
              type={passwordShownConfirm ? "text" : "password"}
              placeholder="تأكيد كلمة المرور"
              name="newPassword_confirmation"
              required
              onChange={handle_change}
            />
          </div>
          {errorMessages.newPassword_confirmation && (
            <p className="text-danger">
              {errorMessages.newPassword_confirmation}
            </p>
          )}
        </Form.Group>

        {/* General Error Message */}
        {errorMessages.general && (
          <p className="text-danger">{errorMessages.general}</p>
        )}

<div className="mt-5">
        
        <Form.Check reverse label="بالنقر هنا، فإنك توافق على شروط وأحكام الرحلة وسياسة الخصوصية" />
      </div>

        <Button
          style={{ backgroundColor: isFormValid() ? "black" : "#BDBFC4" }}
          className={`border-0 rounded-5 w-100 mt-3 p-2 fs-5`}
          type="submit"
          disabled={!isFormValid() || loading}
        >
          {loading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "إعادة تعيين كلمة المرور"
          )}
        </Button>

      </Form>
      <SuccessPassword show={showSuccess} />
    </>
  );
}

export default ReChangePasswordForm;
