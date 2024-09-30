import React from "react";
import PaymentMethod from "./PaymentMethod";
import CardDetails from "./CardDetails";

const PaymentForm = () => {
  return (
    <form className="flex flex-col mt-8 w-full max-md:max-w-full">
      <PaymentMethod />
      <CardDetails />
      <div className="flex flex-col mt-10 w-full max-md:max-w-full">
        <button
          type="submit"
          className="gap-2.5 self-stretch px-12 py-6 w-full text-center text-lg font-medium leading-none text-right text-white whitespace-nowrap bg-stone-300 min-h-[60px] rounded-[32px] max-md:px-5 max-md:max-w-full"
        >
          دفع
        </button>
        <p className="flex-1 shrink gap-2 self-stretch mt-3 w-full text-sm font-semibold leading-5 text-center text-neutral-800 max-md:max-w-full">
          سيتم استخدام بياناتك الشخصية لمعالجة طلبك، ودعم تجربتك عبر هذا الموقع،
          ولأغراض أخرى موصوفة في سياسة الخصوصية الخاصة بنا.
        </p>
      </div>
    </form>
  );
};

export default PaymentForm;
