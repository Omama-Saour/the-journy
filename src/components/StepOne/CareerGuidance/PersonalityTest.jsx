import React, { useState, useEffect } from "react";
import downicon from "../../../../src/assets/StepOne/chevron-down.png";
import { setAnswersGlobl } from '../globals';

const Question = ({ number, question, options = [], onChange, value }) => {
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
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>
            {`الإجابة ${number}`}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}> 
              {option.text_ar}
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

const PersonalityTest = ({ questionss }) => {
  const [answers, setAnswers] = useState(Array(questionss.length).fill("")); // Initialize answers based on questionss length

    // Update global answers whenever local answers change
    useEffect(() => {
      setAnswersGlobl(answers);
    }, [answers]);
  
  const handleInputChange = (index) => (event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  return (
    <section className="flex overflow-hidden flex-col justify-center mt-8 max-md:max-w-full">
      <h2 className="flex-1 shrink gap-10 self-stretch w-full text-xl font-bold leading-tight text-center text-neutral-800 max-md:max-w-full">
        اختبار شخصي لتحديد وظيفتك المستقبلية
      </h2>

      {questionss.map((q, index) => (
        <Question
          key={q.id} // Use id for unique keys
          number={index + 1} // Display the question number (1-based index)
          question={q.question_ar} // Use the Arabic question text
          options={q.choices} // Use the choices from the question
          value={answers[index]} // Pass the current answer
          onChange={handleInputChange(index)} // Pass the change handler
        />
      ))}
    </section>
  );
};

export default PersonalityTest;