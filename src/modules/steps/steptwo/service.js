import { api } from "../../../boot/axios";
import * as ep from "./end_points";

// summery
export const Get_Summries = (data) => {
  return api.get(ep.GetSummries, data);
};
export const Post_Summries = (data) => {
  return api.post(ep.PostSummries, data);
};
export const Edit_Summries = (data) => {
  return api.put(ep.Editummries, data);
};
export const Delete_Summries = (data) => {
  return api.delete(ep.DeleteSummries, data);
};


// skill
export const Post_Skill = (data) => {
    return api.post(ep.PostSkill, data);
  };

// references
export const Post_References = (data) => {
    return api.post(ep.PostReferences, data);
  };

// education
export const Post_Education = (data) => {
    return api.post(ep.PostEducation, data);
  };

// languages
export const Post_Languages = (data) => {
    return api.post(ep.PostLanguages, data);
  };

// experiences 
export const Post_Experiences = (data) => {
    return api.post(ep.PostExperiences, data);
  };

// responsibilities // + experiences id
export const Post_Responsibilities = (data) => {
    return api.post(ep.PostResponsibilities, data);
  };