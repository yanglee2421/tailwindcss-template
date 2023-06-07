import axios from "axios";

// instance
export const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000 * 60,
});

// interceptor
request.interceptors.request.use((config) => {
  const jwt = localStorage.getItem("token");
  config.headers.setAuthorization(`Bearer ${jwt}`);
  return config;
});
request.interceptors.response.use(
  (res) => {
    const { data } = res;
    if (data.code !== 0) throw new Error(data.msg);
    if (data.data) return data.data;
    return data;
  },
  (err) => {
    const { message } = err;

    throw new Error(message);
  }
);
