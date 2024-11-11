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

    if (!recaptchaValue) {
      setError("الرجاء التحقق من reCAPTCHA");
      return;
    }

    console.log("تم التحقق من reCAPTCHA:", recaptchaValue);

    try {
      // Simulate an API call for password reset
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate a 401 error based on some condition
          // Replace this with your actual API call
          const isSuccess = Math.random() > 0.5; // Simulate success or failure
          isSuccess ? resolve() : reject({ response: { status: 401 } });
        }, 3000); // Adjust timeout as necessary
      });

      // Navigate to the reset password page after successful verification
      // navigate("/rechange-password");
      navigate("/rechange-password", { state: { email } });
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("حدث خطأ: لم يتم التحقق من reCAPTCHA. الرجاء المحاولة مرة أخرى.");
      } else {
        setError("حدث خطأ أثناء عملية إعادة تعيين كلمة المرور. الرجاء المحاولة لاحقًا.");
      }
      console.error("Error:", err);
    }
  };

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold leading-28">هل نسيت كلمة المرور؟</h2>
        <h6 className="leading-6 mt-4">
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

        {/* <ReCAPTCHA
          sitekey="6LdNR0sqAAAAACSzgkwnD3eyR2OfhsPA06xCFU1E"
          onChange={handleRecaptchaChange}
          className="w-full mb-3"
        /> */}

<ReCAPTCHA
          sitekey="6LdNR0sqAAAAACSzgkwnD3eyR2OfhsPA06xCFU1E"
          onChange={handleRecaptchaChange}
          className="w-full mb-3"
          // required
        />

        {error && <p className="text-red-500 text-center">{error}</p>}

        <Button
          style={{ backgroundColor: isFormValid() ? "black" : "#BDBFC4" }}
          className={`border-0 rounded-5 w-100 mt-3 p-2 fs-5 `}
          type="submit"
          disabled={!isFormValid()}
        >
          ارسال رابط اعادة الضبط
        </Button>
      </Form>
    </>
  );
}

export default ChangePasswordForm;