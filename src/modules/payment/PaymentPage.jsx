import React from "react";
import Header from "../../components/StepOne/Header";
import PaymentForm from "../../components/Payment/PaymentPage/PaymentForm";
import BackButton from "../../components/Payment/PaymentPage/BackButton";
import patternbackground from "../../assets/payment/bgpayment.png";
const PaymentPage = () => {
  return (
    <>
     <Header />
     <div 
    className="flex overflow-hidden relative flex-col bg-white" 
    style={{
      backgroundImage: `url(${patternbackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
    
      
      <main className="flex z-0 flex-1 justify-center items-center mt-20 mb-20 size-full max-md:max-w-full">
        <section className="flex flex-col justify-center self-stretch p-14 my-auto bg-white rounded-2xl min-w-[240px] shadow-[4px_4px_12px_rgba(171,195,255,0.2)] w-[600px] max-md:px-5">
          <BackButton />
          <h1 className="flex flex-col mt-8 w-full text-3xl font-bold text-center whitespace-nowrap leading-[55px] text-neutral-800 max-md:max-w-full">
            الدفع
          </h1>
          <PaymentForm />
        </section>
      </main>
    </div>
    </>
   
  );
};

export default PaymentPage;
