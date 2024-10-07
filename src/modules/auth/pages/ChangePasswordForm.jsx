import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

function ChangePasswordForm() {
  const [email, setEmail] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isFormValid = () => {
    return email && recaptchaValue;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (recaptchaValue) {
      console.log("تم التحقق من reCAPTCHA:", recaptchaValue);

      // Add timeout handling
      try {
        // Simulate an API call here for password reset
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate success or failure
            Math.random() > 0.5 ? resolve() : reject(new Error("Timeout occurred"));
          }, 3000); // Adjust timeout as necessary
        });

        // Navigate to the reset password page after successful verification
        navigate("/rechange-password");
      } catch (err) {
        setError("حدث خطأ أثناء عملية إعادة تعيين كلمة المرور. الرجاء المحاولة لاحقًا.");
        console.error("Error:", err);
      }
    } else {
      console.log("الرجاء التحقق من reCAPTCHA");
      setError("الرجاء التحقق من reCAPTCHA");
    }
  };

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="fw-bold">هل نسيت كلمة المرور؟</h2>
        <h6>
          لا داعي للقلق, سنرسل لك رسالة لمساعدتك في اعادة تعيين كلمة المرور الخاصة بك
        </h6>
      </div>
      <Form className="text-end" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="fw-bold">البريد الإلكتروني</Form.Label>
          <input
            className="w-full p-2 rounded-5 mb-3 text-end border focus:outline-none focus:ring-2 focus:ring-black"
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
          className="w-full mb-3"
          required
        />

        {error && <p className="text-red-500 text-center">{error}</p>}

        <Button
          style={{ backgroundColor: isFormValid() ? "black" : "#BDBFC4" }}
          className={`border-0 rounded-5 w-100 mt-3 p-2 fs-5 `}
          type="submit"
          disabled={!isFormValid()} // الزر معطل إذا كانت الحقول غير صالحة
        >
          ارسال رابط اعادة الضبط
        </Button>
      </Form>
    </>
  );
}

export default ChangePasswordForm;