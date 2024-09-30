import React, { useState } from "react";
import { Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

function ChangePasswordForm() {
  const [email, setEmail] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const navigate=useNavigate()
  const isFormValid = () => {
    return email && recaptchaValue;
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recaptchaValue) {
      // تنفيذ عملية إعادة تعيين كلمة المرور
      console.log("تم التحقق من reCAPTCHA:", recaptchaValue);
    } else {
      console.log("الرجاء التحقق من reCAPTCHA");
    }
  };

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="fw-bold"> هل نسيت كلمة المرور ؟ </h2>
        <h6>
          لا داعي للقلق, سنرسل لك رسالة لمساعدتك في اعادة تعيين كلمة المرور
          الخاصة بك
        </h6>
      </div>
      <Form className="text-end" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="fw-bold">البريد الإلكتروني</Form.Label>
          <Form.Control
            className="rounded-5 mb-2 text-end p-2"
            type="email"
            placeholder="ادخل البريد الإلكتروني"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Form.Group>

        <ReCAPTCHA
          sitekey="6LdNR0sqAAAAACSzgkwnD3eyR2OfhsPA06xCFU1E" 
          onChange={handleRecaptchaChange}
          className="mb-3"
          required
        />

        {/* <Button
          // type="submit"
          className="border-0 rounded-5 w-100 mt-3 p-2 fs-5"
          style={{ backgroundColor: "#BDBFC4" }}
          onClick={()=>navigate('/rechange-password')}
        > */}
        <Button
          style={{   backgroundColor: isFormValid() ? "black" : "#BDBFC4" }}
          className={`border-0 rounded-5 w-100 mt-3 p-2 fs-5 `}
          // type="submit"
          onClick={()=>navigate('/rechange-password')}
          disabled={!isFormValid()} // الزر معطل إذا كانت الحقول غير صالحة
        >
          ارسال رابط اعادة الضبط
        </Button>
      </Form>
    </>
  );
}

export default ChangePasswordForm;
