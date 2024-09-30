import React, { useState } from "react";
import rec from "../../../src/assets/loading/rec.svg"

const FAQItem = ({ question, index, isOpen, onClick }) => (
  <div
    className={`px-4 py-4 mt-2 w-full rounded-2xl cursor-pointer ${
      isOpen ? "bg-neutral-800 text-white" : "bg-indigo-300 bg-opacity-10"
    } max-md:max-w-full`} 
     dir="rtl"
    onClick={onClick}
  >
    <div dir="ltr" className="flex flex-wrap gap-10 justify-between items-center text-end text-lg font-extrabold leading-loose">
      {isOpen && (
        <img
          loading="lazy"
          src={rec}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      )}
      <div className="text-right text-[0.9rem]">{question}</div>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: 'ما هي منصة "الرحلة"؟',
      answer: 'منصة "الرحلة" هي أداة متكاملة تساعد الخريجين في تحديد مساراتهم المهنية من خلال تقديم أدوات لتطوير السيرة الذاتية، محاكاة المقابلات، وتقديم مشورة مخصصة.',
    },
    {
      question: 'كيف يمكنني التسجيل في منصة "الرحلة"؟',
      answer: 'يمكنك التسجيل في منصة "الرحلة" من خلال زيارة موقعنا الإلكتروني وإنشاء حساب جديد باستخدام بريدك الإلكتروني أو حساب وسائل التواصل الاجتماعي الخاص بك.',
    },
    {
      question: 'ما هي الخدمات التي تقدمها "الرحلة"؟',
      answer: 'تقدم "الرحلة" مجموعة متنوعة من الخدمات تشمل بناء السيرة الذاتية، محاكاة المقابلات، توصيات الوظائف المخصصة، والتوجيه المهني من خبراء الصناعة.',
    },
    {
      question: "كيف يمكنني استخدام البيانات في تحسين استراتيجية البحث عن وظيفة؟",
      answer: 'تستخدم "الرحلة" تحليلات البيانات المتقدمة لتقديم رؤى حول اتجاهات سوق العمل وتوصيات مخصصة لتحسين فرصك في الحصول على الوظيفة المناسبة.',
    },
    {
      question: "ماذا أفعل إذا كنت بحاجة إلى مساعدة إضافية في تحديد مساري المهني؟",
      answer: 'توفر "الرحلة" خدمة استشارات مهنية شخصية حيث يمكنك التواصل مع مستشارين مهنيين ذوي خبرة للحصول على توجيه مخصص.',
    },
    {
      question: 'هل هناك رسوم لاستخدام خدمات "الرحلة"؟',
      answer: 'نعم، هناك رسوم لاستخدام خدمات "الرحلة". نقدم خطط تسعير مختلفة لتناسب احتياجات مختلف المستخدمين. يمكنك الاطلاع على تفاصيل التسعير على موقعنا.',
    },
  ];

  return (
    <section className="flex flex-col px-24 py-14 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center w-full text-center uppercase max-md:max-w-full">
        <h2 className="text-2xl font-semibold leading-none text-indigo-600 max-md:max-w-full">
          استفسارات
        </h2>
        <h3 className=" text-4xl font-extrabold leading-none text-neutral-800 max-md:max-w-full">
          أسئلة شائعة
        </h3>
      </div>
      <div className="flex flex-wrap gap-8 mt-14 w-full max-w-[1240px] text-neutral-800 max-md:mt-10 max-md:max-w-full">
        <div className="flex grow shrink justify-center items-start p-6 h-90 text-2xl leading-10 text-right  bg-[#d4e157] rounded-2xl min-w-[240px] w-[483px] max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center items-end py-8 min-w-[240px] w-[490px]">
            <img
              loading="lazy"
              src={rec}
              alt=""
              className="object-contain w-6 aspect-square"
            />
            <p className="mt-8 max-md:max-w-full">
              {openIndex !== null ? faqItems[openIndex].answer : ''}
            </p>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col grow shrink self-end text-lg text-right font-extrabold leading-loose min-w-[240px] w-[483px] max-md:max-w-full">
          {faqItems.map((item, index) => (
            <FAQItem
            // style={{ TextCenter: 'text-right'}}
              key={index}
              question={item.question}
              index={index}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;