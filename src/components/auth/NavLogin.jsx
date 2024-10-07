import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import journyImage from "../../assets/journy.png";
import { useNavigate } from "react-router-dom";
function NavLogin() {
  const navigate=useNavigate()
  return (
    <Navbar className="bg-white">
      <Container>
        <Navbar.Brand>
          <Button
            onClick={()=> navigate('/register',{replace:true})}
            className=" bg-black"
            style={{
              padding: "24px, 50px, 24px, 50px",
              borderRadius: "32px",
              width: "200px",
              height: "56px",
            }}
          >
             انشاء حساب
          </Button>
          <span className=" ms-4">لا تمتلك حساب لدينا؟</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Image src={journyImage} alt="..." />
        </Navbar.Collapse>
      </Container>
    </Navbar>

  //   <>
  //   <header className="flex flex-wrap gap-10 justify-between items-center px-24 py-6 w-full text-lg font-medium leading-none text-right text-white min-h-[108px] max-md:px-5 max-md:max-w-full">
  //     <div className="flex gap-6 items-center self-stretch my-auto w-[200px]">
  //       <button
  //         className="bg-black text-white"
  //         style={{
  //           padding: "24px, 50px, 24px, 50px",
  //           borderRadius: "32px",
  //           width: "200px",
  //           height: "56px",
  //         }}
  //       >
  //        انشاء حساب
  //       </button>
  //       <span className="">لا تمتلك حساب لدينا؟</span>
  //     </div>
  //     <img
  //       loading="lazy"
  //       src={journyImage}
  //       alt="Company logo"
  //       className="object-contain shrink-0 self-stretch my-auto aspect-[2.85] w-[140px]"
  //     />
  //   </header>
  // </>
  );
}

export default NavLogin;



