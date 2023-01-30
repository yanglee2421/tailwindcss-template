import axios from "axios";
import { ElLoadingService, ElMessage } from "element-plus";

const isGitee = import.meta.env.MODE === "gitee";

// 实例
export const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 6000,
  withCredentials: false,
  headers: {
    common: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  },
});

// 拦截器
let loading: null | ReturnType<typeof ElLoadingService> = null;
request.interceptors.request.use((config) => {
  loading = ElLoadingService({
    lock: true,
    text: "加载中。。。",
    background: "rgba(0, 0, 0, 0.7)",
  });
  if (isGitee)
    config.params = Object.assign(config.params || {}, {
      key: "GY7rE1J3f4ovi4wGONXshLHOHv",
    });
  return config;
});
request.interceptors.response.use(
  (res) => {
    loading?.close();
    const { data, status, statusText } = res;
    if (status > 199 && status < 300) return data;
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
