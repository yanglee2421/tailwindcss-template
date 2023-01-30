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
  return request<any, res>({ url: "/api/joke/" });
}
