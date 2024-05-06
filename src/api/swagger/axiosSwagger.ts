import axios from "axios";
import type { AxiosError } from "axios";

export const axiosSwagger = axios.create({
  baseURL: "http://121.43.121.210:8000",
  timeout: 1000 * 30,
});

axiosSwagger.interceptors.request.use((config) => {
  return config;
});

axiosSwagger.interceptors.response.use(
  (res) => {
    if (res.data.code === 200) {
      return res.data.data;
    }

    throw new Error(res.data.msg);
  },
  (error: AxiosError) => {
    throw new Error(error.message);
  },
);
