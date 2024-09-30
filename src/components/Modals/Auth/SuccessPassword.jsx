// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Icon from "react-bootstrap-icons";
import {useNavigate } from "react-router-dom";
// import { replace, useNavigate } from "react-router-dom";


function SuccessPassword({ show }) {
    const navigate=useNavigate()
    return (
      <Modal show={show} onHide={() => {}} centered>
               <Modal.Body
            className="text-center bg-white rounded-4"
            style={{
              padding: "80px ",
              width: "800px",
              marginLeft: "-28%",
              height: "450px",
            }}
          >
            <Icon.CheckAll style={{ fontSize: "64px",marginLeft:'44%'}} />
            <p
              className=" mt-5 mb-5"
              style={{ fontSize: "36px", fontWeight: "bold" }}
            >
              {" "}
              لقد قمت بتعيين كلمة مرور بنجاح
            </p>
            <Button
              onClick={() =>navigate('/login',{replace:true}) }
              className="border-0 rounded-5 w-25 mt-3 p-2 fs-5 bg-black"
              // style={{ backgroundColor: "#BDBFC4" }}
            >
               تسجيل الدخول
            </Button>
          </Modal.Body>
      </Modal>
    );
  }
  
  export default SuccessPassword;
  