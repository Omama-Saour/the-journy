import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import * as Icon from "react-bootstrap-icons";
import Waitting from "../../../components/Modals/Auth/Waitting";
import Loadding from "../../../components/Modals/Auth/Loadding";
import Success from "../../../components/Modals/Auth/Success";
import { REGISTER } from "../service";

function RegisterForm() {
  const [passwordShown, setPasswordShown] = useState(false);
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

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const isFormValid = () => {
    return (
      form.first_name &&
      form.last_name &&
      form.email &&
      form.phone &&
      form.password &&
      form.password_confirmation
    );
  };

  const handle_change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handle_submit = async (e) => {
    e.preventDefault();

    setShowWaitting(true);
    setErrorMessages({});

    try {
      setTimeout(async () => {
        setShowWaitting(false);
        setShowLoading(true);

        try {
          await REGISTER(form);
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
          if (errorResponse.password_confirmation) {
            newErrorMessages.password_confirmation =
              errorResponse.password_confirmation[0]; // الخطأ الخاص بتأكيد كلمة المرور
          }

          // تعيين الرسائل العامة إذا وُجدت
          if (Object.keys(newErrorMessages).length === 0) {
            newErrorMessages.general = "حدث خطأ أثناء إنشاء الحساب";
          }

          setErrorMessages(newErrorMessages); // تعيين الأخطاء في الحالة
          setShowLoading(false);
        }
      }, 2000); // واجهة الانتظار تظهر لمدة ثانيتين
    } catch (error) {
      setShowWaitting(false); // إيقاف واجهة الانتظار
      setErrorMessages({ general: "حدث خطأ غير متوقع" }); // تعيين رسالة الخطأ العامة
    }
  };

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="fw-bold">إنشاء حساب</h2>
        <h6>أنت على بعد دقيقتين لبدأ رحلتك</h6>
      </div>
      <Form className="text-end" onSubmit={handle_submit}>
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
            <Form.Label className="fw-bold">الاسم الأول</Form.Label>

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
            className="w-full p-2 rounded-5 mb-3 text-end border focus:outline-none focus:ring-2 focus:ring-black"
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
          <Form.Label className="fw-bold">رقم الجوال</Form.Label>

          <input
            className="w-full p-2 rounded-5 mb-3 text-end border focus:outline-none focus:ring-2 focus:ring-black"
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
          <Form.Label className="fw-bold">تكوين كلمة المرور</Form.Label>
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
              value={form.password}
              onChange={handle_change}
              required
            />
          </div>
        </Form.Group>

        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Label className="fw-bold">تأكيد كلمة المرور</Form.Label>
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
              placeholder="تأكيد كلمة المرور"
              name="password_confirmation"
              value={form.password_confirmation}
              onChange={handle_change}
              required
            />
          </div>
          {/* عرض رسالة الخطأ الخاصة بتأكيد كلمة المرور */}
          {errorMessages.password_confirmation && (
            <p className="text-danger">{errorMessages.password_confirmation}</p>
          )}
        </Form.Group>

        <Row className="">
          <Col
            xs="6"
            className="mb-2 d-flex align-items-center justify-content-end"
          >
            <span style={{ marginLeft: "8px" }}>رقم واحد على الأقل</span>
            <Icon.CheckLg style={{ color: "gray" }} />
          </Col>
          <Col
            xs="6"
            className="mb-2 d-flex align-items-center justify-content-end"
          >
            <span style={{ marginLeft: "8px" }}>
              الحد الأدنى للطول هو 8 أحرف
            </span>
            <Icon.CheckLg style={{ color: "gray" }} />
          </Col>
          <Col
            xs="6"
            className="mb-2 d-flex align-items-center justify-content-end"
          >
            <span style={{ marginLeft: "8px" }}>حرف خاص واحد على الأقل</span>
            <Icon.CheckLg style={{ color: "gray" }} />
          </Col>
          <Col
            xs="6"
            className="mb-2 d-flex align-items-center justify-content-end"
          >
            <span style={{ marginLeft: "8px" }}>حرف واحد كبير على الأقل</span>
            <Icon.CheckLg style={{ color: "gray" }} />
          </Col>
          <Col xs="6"></Col>
          <Col
            xs="6"
            className="mb-3 d-flex align-items-center justify-content-end"
          >
            <span style={{ marginLeft: "8px" }}>حرف واحد صغير على الأقل</span>
            <Icon.CheckLg style={{ color: "gray" }} />
          </Col>
        </Row>

        <Form.Check
          reverse
          label={
            <>
              أوافق على <u>سياسة الخصوصية</u> و <u>الشروط والأحكام</u>
            </>
          }
        />

        <Button
          style={{ backgroundColor: isFormValid() ? "black" : "#BDBFC4" }}
          className="border-0 rounded-5 w-100 mt-3 p-2 fs-5"
          type="submit"
          disabled={!isFormValid()} // الزر معطل إذا كانت الحقول غير صالحة
        >
          إنشاء حساب
        </Button>

        {/* عرض رسالة الخطأ العامة إذا وُجدت */}
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
