import { request } from "./request";

export interface Req {
  pwd_site: string;
  pwd_username: string;
  page_index: number;
  page_size: number;
}

export function get_pwd(params: Req) {
  return request({
    url: "/pwd/query",
    params,
  });
}
