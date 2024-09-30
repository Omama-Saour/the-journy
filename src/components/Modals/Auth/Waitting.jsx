// import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import * as Icon from "react-bootstrap-icons";

function Waitting({ show }) {
  return (
    <Modal show={show} onHide={() => {}} className=" text-center" centered>
      <Modal.Body
        className="text-center bg-white rounded-4"
        style={{ 
        // padding: '80px ', width: '900px', height: '500px' }}
        padding: "80px ",
            width: "900px",
            marginLeft: "-30%",
            height: "450px",}}
      >
        <Icon.RocketTakeoff style={{ fontSize: '64px', color: '#333',marginLeft:'44%' }} />
        <p className="mt-5 mb-5" style={{ fontSize: '36px', fontWeight: 'bold' }}>
          انتظر للحظات
        </p>
        <p style={{ fontSize: '21px' }}>
          قد يحتاج الأمر بعض الوقت لإنشاء حسابك.
        </p>
        <p style={{ fontSize: '21px' }}>
          وفي الوقت نفسه، يرجى التحقق من حسابك من خلال النقر على الرابط الذي أرسلناه
        </p>
        <p style={{ fontSize: '21px' }}>
          إلى عنوان بريدك الإلكتروني.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default Waitting;
