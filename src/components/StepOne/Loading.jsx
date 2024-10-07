import { Spinner } from "react-bootstrap";
import React from "react";

function Loading({ show }) {
  if (!show) return null; // Don't render anything if not visible

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
          <p dir="rtl" className="mt-4 text-lg text-center text-gray-700">
            جاري التحميل...
            <br />
            قد تستغرق هده العملية بعض الوقت، يرجى الانتظار حتى يتم التحميل بنجاح
          </p>
        </main>
      </section>
    </>
  );
}

export default Loading;
