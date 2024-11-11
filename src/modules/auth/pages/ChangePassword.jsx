import React from "react";
import { Col, Row } from "react-bootstrap";
import Colimage from "../../../components/auth/Col_image";
import ChangePasswordForm from "./ChangePasswordForm";
import * as Icon from "react-bootstrap-icons";
import NavLogin from "../../../components/auth/NavLogin";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;

  return (
    isMobile ?
    <>
      <NavLogin />
      <div className="p-14 mt-2"> 
          <Col>
            <p className="fw-bold mb-14 fs-5 text-right flex items-center justify-end">
              <span>الرجوع</span>
              <Icon.ArrowRight className="ms-3 mt-2 cursor-pointer" onClick={() => navigate(-1)} />
            </p>
            <ChangePasswordForm />
          </Col>
       
      </div>
    </> :
      <>
      <NavLogin />
      <div className="p-2 mt-2"> 
        <Row className="w-full">
          <Col xs={12} md={6} className="flex justify-center">
            <Colimage />
          </Col>
          <Col xs={12} md={6} className="flex flex-col">
            <p className="fw-bold mb-4 fs-5 p-4 text-right flex items-center justify-end">
              <span>الرجوع</span>
              <Icon.ArrowRight className="ms-3 mt-2 cursor-pointer" onClick={() => navigate(-1)} />
            </p>
            <ChangePasswordForm />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ChangePassword;