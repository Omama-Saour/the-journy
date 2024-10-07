import React, { useState, useEffect } from "react";
import SkillsSectionSearch from "./CareerGuidance/SkillsSectionSearch";
import PersonalityTest from "./CareerGuidance/PersonalityTest";
import { NoGetSkilles, NoGetQuestoins } from "../../modules/steps/stepone/service"; 

const NoState = () => {
    const [skills, setSkills] = useState([]);
    const [questions, setQuestions] = useState([]); 
    const [loadingSkills, setLoadingSkills] = useState(true); 
    const [loadingQuestions, setLoadingQuestions] = useState(true); 

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await NoGetSkilles(); 
                console.log("Skills API Response:", response);
                setSkills(response.data.skills); 
            } catch (error) {
                console.error("Error fetching skills:", error);
            } finally {
                setLoadingSkills(false); 
            }
        };

        const fetchQuestions = async () => {
            try {
                const response = await NoGetQuestoins(); 
                console.log("Questions API Response:", response);
                setQuestions(response.data.questions); 
            } catch (error) {
                console.error("Error fetching questions:", error);
            } finally {
                setLoadingQuestions(false); 
            }
        };

        fetchSkills();
        fetchQuestions(); // Fetch questions on component mount
    }, []);

    return (
        <>
            {loadingSkills || loadingQuestions ? ( 
                <div dir="rtl" className="text-center mt-20 mb-20">الرجاء الانتظار حتى يتم تحميل البيانات..</div>
            ) : (
                <>
                    <SkillsSectionSearch skillss={skills} />
                    <PersonalityTest questionss={questions} /> {/* Pass questions to PersonalityTest */}
                </>
            )}
        </>
    );
};

export default NoState;