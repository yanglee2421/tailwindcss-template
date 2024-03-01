// Router Imports
import type { RouterOptions } from "vue-router";

export const routes: RouterOptions["routes"] = [
  {
    path: "/:pathMatch(.*)*",
    component() {
      return import("@/pages/404/NotFound.vue");
    },
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "Login",
      auth: "guest",
    },
    component() {
      return import("@/pages/login/NotLogged.vue");
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
      return import("@/pages/particle/page-particle.vue");
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
  {
    path: "/fabric",
    meta: { title: "fabric" },
    name: "fabric",
    component() {
      return import("@/pages/fabricMain/fabricMain.vue");
    },
  },
  {
    path: "/branch-list",
    name: "test-lab",
    component() {
      return import("@/pages/branch-list/BranchList.vue");
    },
  },
  {
    path: "/autono",
    name: "autono",
    component() {
      return import("@/pages/autono/AutoNo.vue");
    },
  },
];
