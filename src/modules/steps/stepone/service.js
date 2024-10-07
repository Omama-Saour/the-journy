import { apidocer } from "../../../boot/axios";
import { api } from "../../../boot/axios";
import { apidocerFile } from "../../../boot/axios";
import * as ep from "./end_points";

// NO State

// Get Skilles
export const NoGetSkilles = (data) => {
  return apidocer.get(ep.NoGetSkilles, data);
};

// Get Questoins
export const NoGetQuestoins = (data) => {
  return apidocer.get(ep.NoGetQuestions, data);
};

// send resault and get: suggested_hard_skills && suggested_soft_skills && top_relevant_job_titles
export const SendSkillsAnswers = (data) => {
  return apidocer.post(ep.SendResult, data);
};

// send jobtitle 
export const SendJobTitle = (data) => {
  return api.post(ep.SendJobTitle, data);
};

// send skills
export const SendSkills = (data) => {
  return api.post(ep.SendSkills, data);
};


// YES State

// Get Job Titles to Search
export const YesGetJobTitles = (data) => {
  return apidocer.get(ep.GetJobTitles, data);
};

// Send Job Get Skills
export const YesSendJobGetSkills = (data) => {
  return apidocer.post(ep.SendJobGetSkills, data);
};

// send skills 

// Optional Steps:
export const OptionalLinkedInURL = (data) => {
  return api.put(ep.SendLinkedInURL, data);
} 

export const OptionalUploadCV = (data) => {
  return apidocerFile.post(ep.UploadCVFile, data);
} 

// Post full CV that extracted
export const SendExtractedCV = (data) => {
  return api.post(ep.PostExtractedCV, data);
}