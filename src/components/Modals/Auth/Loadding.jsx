import { Spinner } from "react-bootstrap";
import React from "react";

function Loadding({ show }) {
  if (!show) return null; 

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed inset-0 flex justify-center items-center z-50">
        <main className="flex flex-col justify-center items-center bg-white rounded-3xl min-w-[600px] min-h-[350px] p-10">
          <div className="flex space-x-5">
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
