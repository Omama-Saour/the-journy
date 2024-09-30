import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import * as Icon from "react-bootstrap-icons";
import SuccessPassword from "../../../components/Modals/Auth/SuccessPassword";
import { RESET_PASSWORD } from "../service";

function ReChangePasswordForm() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessages, setErrorMessages] = useState({}); // حالة جديدة لتخزين رسائل الأخطاء
  const [form, setForm] = useState({
    newPassword_confirmation: '',
    newPassword: '',
    password: "",
  });

  const isFormValid = () => {
    return (
      form.password &&
      form.newPassword &&
      form.newPassword_confirmation
    );
  };

  const handle_change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handle_submit = async (e) => {
    e.preventDefault();
    setErrorMessages({}); // إعادة تعيين رسائل الخطأ السابقة

    // التحقق من تطابق كلمة المرور الجديدة مع التأكيد
    if (form.newPassword !== form.newPassword_confirmation) {
      setErrorMessages((prev) => ({
        ...prev,
        newPassword_confirmation: "كلمة المرور الجديدة وتأكيد كلمة المرور لا تتطابق.",
      }));
      return;
    }

    try {
      await RESET_PASSWORD(form);
      setShowSuccess(true);
      setErrorMessages({}); // إعادة تعيين رسالة الخطأ إذا نجحت العملية
    } catch (err) {
      // عرض رسائل الأخطاء الواردة من الخادم إذا كانت موجودة
      const serverError = err?.response?.data?.message || "حدث خطأ أثناء إعادة تعيين كلمة المرور. يرجى المحاولة مرة أخرى.";
      setErrorMessages((prev) => ({
        ...prev,
        general: serverError, // تعيين رسالة الخطأ من الخادم
      }));
      setShowSuccess(false);
    }
  };

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="fw-bold">اعادة تعيين كلمة المرور</h2>
        <h6>أنت على بعد دقيقتين لبدأ رحلتك</h6>
      </div>
      <Form className="text-end" onSubmit={handle_submit}>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="fw-bold">تكوين كلمة المرور</Form.Label>
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
       
        

<Row className="">
  <Col xs="6" className="mb-2 d-flex align-items-center justify-content-end">
    <span style={{ marginLeft: "8px" }}>رقم واحد على الأقل</span>
    <Icon.CheckLg style={{ color: "gray" }} />
  </Col>
  <Col xs="6" className="mb-2 d-flex align-items-center justify-content-end">
    <span style={{ marginLeft: "8px" }}>الحد الأدنى للطول هو 8 أحرف</span>
    <Icon.CheckLg style={{ color: "gray" }} />
  </Col>
  <Col xs="6" className="mb-2 d-flex align-items-center justify-content-end">
    <span style={{ marginLeft: "8px" }}>حرف خاص واحد على الأقل</span>
    <Icon.CheckLg style={{ color: "gray" }} />
  </Col>
  <Col xs="6" className="mb-2 d-flex align-items-center justify-content-end">
    <span style={{ marginLeft: "8px" }}>حرف واحد كبير على الأقل</span>
    <Icon.CheckLg style={{ color: "gray" }} />
  </Col>
  <Col xs="6"></Col>
  <Col xs="6" className="mb-3 d-flex align-items-center justify-content-end">
    <span style={{ marginLeft: "8px" }}>حرف واحد صغير على الأقل</span>
    <Icon.CheckLg style={{ color: "gray" }} />
  </Col>
</Row>

        <Form.Group controlId="formBasicNewPassword">
          <Form.Label className="fw-bold">كلمة المرور الجديدة</Form.Label>
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
              placeholder="كلمة المرور الجديدة"
              name="newPassword"
              required
              onChange={handle_change}
            />
          </div>
          {/* عرض رسالة الخطأ الخاصة بكلمة المرور الجديدة */}
          {errorMessages.newPassword && (
            <p className="text-danger">{errorMessages.newPassword}</p>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label className="fw-bold">تأكيد كلمة المرور</Form.Label>
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
              placeholder="تأكيد كلمة المرور"
              name="newPassword_confirmation"
              required
              onChange={handle_change}
            />
          </div>
          {/* عرض رسالة الخطأ الخاصة بتأكيد كلمة المرور */}
          {errorMessages.newPassword_confirmation && (
            <p className="text-danger">{errorMessages.newPassword_confirmation}</p>
          )}
        </Form.Group>

        {/* عرض رسالة الخطأ العامة إذا وُجدت */}
        {errorMessages.general && (
          <p className="text-danger">{errorMessages.general}</p>
        )}

        <Button
          style={{ backgroundColor: isFormValid() ? "black" : "#BDBFC4" }}
          className={`border-0 rounded-5 w-100 mt-3 p-2 fs-5 `}
          type="submit"
          disabled={!isFormValid()} // الزر معطل إذا كانت الحقول غير صالحة
        >
          إعادة تعيين كلمة المرور
        </Button>
      </Form>

      <SuccessPassword show={showSuccess} />
    </>
  );
}

export default ReChangePasswordForm;
