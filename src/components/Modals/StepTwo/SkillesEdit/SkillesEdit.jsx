import React, { useState } from "react";
import InputField from "../EducationForm/InputField";
import Button from "../EducationForm/Button";
import SkillesEditCard from "./SkillesEditCard";
import icon from "../../../../../src/assets/personltyTest/Vector.png";
import plus from "../../../../../src/assets/StepTwo/plus.png";
import { Post_Skill } from "../../../../modules/steps/steptwo/service"; 
import { Delete_Skill } from "../../../../modules/steps/steptwo/service";      

const SkillesEdit = ({ onSave, skills }) => {
  const [skill, setSkill] = useState("");
  const [skillsList, setSkillsList] = useState([]); 
  const [skillsListt, setSkillsListt] = useState(skills); 
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [deletingId, setDeletingId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const handleSkillChange = (e) => {
    setSkill(e.target.value); 
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await Post_Skill({ "skill_name": skill }); 
      const newSkill = { "skill_name": skill , id: response.data.id };
      setSkillsList([...skillsList,newSkill]);
      console.log(response) 
      setSkill(""); 
      setError(null); 
    } catch (error) {
      console.log(error) 
      setError("فشل في إضافة المهارة. حاول مرة أخرى"); 
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleteLoading(true);
    setDeleteError(null);
    setDeletingId(id);
    try {
      let response = await Delete_Skill(id);

// Update educationList state to remove the item
setSkillsList((prevList) => prevList.filter((edu) => edu.id !== id));

// If education is also in the state and you want to update it
setSkillsListt((prevEducation) => prevEducation.filter((edu) => edu.id !== id));

      console.log(response)
    } catch (error) {
      setDeleteError("فشل في حذف المهارة. حاول مرة أخرى");
    } finally {
      setDeleteLoading(false);
      setDeletingId(null);
    }
  };


  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <section className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center px-5 py-4 z-50">
        <main className="flex relative flex-col justify-center bg-white rounded-3xl min-w-[850px] pt-20 pb-8 overflow-hidden max-md:px-5 max-md:py-24">
          <h1 className="flex z-0 flex-col w-full text-3xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full">
            تعديل المهارات
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
          <div className="overflow-y-auto max-h-[500px] w-full px-5">
            <form className="flex z-0 flex-col justify-center mt-8 w-full">
              <div className="flex flex-wrap gap-8 items-start w-full text-sm text-neutral-800">
                <InputField
                  label="المهارة"
                  placeholder="أدخل اسم المهارة"
                  value={skill}
                  onChange={handleSkillChange} 
                />
              </div>

              <button
                className="flex gap-1 justify-center items-center self-center mt-4 text-base font-extrabold tracking-wider leading-snug text-neutral-800"
                onClick={handleAddSkill} 
                disabled={loading} 
              >
                {loading ? (
                  <div className="flex justify-center items-center mt-10">
                  <div className="loader"></div>{" "}
                
                </div>
                ) : (
                  <>
                    اضافة مهارة جديدة
                    <img
                      loading="lazy"
                      src={plus}
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                    />
                  </>
                )}
              </button>

              {/* Display error message */}
              {error && <p className="text-red-500 text-center mt-2">{error}</p>}

              {/* Display each skill added */}
              {skillsList.map((skillItem, index) => (
                <SkillesEditCard
                  key={index}
                  initialValues={{
                    skill: skill.skill_name_ar ? skill.skill_name_ar : skill.skill_name,
                    id: skillItem.id
                  }}
                  onDelete={() => handleDelete(skillItem.id)} 
                  deleteLoading={deletingId === skillItem.id} 
                />
              ))}

                {/* Display old skill */}
                {skillsListt.map((skill, index) => (
                <SkillesEditCard
                key={index}
                initialValues={{
                  skill: skill.skill_name_ar ? skill.skill_name_ar : skill.skill_name,
                  id: skill.id
                  }}
                  onDelete={() => handleDelete(skill.id)} 
                  deleteLoading={deletingId === skill.id}                 />
              ))}

              <Button label="حفظ" />
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default SkillesEdit;
