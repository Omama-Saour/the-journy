import React, { useState } from "react";
import downicon from "../../../../src/assets/StepOne/chevron-down.png";

const Question = ({ number, question, options = [] }) => {
  return (
    <div className="flex flex-col justify-center mt-4 w-full max-md:max-w-full">
      <div className="flex flex-col justify-center items-end self-end">
        <div className="text-lg font-bold tracking-wide leading-loose text-indigo-600">
          {`السؤال ${number}`}
        </div>
        <div className="text-base leading-loose text-right text-neutral-800">
          {question}
        </div>
      </div>

      <div className="relative">
        <select
          dir="rtl"
          className="flex flex-wrap gap-10 justify-between items-center p-4 mt-2 w-full text-base font-medium bg-white rounded-lg border border-violet-200 border-solid min-h-[64px] shadow-[0px_8px_24px_rgba(0,44,109,0.04)] text-neutral-800 max-md:max-w-full appearance-none"
        >
          <option value="" disabled selected>
            {`الإجابة ${number}`}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute left-6 top-9 pointer-events-none">
          <img
            loading="lazy"
            src={downicon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

// const Question = ({ number, question, value, onChange }) => {
//   return (
//     <div className="flex flex-col justify-center mt-4 w-full max-md:max-w-full">
//       <div className="flex flex-col justify-center items-end self-end">
//         <div className="text-lg font-bold tracking-wide leading-loose text-indigo-600">
//           {`السؤال ${number}`}
//         </div>
//         <div className="text-base leading-loose text-right text-neutral-800">
//           {question}
//         </div>
//       </div>
//       <div className="flex flex-wrap gap-10 justify-between items-center p-4 mt-2 w-full text-base font-medium bg-white rounded-lg border border-violet-200 border-solid min-h-[64px] shadow-[0px_8px_24px_rgba(0,44,109,0.04)] text-neutral-800 max-md:max-w-full">
//         <img
//           loading="lazy"
//           src={}
//           alt=""
//           className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//         />
//         <input
//           type="text"
//           value={value}
//           onChange={onChange}
//           placeholder={`الإجابة ${number}`}
//           className="self-stretch my-auto border border-neutral-300 rounded p-2 w-full"
//         />
//       </div>
//     </div>
//   );
// };

const PersonalityTest = () => {
  const questions = [
    {
      number: "الأول",
      question: "ما هي المهارات التي تجيدها بشكل جيد؟",
      options: ["خيار 1", "خيار 2", "خيار 3"],
    },
    {
      number: "الثاني",
      question: "ما هي الأنشطة التي تستمتع بها وتجدها ممتعة؟",
      options: ["خيار 1", "خيار 2", "خيار 3"],
    },
    {
      number: "الثالث",
      question: "ما هي القيم التي تعتبرها مهمة في العمل والحياة؟",
      options: ["خيار 1", "خيار 2", "خيار 3"],
    },
    {
      number: "الرابع",
      question:
        "ما هي التحديات التي تتوقع أن تكون مستعدًا للتغلب عليها في مجال معين؟",
      options: ["خيار 1", "خيار 2", "خيار 3"],
    },
    {
      number: "الخامس",
      question: "هل تفضل العمل بشكل فردي أم في فريق؟",
      options: ["خيار 1", "خيار 2", "خيار 3"],
    },
    // list from backend
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleInputChange = (index) => (event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    console.log(answers);
    try {
      const response = await fetch(
        "https://api.mockfly.dev/mocks/f238bf88-f890-4b7a-a30d-fcbd5fec6eaa/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ answers }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="flex overflow-hidden flex-col justify-center mt-8 max-md:max-w-full">
      <h2 className="flex-1 shrink gap-10 self-stretch w-full text-xl font-bold leading-tight text-center text-neutral-800 max-md:max-w-full">
        اختبار شخصي لتحديد وظيفتك المستقبلية
      </h2>

      {questions.map((q, index) => (
        <Question
          key={index}
          number={q.number}
          question={q.question}
          options={q.options}
          value={answers[index]}
          onChange={handleInputChange(index)}
        />
      ))}
      {/* <button
        onClick={handleSubmit}
        className="mt-4 p-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
      >
        إرسال الإجابات
      </button> */}
    </section>
  );
};

export default PersonalityTest;
