import React from "react";
import icon from "../../../../src/assets/personltyTest/Vector.png";

function EnhanceDisplay({ show, data, onClose}) {
  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        <main className="flex relative flex-col justify-center bg-white rounded-3xl min-w-[400px] max-w-[800px] my-auto pt-20 pb-8 overflow-hidden max-md:px-5 max-md:py-24">
          <h1 className="flex z-0 flex-col w-full text-3xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full">
            اقتراحات الذكاء الاصطناعي
          </h1>
          <div className="flex absolute top-10 right-10 z-0 items-end w-[20px]">
         
           <img
              loading="lazy"
              src={icon}
              className="object-contain self-stretch my-auto w-8 aspect-square cursor-pointer"
              alt=""
              onClick={onClose}
            />
          </div>
          <div className="overflow-y-auto max-h-[500px] w-full px-5">
            <form dir="rtl" className="flex z-0 flex-col justify-center mt-8 w-full">
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">الملخص المهني:</h2>
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                <p className="text-base text-neutral-800">{data.summary.professional_summary}</p>
                <p className="text-base text-neutral-600 mt-2">{data.summary.note}</p>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">الخبرة:</h2>
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">

{data.experience.experience.length > 0 ? (
                    data.experience.experience.map((exp, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="font-bold text-lg">{exp.title}</h3>
                        <p className="text-sm text-gray-600">{exp.company}</p>
                        <p className="text-sm text-gray-600">
                          {exp.start_date} - {exp.end_date || 'Present'}
                        </p>
                        <p className="mt-2">{exp.description}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-600">لا توجد خبرات متاحة.</p>
                  )}
                  <p className="text-sm text-gray-500 mt-2">{data.experience.note}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
              className="gap-2.5 self-center w-[180px] h-[50px] px-8 py-2 text-base font-medium text-white bg-neutral-800 min-h-[40px] rounded-[32px] max-md:px-5">
                حسناً
              </button>
            </form>
          </div>
        </main>
      </section>
    </>
  );
}

export default EnhanceDisplay;