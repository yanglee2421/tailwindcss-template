import { axiosSwagger } from "./axiosSwagger";
import type { AxiosRequestConfig } from "axios";

export function get_machine_list(req: Req, brand_id: string) {
  return axiosSwagger<unknown, Res>({
    url: `/getMachineList/${brand_id}`,
    ...req,
  });
}

export type Req = AxiosRequestConfig;

export type Res = Row[];

export interface Row {
  r: "1";
  machine_id: "938604471C41EC95E050840A650875EB";
  machine_name: "iPhone 11";
  brand_name: "Apple";
  machine_img: "http://121.43.121.210:8000/images/machine/thumbs/demo.jpg";
  max_quote: "1700";
}
