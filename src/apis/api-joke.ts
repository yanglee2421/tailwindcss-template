import { request } from "./request";

interface res {
  success: boolean;
  data: { joke: string };
  text: {
    msg: string;
    copyright: string;
    time: string;
  };
}

export function getJoke() {
  /**
   * 1. 第一个泛型用来设置AxiosResponse的data的类型
   * 2. 如果像我一样，在响应拦截器里搞了些操作，
   * 则需要使用第二个泛型用来直接设置返回的类型
   */
  return request<any, res>({ url: "/api/joke/" }).then((res) => {
    res.text.copyright;
  });
}
