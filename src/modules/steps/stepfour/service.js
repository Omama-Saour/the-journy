import { api } from "../../../boot/axios";
import * as ep from "./end_points";

// Get Questions numbers
export const Get_questionsNumber = (data) => {
  return api.get(ep.GetquestionsNumber, data);
}

// Get Question Detials
export const Get_questionDetails = (id, data) => {
  return api.get(ep.GetquestionDetails+id, data);
}

// Send Question Answer
export const Send_questionAnswer = (data) => {
  return api.get(ep.SendquestionAnswer, data);
}