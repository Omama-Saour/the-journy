import React from "react";
import Header from "../../components/Loading/Header";
import ContactForm from "../../components/ContactPage/ContactForm";
import ThankYouCard from "../../components/ContactPage/ThankYouCard";
import patternbackground from "../../assets/loading/patternbackground.png";
import arrow from "../../../src/assets/payment/arrow.png";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate=useNavigate()
  return (
    <main className="flex overflow-hidden flex-col bg-white">
   <Header
        onOldUserClick={()=> navigate('/login',{replace:true})}
        onNewUserClick= {()=> navigate('/register',{replace:true})}
      />
      <section className="flex flex-col px-14 pt-2 pb-40 w-full min-h-[916px] max-md:px-5 max-md:pb-24 max-md:max-w-full" 
       style={{
        backgroundImage: `url(${patternbackground})`,
        // backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        
      }}>
        <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
          <h1 className="flex-1 shrink self-stretch my-auto text-2xl font-bold text-right basis-0 text-stone-950 max-md:max-w-full">
            الرجوع للصفحة الرئيسية
          </h1>
          <div className="flex gap-1 justify-center items-center self-stretch my-auto w-6 min-h-[24px] rotate-[-3.141592653589793rad]">
            <img
              loading="lazy"
              onClick={() => navigate(-1)}
              src={arrow}
              className="object-contain self-stretch my-auto w-6 aspect-square"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-10 items-center self-center mt-6 max-md:mt-10 max-md:max-w-full">
          <ThankYouCard />
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
