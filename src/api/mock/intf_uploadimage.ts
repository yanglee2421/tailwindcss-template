import { request } from "./request";

export interface Req {
  card: string;
  imgfile: File;
  type: 1 | 2;
}

export interface Res {
  PATH: string;
}

export function intf_uploadimage(data: Req) {
  return request<unknown, Res, Req>({
    url: "/gjdy/intf/uploadimage",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data,
  });
}
