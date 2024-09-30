import React from "react";
// import Nav from "../../../components/auth/Nav";
import { Col, Row } from "react-bootstrap";
import Colimage from "../../../components/auth/Col_image";
// import LoginForm from "./LoginForm";
import * as Icon from "react-bootstrap-icons";
import NavLogin from "../../../components/auth/NavLogin";
import ReChangePasswordForm from "./ReChangePasswordForm";
import { useNavigate } from "react-router-dom";
function ReChangePassword2() {
  const navigate=useNavigate()
  return (
    <>
      <NavLogin />
      <div className=" p-2" style={{ marginTop: "110px" }}>
        <Row className=" w-100">
          <Col xs="6">
            <Colimage/>
          </Col>
          <Col xs="6" className=" ">
          <p className=" fw-bold mb-4 fs-5 p-4 d-flex justify-end ">
              <span>الرجوع  </span>
              <Icon.ArrowRight className=" ms-3 " onClick={()=>navigate(-1)} />
            </p>
            <ReChangePasswordForm />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ReChangePassword2;