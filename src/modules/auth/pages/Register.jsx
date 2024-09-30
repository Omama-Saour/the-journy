import React from "react";
import Nav from "../../../components/auth/Nav";
import { Col, Row } from "react-bootstrap";
import Colimage from "../../../components/auth/Col_image";
import RegisterForm from "./RegisterForm";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className=" p-2" style={{ marginTop: "110px" }}>
        <Row className=" w-100">
          <Col xs="6">
            <Colimage/>
          </Col>
          <Col xs="6" className=" ">
            <p className=" fw-bold mb-4 fs-5 p-4 d-flex justify-end ">
              <span>الرجوع للصفحة الرئيسية</span>
              <Icon.ArrowRight
                className=" ms-3 mt-2"
                onClick={() => navigate(-1)}
              />
            </p>
            <RegisterForm />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Register;
