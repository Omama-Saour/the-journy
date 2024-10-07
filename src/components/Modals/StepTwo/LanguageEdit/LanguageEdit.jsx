import React, { useState } from "react";
import InputField from "../EducationForm/InputField";
import Button from "../EducationForm/Button";
import LanguageEditCard from "./LanguageEditCard";
import icon from "../../../../../src/assets/personltyTest/Vector.png";
import plus from "../../../../../src/assets/StepTwo/plus.png";
import { Post_Languages } from "../../../../modules/steps/steptwo/service"; 
import { Delete_Languages } from "../../../../modules/steps/steptwo/service"; 

const LanguageEdit = ({ onSave , languages}) => {
  const [language, setLanguage] = useState(""); 
  const [languagesList, setLanguagesList] = useState([]); 
  const [languagesListt, setLanguagesListt] = useState(languages); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [deletingId, setDeletingId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleAddLanguage = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before API call
    try {
      const response = await Post_Languages({ "language_name": language }); 
      const newLanguage = { ...response.data, id: response.data.id };
      setLanguagesList([...languagesList, newLanguage]);
      setLanguage(""); 
      setError(null); 
    } catch (error) {
      setError("فشل في إضافة اللغة. حاول مرة أخرى");
    } finally {
      setLoading(false); 
    }
  };

  const handleDelete = async (id) => {
    setDeleteLoading(true);
    setDeleteError(null);
    setDeletingId(id);
    try {
      let response = await Delete_Languages(id);

setLanguagesList((prevList) => prevList.filter((edu) => edu.id !== id));

setLanguagesListt((prevEducation) => prevEducation.filter((edu) => edu.id !== id));

      console.log(response)
    } catch (error) {
      setDeleteError("فشل في حذف اللغة. حاول مرة أخرى");
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
            تعديل اللغات
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
                  label="اللغة"
                  placeholder="أدخل اسم اللغة"
                  value={language}
                  onChange={handleLanguageChange} 
                />
              </div>

              <button
                className="flex gap-1 justify-center items-center self-center mt-4 text-base font-extrabold tracking-wider leading-snug text-neutral-800"
                onClick={handleAddLanguage} 
                disabled={loading}
              >
                {loading ? (
                  <div className="flex justify-center items-center mt-10">
                    <div className="loader"></div> {/* Add a loader */}
                  </div>
                ) : (
                  <>
                    اضافة لغة جديدة
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

              {/* Display each added language */}
              {languagesList.map((languageItem, index) => (
                <LanguageEditCard
                  key={index}
                  initialValues={{
                    skill: languageItem.language_name, 
                    id: languageItem.id
                  }}
                  onDelete={() => handleDelete(languageItem.id)} 
                  deleteLoading={deletingId === languageItem.id} 
                />

              ))}

                 {/* Display old languages */}
                 {languagesListt.map((languages, index) => (
                <LanguageEditCard
                key={index}
                initialValues={{
                  skill: languages.language_name, 
                  id: languages.id
                }}
                onDelete={() => handleDelete(languages.id)} 
                deleteLoading={deletingId === languages.id} 
                />
              ))}

              <Button label="حفظ" />
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default LanguageEdit;
