import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { ElLoadingService, ElMessage } from "element-plus";
/**
 * 创建Axios实例
 * 请求域名
 * 最长等待时间
 */
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 6000,
});
/**
 * loading控制器
 * 请求拦截器
 */
let loading: null | ReturnType<typeof ElLoadingService> = null;
request.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) return config;
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  config.headers["Content-Type"] = "application/json;charset=utf-8";
  loading = ElLoadingService({
    lock: true,
    text: "加载中。。。",
    background: "rgba(0, 0, 0, 0.7)",
  });
  return config;
});
/**
 * 响应拦截器
 */
request.interceptors.response.use(
  (res: AxiosResponse) => {
    loading?.close();
    const { data, status, statusText } = res;
    if (status === 200) return data;
    ElMessage.warning({ message: statusText });
    console.warn(statusText);
    return new Promise(() => {});
  },
  (err: AxiosError) => {
    loading?.close();
    const { message } = err;
    ElMessage.error({ message });
    console.error(message);
    return new Promise(() => {});
  }
);
/**
 * 导出方法
 */
export default async <T = unknown>(params: AxiosRequestConfig) => {
  return (await request(params)) as unknown as T;
};
