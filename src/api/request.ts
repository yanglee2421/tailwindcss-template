import axios, { AxiosInstance, AxiosResponse } from "axios"
const request: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 6000,
})
request.interceptors.request.use(
    (config: any) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
        config.headers["Content-Type"] = "application/json;charset=utf-8"
        // config.params.appCode = "lms"
        return config
    },
    (err) => {
        console.log(err)
    }
)
request.interceptors.response.use(
    (res: AxiosResponse) => {
        const { data, status, statusText } = res
        if (status === 200) {
            return data
        }
        else {
            console.log(statusText)
        }
    },
    (err) => {
        console.log(err)
    }
)
export default async<T = unknown>({ method = "post", url = "", data = {}, params = {} }) => {
    return await request({
        method,
        url,
        data,
        params,
    }) as unknown as T
}