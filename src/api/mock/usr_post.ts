// Axios Imports
import { axiosMock } from "./axios-mock";
import { AxiosRequestConfig } from "axios";

export function usr_post(req: Req) {
  return axiosMock<unknown, Res, Data>({
    url: "/usr",
    method: "POST",
    ...req,
  });
}

export type Req = AxiosRequestConfig<Data>;

export interface Data {
  email: string;
  passwd: string;
}

export interface Res {
  email: string;
  passwd: string;
  role: string;
}
