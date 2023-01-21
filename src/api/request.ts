import axios, { RawAxiosRequestConfig } from "axios";
import { ElLoadingService, ElMessage } from "element-plus";
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 6000,
  headers: {
    common: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  },
});
let loading: null | ReturnType<typeof ElLoadingService> = null;
request.interceptors.request.use((config) => {
  loading = ElLoadingService({
    lock: true,
    text: "加载中。。。",
    background: "rgba(0, 0, 0, 0.7)",
  });
  return config;
});
request.interceptors.response.use(
  (res) => {
    loading?.close();
    const { data, status, statusText } = res;
    if (status === 200) return data;
    ElMessage.warning({ message: statusText });
    console.warn(statusText);
    return new Promise(() => {});
  },
  (err) => {
    loading?.close();
    const { message } = err;
    ElMessage.error({ message });
    console.error(message);
    return new Promise(() => {});
  }
);
export default async <T = unknown>(params: RawAxiosRequestConfig) =>
  request(params) as unknown as T;
