import { Spinner } from "react-bootstrap";
import React from "react";

function Loadding({ show }) {
  if (!show) return null; 
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed inset-0 flex justify-center items-center z-50">
        <main className={`flex flex-col justify-center items-center bg-white rounded-3xl m-6 ${isMobile ? 'min-h-[550px]' : 'min-h-[350px]'} w-[600px] p-10 max-md:px-5 max-md:max-w-full`}>
          <div className="flex space-x-5 max-md:max-w-full">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
          </div>
        </main>
      </section>
    </>
  );
}

export default Loadding;
