import journyImage from "../../assets/journy.png";
import { useNavigate } from "react-router-dom";
function NavLogin() {
  const navigate=useNavigate();
  const isMobile = window.innerWidth <= 768;
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center px-20 w-full text-lg font-medium leading-none text-right text-white min-h-[108px] max-md:px-5 max-md:max-w-full">
      <div className="flex items-center self-stretch my-auto min-w-[200px]">
        <button
          onClick={()=> navigate('/register',{replace:true})}
         className="bg-black text-white"
         style={{
           padding: isMobile ? '10px' : '24px, 50px, 24px, 50px',
           borderRadius: '32px',
           width: isMobile ? '140px' : '200px',
           height: isMobile ? '40px' : '56px',
         }}
        >
         انشاء حساب
        </button>
        { isMobile ? 
         null
          :
          <span className=" ms-4 text-black">لا تمتلك حساب لدينا؟</span> }
      </div>
      
      <img
        loading="lazy"
        src={journyImage}
        alt="Company logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[2.85] w-[140px]"
      />
    </header>
  );
}

export default NavLogin;



