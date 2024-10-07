import React, { useState, useEffect } from "react";
import { setskillsChosen } from "../globals";
import vec from "../../../assets/StepOne/Vector.png";

const Skill = ({ name, isSelected = false, onSelect }) => (
  <label  dir="rtl" 
  className="flex items-center w-[164px] h-[42px] px-3 my-auto rounded-3xl border border-violet-200 border-solid"
  > 
    {/* <input
      type="checkbox"
      defaultChecked={isSelected}
      className="w-5 h-5 rounded-full border-2 border-solid border-neutral-800 appearance-none checked:bg-black checked:border-black"
      onChange={onSelect}
    /> */}
    <input
      type="checkbox"
      className="hidden" 
      // checked={isSelected}
      defaultChecked={isSelected}
      onChange={onSelect}
    />
    {isSelected ? (
      <img loading="lazy" src={vec} alt="Selected" className="w-5 aspect-square" />
    ) : (
      <div className="w-5 h-5 border border-black rounded-full" />
    )}
    <span className="pr-2 text-sm leading-relaxed text-neutral-800 text-right">
      {name}
    </span>

  </label>
);

const SkillsSection = ({ skills, softSkills }) => {
  const initialSelectedSkills = [
    ...skills.map((skill) => skill),
    ...softSkills.map((skill) => skill),
  ];
  const [selectedSkills, setSelectedSkills] = useState(initialSelectedSkills);

  // Set global skillsChosen once on mount
//   useEffect(() => {
//   setskillsChosen({ skills: selectedSkills });
// }, [selectedSkills, initialSelectedSkills]);
useEffect(() => {
  // Transform the selected skills to the desired format
  const transformedSkills = selectedSkills.map(skill => ({
    skill_name_ar: skill.skill_ar,
    skill_name: skill.skill_en,
  }));

  setskillsChosen({ skills: transformedSkills });
}, [selectedSkills]);

  const handleSkillSelect = (skillName) => {
    setSelectedSkills((prev) => {
      const newSelectedSkills = prev.includes(skillName)
        ? prev.filter((skill) => skill !== skillName) // Deselect skill
        : [...prev, skillName]; // Select skill
      return newSelectedSkills;
    });
  };

  // Check if there are no skills
  const hasSkills = skills.length > 0 || softSkills.length > 0;

  return (
    <div className="flex flex-col justify-center mt-8 w-full max-md:max-w-full">
      <h2 className="text-lg font-bold leading-snug text-right text-neutral-800 max-md:max-w-full">
        اهم المهارات لديك
      </h2>
      <div className="flex flex-wrap flex-row-reverse gap-6 items-center mt-2 w-full max-md:max-w-full">
        {hasSkills ? (
          <>
            {skills.map((skill, index) => (
              <Skill
                key={index}
                name={skill.skill_ar}
                isSelected={selectedSkills.includes(skill)}
                onSelect={() => handleSkillSelect(skill)}
              />
            ))}
            {softSkills.map((skill, index) => (
              <Skill
                key={index}
                name={skill.skill_ar}
                isSelected={selectedSkills.includes(skill)}
                onSelect={() => handleSkillSelect(skill)}
              />
            ))}
          </>
        ) : (
          <p dir="rtl" className="mt-2 text-right">
            قم باختيار المسمى الوظيفي أولاً، ليتم تحميل المهارات.
          </p>
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
