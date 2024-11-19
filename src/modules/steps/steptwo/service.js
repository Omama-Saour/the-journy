import { api, apidocer } from "../../../boot/axios";
import * as ep from "./end_points";

// CV
export const Get_CV = (data) => {
  return api.get(ep.GetCV, data);
};

// personal information
export const Edit_Personal_Enformtion = (data) => {
  return api.put(ep.EditPersonalEnfo, data);
};

// summery
export const Get_Summries = (data) => {
  return api.get(ep.GetSummries, data);
};
export const Post_Summries = (data) => {
  return api.post(ep.PostSummries, data);
};
export const Edit_Summries = (data) => {
  return api.post(ep.Editummries, data);
};

// skill
export const Post_Skill = (data) => {
    return api.post(ep.PostSkill, data);
  };
export const Delete_Skill = (id ,data) => {
   return api.delete(ep.DeleteSkill+id, data);
  };

// references
export const Post_References = (data) => {
    return api.post(ep.PostReferences, data);
  };
  export const Delete_References = (id,data) => {
    return api.delete(ep.DeleteReferences+id, data);
  };

// education
export const Post_Education = (data) => {
    return api.post(ep.PostEducation, data);
  };
  export const Delete_Education = (id,data) => {
    return api.delete(ep.DeleteEducation+id, data);
  };

// languages
export const Post_Languages = (data) => {
    return api.post(ep.PostLanguages, data);
  };
  export const Delete_Languages = (id,data) => {
    return api.delete(ep.DeleteLanguages+id, data);
  };

// experiences 
export const Post_Experiences = (data) => {
    return api.post(ep.PostExperiences, data);
  };
  export const Delete_Experiences = (id,data) => {
    return api.delete(ep.DeleteExperiences+id, data);
  };

// responsibilities // + experiences id ??
export const Post_Responsibilities = (data) => {
    return api.post(ep.PostResponsibilities, data);
  };

  // certifacte
  // export const Delete_certifacte = (id,data) => {
  //   return api.delete(ep.certifacte+id, data);
  // };


// enhance 
export const Enhance_Experience = (data) => {
  return apidocer.post(ep.EnhanceExperience, data);
}

export const Enhance_Summery = (data) => {
  return apidocer.post(ep.EnhanceSummery, data);
}