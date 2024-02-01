import { AxiosRequestConfig } from "axios";
import { axiosSwagger } from "./axiosSwagger";

export function get_brand_list(req: Req, id: ID) {
  return axiosSwagger<unknown, Res>({
    url: `/getBrandList/${id}`,
    ...req,
  });
}

export type ID = keyof Category;

export type Req = AxiosRequestConfig;

export interface Category {
  J: "手机";
  K: "平板";
  L: "笔记本";
  A: "相机";
  CD: "智能数码";
  ZC: "台式机";
  CPU: "电脑配件";
  DYJ: "办公设备";
}

export type Res = Row[];

export interface Row {
  brand_id: "65";
  brand_name: "Apple";
  brand_code: "p0065";
  class_id: "J";
  brand_img: "http://121.43.121.210:8000/images/brands/iphone.png";
}
