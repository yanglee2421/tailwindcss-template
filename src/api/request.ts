import axios from "axios";
import { ElLoadingService, ElMessage } from "element-plus";

// instance
export const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 6000,
  headers: {
    common: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  },
});

// interceptor
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
    if (status > 199 && status < 300) return data;

    ElMessage.warning({ message: statusText });
    throw new Error(statusText);
  },
  (err) => {
    loading?.close();

    const { message } = err;
    ElMessage.error({ message });
    throw new Error(message);
  }
);
