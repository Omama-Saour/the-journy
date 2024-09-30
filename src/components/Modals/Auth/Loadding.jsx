import { Spinner } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function Loadding({ show }) {
  return (
    <Modal show={show} onHide={() => {}} centered>
      <Modal.Body className="text-center d-flex justify-content-center align-items-center bg-white rounded-4" style={{  padding: "80px ",
            width: "600px",
            marginLeft: "-20%",
            height: "350px",}}>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="primary" />
      </Modal.Body>
    </Modal>
  );
}

export default Loadding;
