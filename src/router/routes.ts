import { ElMessage } from "element-plus";
import type { RouterOptions } from "vue-router";
const routes: RouterOptions["routes"] = [
  { path: "/", redirect: "/404" },
  {
    path: "/checkCar",
    component: () => import("@/views/check-car/CheckCar.vue"),
    name: "checkCar",
    meta: { title: "检车" },
  },
  {
    path: "/entertainment",
    component: () => import("@/views/entertainment/Entertainment.vue"),
    name: "entertainment",
    meta: { title: "娱乐" },
  },
  {
    path: "/insurance",
    component: () => import("@/views/insurance/Insurance.vue"),
    name: "insurance",
    meta: { title: "保险" },
  },
  { path: "/:else", redirect: "/404" },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
    meta: { title: "找不到你要的页面了！" },
  },
];
export default routes;
