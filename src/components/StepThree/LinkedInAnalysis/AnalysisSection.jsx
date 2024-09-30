import React from "react";
import AnalysisCard from "./AnalysisCard";

const AnalysisSection = () => {
  const analysisItems = [
    {
      title: "معلومات أساسية",
      items: [
        { label: "الاسم بالكامل", content: "تم توفير الاسم الأول والأخير." },
        {
          label: "الصوره الشخصيه",
          content:
            "لقد قمت بإدراج صورة شخصية، مما يساعدك على الحصول على ما يصل إلى 21 ضعفًا من مشاهدات الملف الشخصي وما يصل إلى 36 ضعفًا من الرسائل.",
        },
        {
          label: "العنوان",
          content:
            "إن إضافة موقع وبلد محددين يساعد مسؤولي التوظيف في العثور عليك - أكثر من 30% من مسؤولي التوظيف سيبحثون حسب الموقع.",
        },
        { label: "المجال الذي تعمل لديه", content: "تم اضافة المجال" },
      ],
    },
    {
      title: "ذو تأثير كبير",
      items: [
        {
          label: "العنوان الرئيسي",
          content:
            '"مصمم واجهة المستخدم وتجربة المستخدم"\nالعنوان قصير للغاية، حيث يتكون من 3 كلمات أو 14 حرفًا. عناوين LinkedIn الجيدة تتكون من 6 إلى 12 كلمة، وتستفيد من حد 120 حرفًا.\nلقد وجدنا مصمم واجهة المستخدم في عنوانك.\nلقد وجدنا واجهة المستخدم في عنوانك.\nلم يتم استخدام الأحرف الخاصة بشكل مفرط في عنوان ملفك الشخصي.\n\nعلى سبيل المثال:\n"مصمم واجهة المستخدم وتجربة المستخدم في شركة Deluxe Corporation" - عنوان نموذجي',
        },
      ],
    },
    { title: "خبرة العمل", items: [] },
    { title: "المهارات الأساسية (بناءً على أوصاف الوظيفة)", items: [] },
    { title: "المهارات المشتركة (بناءً على ملفك الشخصي مجالك)", items: [] },
    { title: "التعليم", items: [] },
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center p-8 text-base text-right bg-white min-w-[240px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] text-neutral-800 w-[796px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        {analysisItems.map((item, index) => (
          <AnalysisCard key={index} title={item.title} items={item.items} />
        ))}
      </div>
    </section>
  );
};

export default AnalysisSection;
