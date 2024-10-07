import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import * as Icon from "react-bootstrap-icons";
import SuccessPassword from "../../../components/Modals/Auth/SuccessPassword";
import { RESET_PASSWORD } from "../service";

function ReChangePasswordForm() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [form, setForm] = useState({
    newPassword_confirmation: "",
    newPassword: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const isFormValid = () => {
    return form.password && form.newPassword && form.newPassword_confirmation;
  };

  const handle_change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
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
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="fw-bold">اعادة تعيين كلمة المرور</h2>
        <h6>أنت على بعد دقيقتين لبدأ رحلتك</h6>
      </div>
      <Form className="text-end" onSubmit={handle_submit}>
        {/* Password Field */}
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
              required
              onChange={handle_change}
            />
          </div>
        </Form.Group>

        <Row>
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

        {/* New Password Field */}
        <Form.Group controlId="formBasicNewPassword">
          <Form.Label className="fw-bold">كلمة المرور الجديدة</Form.Label>
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
              placeholder="كلمة المرور الجديدة"
              name="newPassword"
              required
              onChange={handle_change}
            />
          </div>
          {errorMessages.newPassword && (
            <p className="text-danger">{errorMessages.newPassword}</p>
          )}
        </Form.Group>

        {/* Confirm Password Field */}
        <Form.Group controlId="formBasicConfirmPassword">
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

        <Button
          style={{ backgroundColor: isFormValid() ? "black" : "#BDBFC4" }}
          className={`border-0 rounded-5 w-100 mt-3 p-2 fs-5`}
          type="submit"
          disabled={!isFormValid() || loading} // Disable button during loading
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
