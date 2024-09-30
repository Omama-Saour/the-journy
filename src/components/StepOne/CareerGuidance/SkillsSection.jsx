import React from "react";

const Skill = ({ name, isSelected = false }) => (
  <label className="flex items-center justify-between w-[164px] h-[42px] px-3 my-auto rounded-3xl border border-violet-200 border-solid">
    <div>
      </div>
    <span className="text-sm leading-relaxed text-neutral-800 text-right">
      {name}
    </span>
    <input
      type="checkbox"
      defaultChecked={isSelected}
      className="w-5 h-5 rounded-full border-2 border-solid border-neutral-800 appearance-none checked:bg-black checked:border-black"
    />
  </label>
);

const SkillsSection = () => {
  const skills = [
    { name: "تجربة المستخدم", isSelected: false },
    { name: "Adobe XD", isSelected: false },
    { name: "Sketch", isSelected: false },
    { name: "Figma", isSelected: true },
    { name: "التجربة الافتراضية", isSelected: false },
    { name: "تحليل بيانات", isSelected: false },
    { name: "الرسومات المتجهة", isSelected: true },
    { name: "واجهات متجاوبة", isSelected: false },
    { name: "تصميم لوجو", isSelected: false },
    { name: "التصميم الجرافيكي", isSelected: true },
    { name: "تصميم ويب", isSelected: false },
    { name: "الواقع المعزز", isSelected: false },
    { name: "أساسيات HTML", isSelected: false },
    { name: "نماذج التصميم", isSelected: true },
  ];

  return (
    <div className="flex flex-col justify-center mt-8 w-full max-md:max-w-full">
      <h2 className="text-lg font-bold leading-snug text-right text-neutral-800 max-md:max-w-full">
        اهم المهارات لديك
      </h2>
      <div className="flex flex-wrap flex-row-reverse gap-6 items-center mt-2 w-full max-md:max-w-full">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} isSelected={skill.isSelected} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
