import React from "react";
import { Col, Row } from "react-bootstrap";
import Colimage from "../../../components/auth/Col_image";
import * as Icon from "react-bootstrap-icons";
import NavLogin from "../../../components/auth/NavLogin";
import ReChangePasswordForm from "./ReChangePasswordForm";
import { useNavigate } from "react-router-dom";

function ReChangePassword2() {
  const navigate = useNavigate();

  return (
    <>
      <NavLogin />
      <div className="p-2 mt-2"> {/* Use Tailwind for margin-top */}
        <Row className="w-full"> {/* Ensure Row is full width */}
          <Col xs={12} md={6} className="flex justify-center"> {/* Responsive column */}
            <Colimage />
          </Col>
          <Col xs={12} md={6} className="flex flex-col"> {/* Responsive column */}
            <p className="fw-bold mb-4 fs-5 p-4 text-right flex items-center justify-end">
              <span>الرجوع</span>
              <Icon.ArrowRight className="ms-3 cursor-pointer" onClick={() => navigate(-1)} />
            </p>
            <ReChangePasswordForm />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ReChangePassword2;