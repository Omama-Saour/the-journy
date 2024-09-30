import React, {useState} from "react";
import SkillsSection from "./CareerGuidance/SkillsSection";
import PersonalityTest from "./CareerGuidance/PersonalityTest";
import vec from "../../assets/StepOne/Vector.png";
import search from "../../assets/StepOne/fi_search.png";

const JobSearch = () => {
  const [selectedValue, setSelectedValue] = useState('yes');
  return (
    <section className="flex overflow-hidden flex-col justify-start p-8 bg-white min-w-[240px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] w-[796px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col justify-start w-full max-md:max-w-full">
          <h2 className="text-lg font-bold leading-snug mt-2 text-right text-neutral-800 max-md:max-w-full">
            هل أنت على علم بمسمى وظيفتك؟
          </h2>

          <div className="flex gap-6 items-start self-end mt-1">
      <label className="flex gap-2 justify-center items-center px-3 py-2 rounded-3xl border border-violet-200 border-solid cursor-pointer">
        <span className="self-stretch my-auto text-lg font-medium leading-none text-neutral-800">
          لا
        </span>
        <input
          type="radio"
          name="jobKnowledge"
          value="no"
          className="hidden"
          checked={selectedValue === 'no'}
          onChange={() => setSelectedValue('no')}
        />
        {selectedValue === 'no' ? (
          <img
            loading="lazy"
            src={vec}
            alt="Selected"
            className="w-5 aspect-square"
          />
        ) : (
          <div className="w-5 h-5 border border-black rounded-full" />
        )}
      </label>
      <label className="flex gap-2 justify-center items-center px-3 py-2 text-lg font-medium leading-none rounded-3xl border border-violet-200 border-solid text-neutral-800 cursor-pointer">
        <span className="self-stretch my-auto">نعم</span>
        <input
          type="radio"
          name="jobKnowledge"
          value="yes"
          className="hidden"
          checked={selectedValue === 'yes'}
          onChange={() => setSelectedValue('yes')}
        />
        {selectedValue === 'yes' ? (
          <img
            loading="lazy"
            src={vec}
            alt="Selected"
            className="w-5 aspect-square"
          />
        ) : (
          <div className="w-5 h-5 border border-black rounded-full" />
        )}
      </label>
    </div>
        </div>

        {selectedValue === 'yes' && (
        <div className="flex flex-col w-full mt-8 max-md:max-w-full">
          <label
            htmlFor="job"
            className="text-lg font-bold leading-snug text-right text-neutral-800 max-md:max-w-full"
          >
            ما هي وظيفتك؟
          </label>

          <div className="relative">
            <img
              loading="lazy"
              src={search}
              alt=""
              className="absolute right-4 top-6 object-contain w-6 aspect-square"
            />
            <input
              type="text"
              id="job"
              className="flex gap-2.5 items-center pr-12 py-3 mt-2 w-full text-right bg-white border border-violet-200 border-solid min-h-[48px] rounded-[32px] max-md:max-w-full"
              placeholder="...البحث عن طريق: عنوان الوظيفة، المنصب، الكلمات الرئيسية"
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
        )}
      </div>

      <SkillsSection />

      {selectedValue === 'no' && (
      <PersonalityTest />
      )}
    </section>
  );
};

export default JobSearch;
