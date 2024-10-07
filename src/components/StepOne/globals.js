let answers = [];
let additionalSkills = []; 
let additionalSkillsForSendSkills = []; 

const setAnswersGlobl = (newAnswers) => {
  answers = newAnswers;
};

const getAnswersGlobl = () => answers;

const addAnswer = (answer) => {
  if (!answers.includes(answer)) {
    answers.push(answer);
  }
};

const removeAnswer = (answer) => {
  answers = answers.filter((a) => a !== answer);
};

const setadditionalSkillsForSendSkills = (skills) => {
  additionalSkillsForSendSkills = skills;
  console.log("Additional Skills Updated for send skills:", additionalSkillsForSendSkills);
};

const getadditionalSkillsForSendSkills = () => additionalSkillsForSendSkills;

const setAdditionalSkills = (skills) => {
  additionalSkills = skills;
  console.log("Additional Skills Updated:", additionalSkills);
};

const getGlobalData = () => ({
  answers,
  additional_skills: additionalSkills,
});

// for states : yes or no 
let selectedValueGlobal = "yes"; 
const setSelectedValueGlobal = (value) => {
  selectedValueGlobal = value;
};

const getSelectedValueGlobal = () => selectedValueGlobal;

// skills for yes state
let skillsChosen = [];

const setskillsChosen = (selectedSkills) => {
  skillsChosen = selectedSkills;
  
  console.log("skillsChosen in step one YES Updated:", skillsChosen);
};

const getskillsChosen = () => skillsChosen;

export { setAnswersGlobl, addAnswer, removeAnswer, setAdditionalSkills, getGlobalData, getAnswersGlobl , setSelectedValueGlobal, getSelectedValueGlobal, setskillsChosen, getskillsChosen, setadditionalSkillsForSendSkills, getadditionalSkillsForSendSkills};