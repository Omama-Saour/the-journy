import React, { useState } from "react";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <label dir="rtl" className="text-sm font-bold leading-snug text-right text-neutral-800 max-md:max-w-full">
          ادفع بواسطة:
        </label>

        <div className="flex gap-5 items-start self-end mt-2">


          <div 
            className={`flex gap-2 justify-center items-center px-3 py-2 border border-violet-200 border-solid rounded-[32px] ${selectedMethod === 'bank' ? 'bg-violet-100' : ''}`}
            onClick={() => setSelectedMethod('bank')}
          >
            <span className="self-stretch my-auto text-base font-medium leading-none text-neutral-800">
              حساب بنكي
            </span>
            <div className="flex flex-col self-stretch my-auto w-5">
              <div className={`flex z-10 shrink-0 h-6 rounded-full border-2 border-solid border-neutral-800 ${selectedMethod === 'bank' ? 'bg-neutral-800' : ''}`} />
            </div>
          </div>


          <div 
            className={`flex gap-2 justify-center items-center px-3 py-2 border border-violet-200 border-solid rounded-[32px] ${selectedMethod === 'card' ? 'bg-violet-100' : ''}`}
            onClick={() => setSelectedMethod('card')}
          >
            <span className="self-stretch my-auto text-base font-medium leading-none text-neutral-800">
              كارت
            </span>


            <div className="flex flex-col self-stretch my-auto w-5">
              <div className={`flex z-10 shrink-0 h-6 rounded-full border-2 border-solid border-neutral-800 ${selectedMethod === 'card' ? 'bg-neutral-800' : ''}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;