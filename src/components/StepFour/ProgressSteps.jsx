import React from "react";

const steps = [
  {
    title: "الخطوة الأولي",
    description: "اختبار شخصي موجه للتوظيف والمهن",
    status: "تمت",
  },
  {
    title: "الخطوة الثانية",
    description: "توليد سيرة ذاتية جديدة متوافقة مع ATS",
    status: "تمت",
  },
  {
    title: "الخطوة الثالثة",
    description: "تحليل حساب لينكدان",
    status: "تمت",
  },
  {
    title: "الخطوة الرابعة",
    description: "تحضير المستخدم لسوق العمل",
    status: "قيد التنفيذ",
  },
  {
    title: "الخطوة الخامسة",
    description: "استشار مهنية",
    status: "قيد الانتظار",
  },
];

const ProgressSteps = () => {
  return (
    <aside className="flex flex-col self-start min-w-[240px]">
      <div className="flex overflow-hidden gap-2.5 items-start p-8 bg-white rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] max-md:px-5">
        <div className="flex flex-col min-w-[240px]">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex flex-col justify-center self-start pt-0.5 pb-4 text-right min-w-[240px] w-[250px]">
                <div className="flex flex-col w-full">
                  <h3
                    className={`text-base font-bold leading-none ${
                      index < 4 ? "text-indigo-600" : "text-neutral-800"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-none text-neutral-800">
                    {step.description}
                  </p>
                </div>
                <p
                  className={`mt-2 text-sm leading-none ${
                    index < 4 ? "text-indigo-600" : "text-neutral-800"
                  }`}
                >
                  {step.status}
                </p>
              </div>
              <div className="flex flex-col items-center pb-1 w-6">
                <div
                  className={`flex overflow-hidden flex-col justify-center items-center w-6 h-6 ${
                    index < 4
                      ? "bg-white rounded-xl shadow-sm"
                      : "bg-violet-200 rounded-xl"
                  }`}
                >
                  <div
                    className={`flex flex-col justify-center items-center px-1.5 w-full h-6 ${
                      index < 4 ? "bg-indigo-600" : ""
                    } rounded-xl`}
                  >
                    <div className="flex shrink-0 w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex flex-1 mt-1 w-0.5 bg-violet-200 rounded-sm min-h-[56px]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProgressSteps;
