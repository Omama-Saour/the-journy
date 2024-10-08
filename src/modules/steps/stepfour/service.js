import { api } from "../../../boot/axios";
import { apiFile } from "../../../boot/axios";
import * as ep from "./end_points";

// Get Questions numbers && details
export const Get_questionsNumber = (data) => {
  return api.get(ep.GetquestionsNumber, data);
}

// Get Question Detials
// export const Get_questionDetails = (id, data) => {
//   return api.get(ep.GetquestionDetails+id, data);
// }

// Send Question Answer
export const Send_questionAnswer = (data) => {
  return apiFile.post(ep.SendquestionAnswer, data);
}