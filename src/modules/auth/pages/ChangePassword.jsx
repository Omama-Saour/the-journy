import React from "react";
// import Nav from "../../../components/auth/Nav";
import { Col, Row } from "react-bootstrap";
import Colimage from "../../../components/auth/Col_image";
import ChangePasswordForm from "./ChangePasswordForm";
import * as Icon from "react-bootstrap-icons";
// import NavChangePassword from "../../../components/auth/NavChangePassword";
import NavLogin from "../../../components/auth/NavLogin";
import { useNavigate } from "react-router-dom";
function ChangePassword() {
  const navigate=useNavigate()
  return (
    <>
      <NavLogin />
      <div className=" p-2" style={{ marginTop: "110px" }}>
        <Row>
          <Col xs="6">
            <Colimage/>
          </Col>
          <Col xs="6" className=" ">
          <p className=" fw-bold mb-4 fs-5 p-4 d-flex justify-end ">
              <span>الرجوع  </span>
              <Icon.ArrowRight className=" ms-3 mt-2" onClick={()=>navigate(-1)} />
            </p>
            <ChangePasswordForm />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ChangePassword;