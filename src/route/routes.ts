import type { RouterOptions } from "vue-router";
const routes: RouterOptions["routes"] = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    component: () => import("@/page/home/home.vue"),
    name: "home",
    meta: { title: "首页" },
  },
  {
    path: "/demo",
    component: () => import("@/page/demo/demo.vue"),
    name: "demo",
    meta: { title: "demo" },
  },
  {
    path: "/table",
    component: () => import("@/page/table/table.vue"),
    name: "table",
    meta: { title: "表格" },
  },
  { path: "/:else", redirect: "/404" },
  {
    path: "/404",
    name: "404",
    component: () => import("@/page/404/404.vue"),
    meta: { title: "404，找不到你要的了" },
  },
];
export default routes;
