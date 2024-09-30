import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import journyImage from "../../assets/journy.png";
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate=useNavigate()
  return (
    <Navbar className=" fixed-top bg-white">
      <Container>
        <Navbar.Brand>
          <Button
           onClick={()=> navigate('/login',{replace:true})}
            className=" bg-black"
            style={{
              padding: "24px, 50px, 24px, 50px",
              borderRadius: "32px",
              width: "200px",
              height: "56px",
            }}
          >
            تسجيل دخول
          </Button>
          <span className=" ms-4">تمتلك حساب لدينا؟</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Image src={journyImage} alt="..." />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;