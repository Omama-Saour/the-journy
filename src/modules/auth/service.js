import { api } from "../../boot/axios";
import * as ep from "./end_point";
import Cookie from "cookie-universal";

const cookie = Cookie();

export const REGISTER =async(data) => {
  return await api.post(ep.REGISTER, data);
};
export const LOGIN = async (data) => {
  const res = await api.post(ep.LOGIN, data);
  const { user, token } = res.data;
  cookie.set("accessToken", token);
  cookie.set("user", user.email);
  api.defaults.headers.Authorization = "Bearer " + token;

  console.log("auth:", res.data.token);
};
export const RESET_PASSWORD = (data) => {
  return api.post(ep.RESET_PASSWORD, data);
};
export const LOGOUT = async () => {
  await api.post(ep.LOGOUT);
  cookie.remove("accessToken");
  window.location.reload();
  window.location.pathname = "/login";
};