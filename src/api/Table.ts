import axios from "axios"
axios.defaults.baseURL = ""
const api = {
    Post: "/Get"
}
export function Post(data = {}) {
    return axios({
        method: "post",
        url: api.Post,
        data
    })
}
interface FormData {
    name: string;
}