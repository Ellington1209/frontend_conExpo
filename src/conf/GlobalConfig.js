import Axios from "axios";
import { getToken } from "../utils/authHelp";

 const rootUrl = "http://localhost/backend/conExpo/public/";


export const Http = Axios.create({
  baseURL: rootUrl,
});

Http.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
