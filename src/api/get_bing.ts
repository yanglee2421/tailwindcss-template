import { request } from "./request";

export function get_bing() {
  return request({
    url: "/bing",
  });
}
