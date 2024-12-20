import React, { useState, useEffect } from 'react';
import icon from "../../../../../src/assets/personltyTest/Vector.png";
import "./scrollbar.css";

const PrivacyPolicy = ({ onSave }) => {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize',   
 handleResize);
  }, []);
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
      <main className={`flex relative flex-col justify-center bg-white rounded-3xl min-w-[300px] max-w-[700px] pt-20 pb-8 overflow-hidden ${isMobile ? 'px-2 py-6' : 'max-md:px-5 max-md:py-24'}`}>
        {/* <main className="flex relative flex-col justify-center bg-white rounded-3xl min-w-[300px] max-w-[700px] pt-20 pb-8 overflow-hidden max-md:px-5 max-md:py-24"> */}
          <h1 className="flex z-0 flex-col w-full text-3xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full">
            سياسة الخصوصية
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
                مقدمة
                <br />
                تحدد سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات
                الشخصية التي نقدمها عبر موقع [اسم الموقع] (يشار إليه بـ
                "الموقع"). نحن ملتزمون بحماية خصوصيتك وضمان أمان بياناتك
                الشخصية.
                <br />
                1. المعلومات التي نقوم بجمعها
                <br />
                - **المعلومات الشخصية**: قد نقوم بجمع المعلومات الشخصية التي
                تقدمها طواعية عند التسجيل في الموقع أو استخدام خدماتنا، مثل
                الاسم، البريد الإلكتروني، رقم الهاتف، ومعلومات الحساب.
                <br />
                - **المعلومات غير الشخصية**: نقوم بجمع معلومات غير شخصية مثل
                عنوان IP، نوع المتصفح، صفحات الموقع التي تزورها، وتاريخ ووقت
                الزيارة. تستخدم هذه المعلومات لتحسين تجربة المستخدم.
                <br />
                2. كيفية استخدام المعلومات
                <br />
                - **تحسين الخدمة**: نستخدم المعلومات لتقديم وتحسين خدماتنا
                وتخصيص تجربتك على الموقع.
                <br />
                - **التواصل**: نستخدم معلومات الاتصال للتواصل معك بشأن حسابك،
                التحديثات، والعروض الترويجية، إلا إذا طلبت عدم تلقي هذه الرسائل.
                <br />
                - **تحليل البيانات**: قد نستخدم المعلومات لتحليل كيفية استخدام
                الموقع وتحسين أدائه وتجربة المستخدم.
                <br />
                **3. مشاركة المعلومات**
                <br />
                - **مع الأطراف الثالثة**: لا نقوم ببيع أو تأجير معلوماتك الشخصية
                إلى أطراف ثالثة. قد نشارك المعلومات مع مقدمي الخدمات الذين
                يعملون نيابة عنا، مثل شركات الاستضافة، خدمات التحليل، والدعم
                التقني، ولكن فقط بقدر ما هو ضروري لأداء مهامهم.
                <br />
                - **الامتثال للقوانين**: قد نكشف عن المعلومات إذا كان ذلك
                مطلوبًا بموجب القانون أو في حال تلقي إشعار قانوني يلزمنا بالكشف
                عن المعلومات.
                <br />
                **4. حماية المعلومات**
                <br />
                - **الأمان**: نتخذ تدابير أمنية معقولة لحماية المعلومات الشخصية
                من الوصول غير المصرح به، التعديل، أو الكشف. يشمل ذلك استخدام
                تقنيات التشفير وإجراءات الأمان المادية والإدارية.
                <br />
                - **المسؤولية**: رغم أننا نتخذ خطوات لحماية بياناتك، لا يمكن
                ضمان أمان البيانات بنسبة 100% على الإنترنت.
                <br />
                **5. ملفات تعريف الارتباط (Cookies)**
                <br />
                - **استخدام ملفات تعريف الارتباط**: قد نستخدم ملفات تعريف
                الارتباط لتحسين تجربتك على الموقع، مثل تذكر تفضيلاتك وتخصيص
                المحتوى.
                <br />
                - **إدارة ملفات تعريف الارتباط**: يمكنك ضبط متصفحك لرفض ملفات
                تعريف الارتباط أو تنبيهك عند إرسالها، لكن قد يؤثر ذلك على قدرتك
                على استخدام بعض ميزات الموقع.
                <br />
                **6. حقوق المستخدمين**
                <br />
                - **الوصول والتصحيح**: لديك الحق في طلب الوصول إلى معلوماتك
                الشخصية وتصحيحها إذا كانت غير دقيقة.
                <br />
                - **إلغاء الاشتراك**: يمكنك إلغاء الاشتراك من تلقي رسائل التسويق
                عبر البريد الإلكتروني في أي وقت من خلال الروابط الموجودة في
                رسائل البريد الإلكتروني أو عن طريق الاتصال بنا.
                <br />
                **7. روابط إلى مواقع أخرى**
                <br />
                - **مواقع خارجية**: قد يحتوي الموقع على روابط لمواقع أخرى غير
                مملوكة أو خاضعة لسيطرتنا. نحن غير مسؤولين عن سياسات الخصوصية أو
                محتوى هذه المواقع.
                <br />
                **8. تغييرات على سياسة الخصوصية**
                <br />
                - **التحديثات**: قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر.
                سيتم نشر التغييرات على هذه الصفحة، ويعتبر استمرارك في استخدام
                الموقع بعد نشر التغييرات قبولًا لهذه التعديلات.
                <br />
                **9. الاتصال بنا**
                <br />
                - **استفسارات**: إذا كان لديك أي استفسارات حول سياسة الخصوصية
                هذه أو ممارساتنا، يمكنك الاتصال بنا عبر البريد الإلكتروني على
                [البريد الإلكتروني] أو الهاتف على [رقم الهاتف].
                <br />
                **10. الأحكام النهائية**
                <br />
                - **القانون المطبق**: تخضع سياسة الخصوصية هذه لقوانين [الدولة]
                وتفسر وفقًا لها.
                <br />
                ---
                <br />
                تأكد من مراجعة سياسة الخصوصية هذه مع مستشار قانوني لتتأكد من
                أنها تلتزم بالقوانين المحلية والدولية المتعلقة بحماية البيانات.
                <br />
              </p>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default PrivacyPolicy;
