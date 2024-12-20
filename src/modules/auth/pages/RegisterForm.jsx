import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Waitting from "../../../components/Modals/Auth/Waitting";
import Loadding from "../../../components/Modals/Auth/Loadding";
import Success from "../../../components/Modals/Auth/Success";
import { REGISTER } from "../service";
import eyeOpen from "../../../assets/auth/eye-open.png";
import eyeClose from "../../../assets/auth/eye-close.png";
import checktrue from "../../../assets/auth/checktrue.png";
import checkfalse from "../../../assets/auth/checkfalse.png";

function RegisterForm() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize',   
 handleResize);
  }, []);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });
  const [showWaitting, setShowWaitting] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
  const [eye, setEye] = useState(true);

  const [passwordShownConfirm, setPasswordShownConfirm] = useState(false);
  const [eyeConfirm, setEyeConfirm] = useState(true);

  // Password validation states
  const [hasNumber, setHasNumber] = useState(false);
  const [hasMinLength, setHasMinLength] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);

  // Checkbox state
  const [termsAccepted, setTermsAccepted] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
    setEye(!eye);
  };

  const togglePasswordVisibilityConfirm = () => {
    setPasswordShownConfirm(!passwordShownConfirm);
    setEyeConfirm(!eyeConfirm);
  };

  const handle_checkbox_change = () => {
    setTermsAccepted(!termsAccepted);
  };

  const isFormValid = () => {
    return (
      form.first_name &&
      form.last_name &&
      form.email &&
      form.phone &&
      form.password &&
      hasNumber &&
      hasMinLength &&
      hasSpecialChar &&
      hasUpperCase &&
      hasLowerCase &&
      termsAccepted
    );
  };

  const validatePassword = (password) => {
    setHasNumber(/\d/.test(password));
    setHasMinLength(password.length >= 8);
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(password));
    setHasUpperCase(/[A-Z]/.test(password));
    setHasLowerCase(/[a-z]/.test(password));
  };

  const handle_change = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Validate password if it's the password field
    if (name === "password") {
      validatePassword(value);
    }
  };

  // const handle_change = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  const handle_submit = async (e) => {
    e.preventDefault();

    setShowWaitting(true);
    setErrorMessages({});

    try {
      setTimeout(async () => {
        setShowWaitting(false);
        setShowLoading(true);

        const formData = {
          ...form,
          password_confirmation: form.password, // Use the same password
      };


        try {
          await REGISTER(formData);
          setShowLoading(false);
          setShowSuccess(true);
        } catch (error) {
          const errorResponse = error?.response?.data?.errors || {};
          const newErrorMessages = {};
          if (errorResponse.email) {
            newErrorMessages.email = errorResponse.email[0];
          }
          if (errorResponse.phone) {
            newErrorMessages.phone = errorResponse.phone[0]; // الخطأ الخاص برقم الهاتف
          }
          // if (errorResponse.password_confirmation) {
          //   newErrorMessages.password_confirmation =
          //     errorResponse.password_confirmation[0]; // الخطأ الخاص بتأكيد كلمة المرور
          // }
          if (Object.keys(newErrorMessages).length === 0) {
            newErrorMessages.general = "حدث خطأ أثناء إنشاء الحساب";
          }

          setErrorMessages(newErrorMessages); // تعيين الأخطاء في الحالة
          setShowLoading(false);
        }
      }, 5000);
    } catch (error) {
      setShowWaitting(false); // إيقاف واجهة الانتظار
      setErrorMessages({ general: "حدث خطأ غير متوقع" });
    }
  };

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="fw-bold">إنشاء حساب</h2>
        <h6>أنت على بعد دقيقتين لبدأ رحلتك</h6>
      </div>
      <Form
        className={`${isMobile ? "pl-14 pr-14" : ""} text-end`}
        onSubmit={handle_submit}
      >
        {" "}
        {/* p-14 for mobile */}
        <div className="d-flex justify-content-between">
          <Form.Group controlId="formBasicFirstName" style={{ width: "320px" }}>
            <Form.Label className="fw-bold">الأسم الأخير</Form.Label>

            <input
              className="w-full p-2 rounded-5 mb-3 mr-2 text-end border focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              placeholder="أدخل الاسم الاخير"
              name="last_name"
              value={form.last_name}
              onChange={handle_change}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicLastName" style={{ width: "320px" }}>
            <Form.Label className="fw-bold">الأسم الأول</Form.Label>

            <input
              className="w-full p-2 rounded-5 mb-3 ml-2 text-end border focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              placeholder="ادخل الاسم الأول"
              name="first_name"
              value={form.first_name}
              onChange={handle_change}
              required
            />
          </Form.Group>
        </div>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="fw-bold">البريد الإلكتروني</Form.Label>
          <input
            className="w-full p-2 rounded-5 text-end border focus:outline-none focus:ring-2 focus:ring-black"
            type="email"
            placeholder="ادخل البريد الإلكتروني"
            name="email"
            value={form.email}
            onChange={handle_change}
            required
          />
          {/* عرض رسالة الخطأ الخاصة بالبريد الإلكتروني */}
          {errorMessages.email && (
            <p className="text-danger">{errorMessages.email}</p>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicMobile">
          <Form.Label className="fw-bold mt-3">رقم الجوال</Form.Label>

          <input
            className="w-full p-2 rounded-5 text-end border focus:outline-none focus:ring-2 focus:ring-black"
            type="tel"
            placeholder="ادخل رقم الجوال"
            name="phone"
            value={form.phone}
            onChange={handle_change}
            required
          />
          {/* عرض رسالة الخطأ الخاصة برقم الجوال */}
          {errorMessages.phone && (
            <p className="text-danger">{errorMessages.phone}</p>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="fw-bold mt-3">تكوين كلمة المرور</Form.Label>
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
              value={form.password}
              onChange={handle_change}
              required
            />
          </div>
        </Form.Group>

        {
          isMobile ? 
          <Col className="">
          <Col
           
            className="mb-2 d-flex align-items-center justify-content-end"
          >
            <span className="mr-2">رقم واحد على الأقل</span>
            <img src={hasNumber ? checktrue : checkfalse} alt="" />
          </Col>
          <Col
          
            className="mb-2 d-flex align-items-center justify-content-end"
          >
            <span className="mr-2">الحد الأدنى للطول هو 8 أحرف</span>
            <img src={hasMinLength ? checktrue : checkfalse} alt="" />
          </Col>
          <Col
            className="mb-2 d-flex align-items-center justify-content-end"
          >
            <span className="mr-2">حرف خاص واحد على الأقل</span>
            <img src={hasSpecialChar ? checktrue : checkfalse} alt="" />
          </Col>
          <Col
            className="mb-2 d-flex align-items-center justify-content-end"
          >
            <span className="mr-2">حرف واحد كبير على الأقل</span>
            <img src={hasUpperCase ? checktrue : checkfalse} alt="" />
          </Col>
          <Col
            className="mb-3 d-flex align-items-center justify-content-end"
          >
            <span className="mr-2">حرف واحد صغير على الأقل</span>
            <img src={hasLowerCase ? checktrue : checkfalse} alt="" />
          </Col>
        </Col> : 
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
        }
    
        {/* <Form.Group controlId="formBasicPasswordConfirm">
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
              name="password_confirmation"
              value={form.password_confirmation}
              onChange={handle_change}
              required
            />
          </div>
          {errorMessages.password_confirmation && (
            <p className="text-danger">{errorMessages.password_confirmation}</p>
          )}
        </Form.Group> */}
       

<div dir="rtl" className="flex items-center mt-6"> 
  <input
    type="checkbox"
    id="terms"
    className="ml-2" 
    checked={termsAccepted}
    onChange={handle_checkbox_change}
  />
  <label htmlFor="terms" className="font-semibold">
    أوافق على <u>سياسة الخصوصية</u> و <u>الشروط والأحكام</u>
  </label>
</div>
        <Button
          style={{ backgroundColor: isFormValid() ? "black" : "#BDBFC4" }}
          className="border-0 rounded-5 w-100 mt-3 p-2 fs-5"
          type="submit"
          disabled={!isFormValid()} 
        >
          إنشاء حساب
        </Button>
        {errorMessages.general && (
          <p className="text-danger mt-3">{errorMessages.general}</p>
        )}
        <Waitting show={showWaitting} />
        <Loadding show={showLoading} />
        {<Success show={showSuccess} />}
      </Form>
    </>
  );
}

export default RegisterForm;
