import React from "react";
// import Nav from "../../../components/auth/Nav";
import { Col, Row } from "react-bootstrap";
import Colimage from "../../../components/auth/Col_image";
import LoginForm from "./LoginForm";
import * as Icon from "react-bootstrap-icons";
import NavLogin from "../../../components/auth/NavLogin";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate=useNavigate()
  return (
    <>
      <NavLogin />
      <div className=" p-2" style={{ marginTop: "110px" }}>
        <Row className=" w-100">
          <Col xs="6">
            <Colimage />
          </Col>
          <Col xs="6" className=" ">
            {/* <p className=" text-end fw-bold mb-4 fs-5 p-4 "> */}
            <p className=" fw-bold mb-4 fs-5 p-4 d-flex justify-end ">
              <span>الرجوع للصفحة الرئيسية</span>
              <Icon.ArrowRight className=" ms-3 mt-2" onClick={() => navigate(-1)}/>
            </p>
            <LoginForm />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;