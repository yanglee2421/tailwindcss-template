import axios, { AxiosInstance, AxiosResponse } from "axios"
const request: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 6000,
})
request.interceptors.request.use(
    (config: any) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
        config.headers["Content-Type"] = "application/json;charest=utf-8"
        // config.params.appCode = "lms"
        return config
    },
    (err) => {
        console.log(err)
    }
)
interface _data {
    Result: number
    Data: unknown
    Message: string
}
interface _data {
    code: number
    data: unknown
    msg: string
}
request.interceptors.response.use(
    (res: AxiosResponse) => {
        const { data }: { data: _data } = res
        // const { Result, Data, Message } = data
        // if (Result === 1) {
        const { code, data: Data, msg } = data
        if (code === 200) {
            return Data
        }
        else {
            console.log(msg)
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