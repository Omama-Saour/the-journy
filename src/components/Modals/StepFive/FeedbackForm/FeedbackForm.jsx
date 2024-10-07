import React, { useState } from "react";
import TextArea from "./TextArea";
import RatingStep from "./RatingStep";

const FeedbackForm = ({onSave}) => {
  const initialSteps = [
    {
      title: "الخطوة الاولي: اختبار شخصي موجه للتوظيف والمهن",
      initialRating: 0,
    },
    {
      title: "الخطوة الثانية: توليد سيرة ذاتية جديدة متوافقة مع ATS",
      initialRating: 0,
    },
    { title: "الخطوة الثالثة: تحليل حساب لينكدان", initialRating: 0 },
    { title: "الخطوة الرابعة: تحضير المستخدم لسوق العمل", initialRating: 0 },
    { title: "الخطوة الخامسة: استشار مهنية", initialRating: 0 },
  ];

  const [ratings, setRatings] = useState(initialSteps.map(step => step.initialRating));

  const handleRatingChange = (index, newRating) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = newRating;
    setRatings(updatedRatings);
  };

  const isButtonDisabled = ratings.some(rating => rating === 0);

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        <main className="flex relative flex-col justify-center bg-white rounded-3xl min-w-[850px] pt-10 pb-6 overflow-hidden max-md:px-5 max-md:py-24">
          <header className="flex flex-col w-full text-center text-neutral-800 max-md:max-w-full">
            <h1 className="self-center text-3xl font-bold leading-none">
              مدي رضائك عن خدمتنا
            </h1>
            <p className="mt-3 text-2xl font-medium max-md:max-w-full">
              سوف يصلك رابط للمقابلة مع المختص عبر البريد الالكتروني
            </p>
          </header>

          <section className="flex flex-col pl-10 pr-10 w-full max-md:max-w-full overflow-y-auto">
            {initialSteps.map((step, index) => (
              <RatingStep
                key={index}
                title={step.title}
                initialRating={ratings[index]}
                onRatingChange={(newRating) => handleRatingChange(index, newRating)}
              />
            ))}

            <TextArea />
          </section>

          <button
            className={`gap-1 self-center px-12 py-2 mt-6 text-lg font-medium leading-none text-right text-white ${
              isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-black'
            } min-h-[56px] rounded-[32px] max-md:px-5`}
            disabled={isButtonDisabled}
            onClick={onSave}
          >
            ارسال وانهاء
          </button>
        </main>
      </section>
    </>
  );
};

export default FeedbackForm;