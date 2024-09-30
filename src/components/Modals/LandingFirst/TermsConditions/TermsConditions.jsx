import React from "react";
import icon from "../../../../../src/assets/personltyTest/Vector.png";
import "./scrollbar.css";

const TermsConditions = ({ onSave }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        <main className="flex relative flex-col justify-center bg-white rounded-3xl min-w-[300px] max-w-[700px] pt-20 pb-8 overflow-hidden max-md:px-5 max-md:py-24">
          <h1 className="flex z-0 flex-col w-full text-3xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full">
            الشروط والأحكام
          </h1>
          <div className="flex absolute top-10 right-10 z-0 items-end w-[20px]">
            <img
              loading="lazy"
              src={icon}
              className="object-contain self-stretch my-auto w-8 aspect-square"
              alt=""
              onClick={onSave}
            />
          </div>
          <div className="overflow-y-scroll max-h-[500px] w-full px-5 direction-ltr custom-scrollbar">
            <form className="flex z-0 flex-col justify-center mt-8 w-full">
              <p dir="rtl">
                مقدمة:
                <br />
                تحدد هذه الشروط والأحكام القواعد والاتفاقيات التي تحكم استخدام
                موقع [اسم الموقع] (يشار إليه بـ "الموقع")، المملوك والمدار من
                قبل شركة [اسم الشركة] (يشار إليها بـ "الشركة"). باستخدامك
                للموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا
                توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.
                <br />
                1. تعريفات
                <br />
                - **الموقع**: يشمل جميع الصفحات والمحتويات المتاحة على [عنوان
                الموقع] وجميع الخدمات ذات الصلة التي تقدمها الشركة عبر الإنترنت.
                <br />
                - **الخدمات**: تشمل الاستشارات الإدارية، كتابة السير الذاتية،
                والتحضير للمقابلات المقدمة عبر الموقع.
                <br />
                2. الاستخدام المسموح به
                <br />
                - **الأهلية**: يجب أن يكون عمرك 18 عامًا أو أكثر لاستخدام الموقع
                والخدمات المقدمة.
                <br />
                - **تسجيل المستخدم**: يتطلب التسجيل في الموقع تقديم معلومات
                دقيقة وكاملة. أنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة
                المرور.
                <br />
                3. حقوق الملكية
                <br />
                - **حقوق الملكية الفكرية**: جميع المحتويات على الموقع، بما في
                ذلك النصوص والصور والرسوم البيانية والبرمجيات، هي ملكية فكرية
                للشركة أو مرخصة لها. لا يجوز لك استخدام أو نسخ أو توزيع أي من
                هذه المحتويات دون إذن مسبق.
                <br />
                **4. مسؤوليات المستخدم**
                <br />
                - **الالتزام بالقوانين**: يجب على المستخدم الامتثال لجميع
                القوانين واللوائح المحلية والدولية عند استخدام الموقع.
                <br />
                - **الاستخدام المحظور**: لا يجوز للمستخدم استخدام الموقع لأي
                أغراض غير قانونية أو غير مصرح بها، بما في ذلك التهديدات، التعدي
                على حقوق الآخرين، أو نشر محتوى ضار.
                <br />
                **5. تعديل وإيقاف الخدمة**
                <br />
                - **تعديل الخدمة**: تحتفظ الشركة بالحق في تعديل أو تحديث محتوى
                الموقع أو الخدمات المقدمة دون إشعار مسبق.
                <br />
                - **إيقاف الخدمة**: قد تقوم الشركة بتعليق أو إيقاف الوصول إلى
                الموقع في أي وقت ولأي سبب، بما في ذلك الصيانة أو الانتهاكات
                المحتملة لهذه الشروط.
                <br />
                **6. الروابط إلى مواقع أخرى**
                <br />
                - **روابط خارجية**: قد يحتوي الموقع على روابط لمواقع إلكترونية
                أخرى. الشركة ليست مسؤولة عن محتوى أو ممارسات تلك المواقع.
                <br />
                **7. إخلاء المسؤولية**
                <br />
                - **الضمانات**: يقدم الموقع والخدمات "كما هي" و"حسب توفرها"، دون
                أي ضمانات صريحة أو ضمنية بشأن الدقة أو الاعتمادية.
                <br />
                - **التعويض**: تتنصل الشركة من أي مسؤولية عن أي أضرار مباشرة أو
                غير مباشرة ناتجة عن استخدام الموقع أو عدم القدرة على استخدامه.
                <br />
                **8. حماية البيانات**
                <br />
                - **الخصوصية**: يتم جمع واستخدام المعلومات الشخصية وفقًا لسياسة
                الخصوصية الخاصة بالشركة، والتي تعتبر جزءًا من هذه الشروط
                والأحكام.
                <br />
                **9. حل النزاعات**
                <br />
                - **القانون المطبق**: تخضع هذه الشروط والأحكام لقوانين [الدولة]
                وتفسر وفقًا لها.
                <br />
                - **التحكيم**: أي نزاع ينشأ عن استخدام الموقع أو هذه الشروط يتم
                حله عن طريق التحكيم وفقًا لقواعد [هيئة التحكيم] في [الدولة].
                <br />
                **10. التعديلات**
                <br />
                - **تحديث الشروط**: تحتفظ الشركة بالحق في تعديل هذه الشروط
                والأحكام في أي وقت. سيتم نشر أي تغييرات على الموقع وتعتبر سارية
                المفعول فور نشرها.
                <br />
                **11. التواصل**
                <br />
                - **اتصل بنا**: لأي استفسارات أو شكاوى بشأن هذه الشروط والأحكام،
                يمكنك التواصل معنا عبر البريد الإلكتروني على [البريد الإلكتروني]
                أو الهاتف على [رقم الهاتف].
                <br />
                **12. الأحكام النهائية**
                <br />
                - **الاستمرارية**: إذا تبين أن أي بند من هذه الشروط غير قانوني
                أو غير قابل للتنفيذ، فإن البنود الأخرى ستظل سارية المفعول.
                <br />
                - **الاتفاق الكامل**: تشكل هذه الشروط والأحكام الاتفاق الكامل
                بينك وبين الشركة بشأن استخدام الموقع.
                <br />
                ---
                <br />
                تأكد من مراجعة هذه الشروط والأحكام مع مستشار قانوني لضمان
                تغطيتها لجميع الجوانب القانونية المتعلقة بموقعك وأنها تتوافق مع
                القوانين المحلية والدولية المعمول بها.
                <br />
              </p>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default TermsConditions;
