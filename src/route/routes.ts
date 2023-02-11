import { useAuth } from "@/stores";
import type { RouterOptions } from "vue-router";
export { whiteList } from "./whiteList";

export const routes: RouterOptions["routes"] = [
  { path: "/:pathMatch(.*)*", redirect: "/404" },
  {
    path: "/login",
    component: () => import("@/page/login/login.vue"),
    name: "login",
    meta: { title: "登录" },
    beforeEnter(to, from) {
      const { state } = useAuth();
      console.log(state);
      if (state.expiration) return { name: "home", replace: true };
    },
  },
  {
    path: "",
    component: () => import("@/page/layout/layout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/page/home/home.vue"),
        name: "home",
        meta: { title: "首页" },
      },
      {
        path: "404",
        component: () => import("@/page/404/404.vue"),
        name: "404",
        meta: { title: "404，找不到你要的了" },
      },
      {
        path: "table",
        component: () => import("@/page/table/table.vue"),
        name: "table",
        meta: { title: "表格" },
      },
      {
        path: "particle",
        component: () => import("@/page/particle/particle.vue"),
        name: "particle",
        meta: { title: "粒子动画" },
      },
      {
        path: "snow",
        component: () => import("@/page/snow/snow.vue"),
        name: "snow",
        meta: { title: "雪飘" },
      },
    ],
  },
  {
    path: "/demo",
    component: () => import("@/page/demo/demo.vue"),
    name: "demo",
    meta: { title: "demo" },
  },
];
