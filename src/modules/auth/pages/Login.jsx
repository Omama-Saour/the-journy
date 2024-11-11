import React from "react";
import { Col, Row } from "react-bootstrap";
import Colimage from "../../../components/auth/Col_image";
import LoginForm from "./LoginForm";
import * as Icon from "react-bootstrap-icons";
import NavLogin from "../../../components/auth/NavLogin";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate=useNavigate();
  const isMobile = window.innerWidth <= 768;
  return (
   isMobile ?  <>
   <NavLogin />
   <div className="p-14 mt-2">
       <Col>
         <p className=" fw-bold mb-4 fs-5 p-4 d-flex justify-end ">
           <span>الرجوع للصفحة الرئيسية</span>
           <Icon.ArrowRight className=" ms-3 mt-2" onClick={() => navigate(-1)}/>
         </p>
         <LoginForm />
       </Col>
   </div>
 </> 
 : 
  <>
  <NavLogin />
  <div className=" p-2 mt-2">
    <Row className="w-100">
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