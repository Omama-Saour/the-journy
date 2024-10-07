import { api } from "../../../boot/axios";
import { apidocerFile } from "../../../boot/axios";
import * as ep from "./end_points";

// Send LinkedIn PDF file
export const Send_PDFfileLinkedIn = (data) => {
  return apidocerFile.post(ep.SendPDFfileLinkedIn, data);
};

// Send resault 
export const Send_Resault = (data) => {
  return api.post(ep.SendResult, data);
}

// Get Analysis
export const Get_LinkedInAnalysis = (data) => {
  return api.get(ep.LinkedInAnalysis, data);
}