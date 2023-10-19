import type { RouterOptions } from "vue-router";

export const routes: RouterOptions["routes"] = [
  { path: "/:pathMatch(.*)*", redirect: "/404" },
  {
    path: "/404",
    component: () => import("@/pages/404/404.vue"),
    name: "404",
    meta: { title: "NotFound" },
  },
  {
    path: "/login",
    component: () => import("@/pages/login/login.vue"),
    name: "login",
    meta: { title: "登录" },
  },
  {
    path: "/",
    component: () => import("@/pages/home/home.vue"),
    children: [
      {
        path: "",
        meta: { title: "首页" },
        name: "home",
        component() {
          return import("@/pages/demo/page-demo.vue");
        },
      },
      {
        path: "/particle",
        component: () => import("@/pages/particle/particle.vue"),
        name: "particle",
        meta: { title: "粒子动画" },
      },
      {
        path: "/snow",
        component: () => import("@/pages/snow/snow.vue"),
        name: "snow",
        meta: { title: "雪飘" },
      },
      {
        path: "/shapes",
        component: () => import("@/pages/shapes/page-shapes.vue"),
        name: "shapes",
        meta: { title: "shapes" },
      },
      {
        path: "/scroll",
        component() {
          return import("@/pages/scroll");
        },
        name: "scroll",
        meta: { title: "scroll" },
      },
      {
        path: "performance",
        name: "performance",
        meta: { title: "Performance" },
        component() {
          return import("@/pages/performance");
        },
      },
      {
        path: "cropperjs",
        name: "cropperjs",
        meta: { title: "cropperjs" },
        component() {
          return import("@/pages/cropperjs");
        },
      },
      {
        path: "grid",
        name: "grid",
        meta: { title: "grid" },
        component() {
          return import("@/pages/grid");
        },
      },
      {
        path: "table",
        name: "table",
        meta: { title: "table" },
        component() {
          return import("@/pages/table");
        },
      },
    ],
  },
];
