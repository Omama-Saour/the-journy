// No State:
// get skilles to search & questions 
export const NoGetSkilles = '/skills'
export const NoGetQuestions ='/personality_test/questions' // display ar and send value(english)

// send resault(answers) of skills & questions
export const SendResult = '/personality_test/result' // get resault: send answers and recive resault // select skilles // select only one job title 
export const SendSkills = '/array/skills'

// send skilles & job title
   // SendSkills again
export const SendJobTitle = '/cv'


// Yes State:
// get job titles to search on it 
export const GetJobTitles ='/job_titles' // docker

// scrapint : send job title and get 
export const SendJobGetSkills = '/job_title_pathway' // docker

// SendSkills again (selected skills)

// Optional Steps: 
// LinkedIn URL
export const SendLinkedInURL = '/user/linkedin-url'
// Upload CV File
export const UploadCVFile = '/extract-text' // docker
export const PostExtractedCV = '/cvs' 
