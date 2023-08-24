import type { RouterOptions } from "vue-router";

export const routes: RouterOptions["routes"] = [
  { path: "/:pathMatch(.*)*", redirect: "/404" },
  {
    path: "/404",
    component: () => import("@/page/404/404.vue"),
    name: "404",
    meta: { title: "NotFound" },
  },
  {
    path: "/login",
    component: () => import("@/page/login/login.vue"),
    name: "login",
    meta: { title: "登录" },
  },
  {
    path: "/",
    component: () => import("@/page/home/home.vue"),
    name: "home",
    meta: { title: "首页" },
  },
  {
    path: "/particle",
    component: () => import("@/page/particle/particle.vue"),
    name: "particle",
    meta: { title: "粒子动画" },
  },
  {
    path: "/snow",
    component: () => import("@/page/snow/snow.vue"),
    name: "snow",
    meta: { title: "雪飘" },
  },
  {
    path: "/demo",
    component: () => import("@/page/demo/page-demo.vue"),
    name: "demo",
    meta: { title: "demo" },
  },
  {
    path: "/shapes",
    component: () => import("@/page/shapes/page-shapes.vue"),
    name: "shapes",
    meta: { title: "shapes" },
  },
  {
    path: "/scroll",
    component() {
      return import("@/page/scroll");
    },
    name: "scroll",
    meta: { title: "scroll" },
  },
];
