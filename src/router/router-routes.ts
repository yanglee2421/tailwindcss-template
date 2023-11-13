import type { RouterOptions } from "vue-router";

export const routes: RouterOptions["routes"] = [
  { path: "/:pathMatch(.*)*", redirect: "/404" },
  {
    path: "/404",
    name: "404",
    meta: { title: "NotFound" },
    component() {
      return import("@/pages/404");
    },
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" },
    component() {
      return import("@/pages/login");
    },
  },
  {
    path: "/",
    name: "home",
    meta: { title: "Home" },
    component() {
      return import("@/pages/home");
    },
  },
  {
    path: "/demo",
    name: "demo",
    meta: { title: "demo" },
    component() {
      return import("@/pages/demo/page-demo.vue");
    },
  },
  {
    path: "/particle",
    name: "particle",
    meta: { title: "粒子动画" },
    component() {
      return import("@/pages/particle");
    },
  },
  {
    path: "/snow",
    name: "snow",
    meta: { title: "雪飘" },
    component() {
      return import("@/pages/snow");
    },
  },
  {
    path: "/scroll",
    name: "scroll",
    meta: { title: "scroll" },
    component() {
      return import("@/pages/scroll");
    },
  },
  {
    path: "/performance",
    name: "performance",
    meta: { title: "Performance" },
    component() {
      return import("@/pages/performance");
    },
  },
  {
    path: "/cropperjs",
    name: "cropperjs",
    meta: { title: "cropperjs" },
    component() {
      return import("@/pages/cropperjs");
    },
  },
  {
    path: "/grid",
    name: "grid",
    meta: { title: "grid" },
    component() {
      return import("@/pages/grid");
    },
  },
  {
    path: "/table",
    name: "table",
    meta: { title: "table" },
    component() {
      return import("@/pages/table");
    },
  },
  {
    path: "/flip",
    meta: { title: "flip" },
    name: "flip",
    component() {
      return import("@/pages/flip");
    },
  },
];
