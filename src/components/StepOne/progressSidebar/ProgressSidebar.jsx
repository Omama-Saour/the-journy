
//غير مستخدم حالياً 

import React from 'react';

const Step = ({ stepNumber, title, description, status, isLast = false }) => (
  <div className="flex gap-3">
    <div className="flex flex-col self-start pt-0.5 pb-4 text-right min-w-[240px] w-[250px]">
      <div className="flex flex-col w-full">
        <div className={`text-base font-bold leading-none ${status === 'inProgress' ? 'text-indigo-600' : 'text-neutral-800'}`}>
          {title}
        </div>
        <div className="text-sm leading-none text-neutral-800">{description}</div>
      </div>
      <div className={`mt-2 text-sm leading-none ${status === 'inProgress' ? 'text-indigo-600' : 'text-neutral-800'}`}>
        {status === 'inProgress' ? 'قيد التنفيذ' : 'قيد الانتظار'}
      </div>
    </div>
    <div className="flex flex-col items-center pb-1 w-6">
      <div className={`flex overflow-hidden flex-col justify-center items-center w-6 h-6 ${status === 'inProgress' ? 'bg-white shadow-sm' : 'bg-violet-200'} rounded-xl`}>
        <div className={`flex shrink-0 w-full h-2 ${status === 'inProgress' ? 'bg-indigo-600' : 'bg-white'} rounded-full`} />
      </div>
      {!isLast && <div className="flex flex-1 mt-1 w-0.5 bg-violet-200 rounded-sm min-h-[56px]" />}
    </div>
  </div>
);

const ProgressSidebar = () => {
  const steps = [
    { stepNumber: 'الأولي', title: 'الخطوة الأولي', description: 'اختبار شخصي موجه للتوظيف والمهن', status: 'inProgress' },
    { stepNumber: 'الثانية', title: 'الخطوة الثانية', description: 'توليد سيرة ذاتية جديدة متوافقة مع ATS', status: 'pending' },
    { stepNumber: 'الثالثة', title: 'الخطوة الثالثة', description: 'تحليل حساب لينكدان', status: 'pending' },
    { stepNumber: 'الرابعة', title: 'الخطوة الرابعة', description: 'تحضير المستخدم لسوق العمل', status: 'pending' },
    { stepNumber: 'الخامسة', title: 'الخطوة الخامسة', description: 'استشار مهنية', status: 'pending' },
  ];

  return (
    <aside className="flex flex-col self-start min-w-[240px]">
      <div className="flex overflow-hidden gap-2.5 items-start p-8 bg-white rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] max-md:px-5">
        <div className="flex flex-col min-w-[240px]">
          {steps.map((step, index) => (
            <Step
              key={index}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              status={step.status}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProgressSidebar;
