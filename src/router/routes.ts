import type { RouterOptions } from "vue-router";
const routes: RouterOptions["routes"] = [
  { path: "/", redirect: "/404" },
  {
    path: "/checkCar",
    component: () => import("@/page/check-car/CheckCar.vue"),
    name: "checkCar",
    meta: { title: "检车" },
  },
  {
    path: "/entertainment",
    component: () => import("@/page/entertainment/Entertainment.vue"),
    name: "entertainment",
    meta: { title: "娱乐" },
  },
  {
    path: "/entertainmentDetail",
    component: () =>
      import("@/page/entertainment-detail/EntertainmentDetail.vue"),
    name: "entertainmentDetail",
    meta: { title: "套餐介绍" },
  },
  {
    path: "/insurance",
    component: () => import("@/page/insurance/Insurance.vue"),
    name: "insurance",
    meta: { title: "保险" },
  },
  {
    path: "/test",
    component: () => import("@/test/Test01.vue"),
    name: "test",
    meta: { title: "测试页01" },
  },
  { path: "/:else", redirect: "/404" },
  {
    path: "/404",
    name: "404",
    component: () => import("@/page/404.vue"),
    meta: { title: "404" },
  },
];
export default routes;
