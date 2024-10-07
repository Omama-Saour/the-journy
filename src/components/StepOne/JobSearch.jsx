import React, { useState, useEffect } from "react";
import SkillsSection from "./CareerGuidance/SkillsSection";
import NoState from "./NoState";
import vec from "../../assets/StepOne/Vector.png";
import search from "../../assets/StepOne/fi_search.png";
import PersonalityTestModal from "../Modals/StepOne/PersonalityTestModal/PersonalityTestModal";
import { YesGetJobTitles, YesSendJobGetSkills } from "../../modules/steps/stepone/service";
import Loading from "./Loading"; 
import {setSelectedValueGlobal} from "./globals";

const JobSearch = () => {
  const [selectedValue, setSelectedValue] = useState("yes");
  const [isEditingNo, setIsEditingNo] = useState(false);
  const [jobTitles, setJobTitles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobTitles, setFilteredJobTitles] = useState([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState(null);
  const [skills, setSkills] = useState([]); 
  const [softSkills, setSoftSkills] = useState([]); 
  const [loadingSkills, setLoadingSkills] = useState(false);
  const [loadingJobTitles, setLoadingJobTitles] = useState(false);

  useEffect(() => {
    const fetchJobTitles = async () => {
      setLoadingJobTitles(true);
      try {
        const response = await YesGetJobTitles();
        setJobTitles(response.data.job_titles);
        setFilteredJobTitles(response.data.job_titles);
      } catch (error) {
        console.error("Error fetching job titles:", error);
      } finally {
        setLoadingJobTitles(false);
      }
    };

    fetchJobTitles();
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setFilteredJobTitles(
      jobTitles.filter(
        (job) =>
          job.arabic.includes(query) || job.english.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleJobTitleSelect = (jobTitle) => {
    setSelectedJobTitle(jobTitle);
    setSearchQuery("");
    fetchSkills(jobTitle);
  };
  const fetchSkills = async (jobTitle) => {
    setLoadingSkills(true); // Start loading
    let attempts = 0;
    const maxAttempts = 20;
  
    while (attempts < maxAttempts) {
      try {
        const response = await YesSendJobGetSkills({ job_title: jobTitle.english });
        setSkills(response.data.hard_skills);
        setSoftSkills(response.data.soft_skills); 
        console.log(attempts);
        console.log(response);
        setLoadingSkills(false); 
        break; 
      } catch (error) {
        attempts++;
        console.log(attempts);
        if (attempts >= maxAttempts) {
          console.error("Error fetching skills:", error);
          alert("حدث خطأ في تحميل المهارات، أعد اختيار المسمى الوظيفي أو أعد تحميل الصفحة");
          setLoadingSkills(false); // Stop loading after max attempts
        }
      }
    }
  };

  const handleEditClickNo = () => {
    setSelectedValue("no");
    setSelectedValueGlobal("no");
    setIsEditingNo(true);
  };

  const handleCloseNo = () => {
    setIsEditingNo(false);
  };

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
                checked={selectedValue === "no"}
                onChange={handleEditClickNo}
              />
              {selectedValue === "no" ? (
                <img loading="lazy" src={vec} alt="Selected" className="w-5 aspect-square" />
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
                checked={selectedValue === "yes"}
                onChange={() => {setSelectedValue("yes"); setSelectedValueGlobal("yes");}}
              />
              {selectedValue === "yes" ? (
                <img loading="lazy" src={vec} alt="Selected" className="w-5 aspect-square" />
              ) : (
                <div className="w-5 h-5 border border-black rounded-full" />
              )}
            </label>
          </div>
        </div>

        {selectedValue === "yes" && (
          <>
            <div className="flex flex-col w-full mt-8 max-md:max-w-full">
              <label htmlFor="job" className="text-lg font-bold leading-snug text-right text-neutral-800 max-md:max-w-full">
                ما هي وظيفتك؟
              </label>

              <div className="relative">
                <img loading="lazy" src={search} alt="" className="absolute right-4 top-6 object-contain w-6 aspect-square" />
                <input
                  type="text"
                  id="job"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="flex gap-2.5 items-center pr-12 py-3 mt-2 w-full text-right bg-white border border-violet-200 border-solid min-h-[48px] rounded-[32px] max-md:max-w-full"
                  placeholder="...البحث عن طريق: عنوان الوظيفة، المنصب، الكلمات الرئيسية"
                />
              </div>

              {loadingJobTitles ? (
                <div dir="rtl" className="mt-4 text-right">جارٍ تحميل الوظائف...</div>
              ) : searchQuery.length === 0 ? (
                <div dir="rtl" className="mt-4 text-right">يرجى إدخال اسم وظيفة للبحث</div>
              ) : (
                <ul dir="rtl" className="mt-2 max-h-48 overflow-y-auto bg-white border border-neutral-200 rounded-lg">
                  {filteredJobTitles.map((job, index) => (
                    <li
                      key={index}
                      onClick={() => handleJobTitleSelect(job)}
                      className={`p-2 cursor-pointer hover:bg-neutral-100 ${
                        selectedJobTitle === job ? "bg-neutral-200" : ""
                      }`}
                    >
                      {job.arabic} 
                    </li>
                  ))}
                </ul>
              )}

              {selectedJobTitle && (
                <div className="mt-4 text-right">
                  <strong>الوظيفة المختارة:</strong> {selectedJobTitle.arabic}
                </div>
              )}
            </div>

            <Loading show={loadingSkills} /> 
            {!loadingSkills && <SkillsSection skills={skills} softSkills={softSkills} />} 
          </>
        )}

        {selectedValue === "no" && <NoState />}
        {isEditingNo && <PersonalityTestModal onSave={handleCloseNo} />}
      </div>
    </section>
  );
};

export default JobSearch;