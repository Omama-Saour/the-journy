import React, { useState, useEffect } from "react";
import search from "../../../assets/StepOne/fi_search.png";
import { setAdditionalSkills, setadditionalSkillsForSendSkills } from "../globals";
import vec from "../../../assets/StepOne/Vector.png";

const Skill = ({ name, isSelected, onToggle }) => (
  <label
    onClick={onToggle}
    dir="rtl"
    className="flex items-center w-[164px] h-[42px] px-3 my-auto rounded-3xl border border-violet-200 border-solid"
  >
    {/* <input
      type="checkbox"
      checked={isSelected} // Use checked to reflect selection state
      readOnly
      className="w-5 h-5 rounded-full border-2 border-solid border-neutral-800 appearance-none checked:bg-black checked:border-black"
    /> */}
    <input
      type="checkbox"
      className="hidden" 
      checked={isSelected}
      onChange={onToggle}
    />
    {isSelected ? (
      <img loading="lazy" src={vec} alt="Selected" className="w-5 aspect-square" />
    ) : (
      <div className="w-5 h-5 border border-black rounded-full" />
    )}
    <span className="pr-2 text-sm leading-relaxed text-neutral-800 text-right">
      {name} {/* Display the Arabic name */}
    </span>
  </label>
);

const SkillsSectionSearch = ({ skillss = [] }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Update the global additional skills whenever local selected skills change
  useEffect(() => {
    setAdditionalSkills(selectedSkills);
  }, [selectedSkills]);

  // Update the global additional skills for Send Skills 
  useEffect(() => {
    const skillsData = selectedSkills.map((skillName) => {
      const skill = skillss.find(skill => skill.skill_name === skillName);
      return {
        skill_name: skillName,
        skill_name_ar: skill ? skill.arabic_name : skillName // Fallback to skillName if not found
      };
    });

    setadditionalSkillsForSendSkills({ skills: skillsData });
  }, [selectedSkills, skillss]);

  const handleToggleSkill = (skillName) => {
    setSelectedSkills(
      (prev) =>
        prev.includes(skillName)
          ? prev.filter((s) => s !== skillName) // Remove the skill if already selected
          : [...prev, skillName] // Add the skill if not selected
    );
  };

  const filteredSkills = searchTerm
    ? skillss.filter(
        (skill) =>
          skill.arabic_name.includes(searchTerm) ||
          skill.skill_name.includes(searchTerm)
      ) // Filter based on search term
    : skillss.filter((skill) => selectedSkills.includes(skill.skill_name)); // Show only selected skills if empty

    const displayedSkills = filteredSkills.slice(0, 12); // Show only the first 8 skills
  return (
    <div className="flex flex-col justify-center mt-8 w-full max-md:max-w-full rtl">
      <h2 className="text-lg font-bold leading-snug text-right text-neutral-800 max-md:max-w-full">
        اهم المهارات لديك
      </h2>

      <div className="flex flex-col w-full mb-8 max-md:max-w-full">
        <div className="relative">
          <img
            loading="lazy"
            src={search}
            alt="Search Icon"
            className="absolute right-4 top-6 object-contain w-6 aspect-square"
          />
          <input
            type="text"
            id="sk"
            className="flex gap-2.5 items-center pr-12 py-3 mt-2 w-full text-right bg-white border border-violet-200 border-solid min-h-[48px] rounded-[32px] max-md:max-w-full"
            dir="rtl"
            placeholder=" البحث عن طريق: اسم المهارة، الكلمات الرئيسية..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="absolute left-4 top-4 object-contain w-15 aspect-square text-base font-medium leading-none text-center text-white whitespace-nowrap bg-neutral-800 min-h-[40px] rounded-[32px] max-md:px-5"
            style={{
              padding: "24px, 50px, 24px, 50px",
              borderRadius: "32px",
              width: "80px",
              height: "35px",
            }}
          >
            أبحث
          </button>
        </div>
      </div>

      <div className="flex flex-wrap flex-row-reverse gap-6 items-center mt-2 w-full max-md:max-w-full">
        {displayedSkills.length > 0 ? (
          displayedSkills.map((skill, index) => (
            <Skill
              key={index} // Use a unique key if available (like skill.id)
              name={skill.arabic_name} // Display the Arabic name
              isSelected={selectedSkills.includes(skill.skill_name)} // Check if skill.skill_name is selected
              onToggle={() => handleToggleSkill(skill.skill_name)} // Toggle selection using skill.skill_name
            />
          ))
        ) : (
          <p className="text-neutral-600">لا توجد مهارات مختارة</p>
        )}
      </div>
    </div>
  );
};

export default SkillsSectionSearch;
