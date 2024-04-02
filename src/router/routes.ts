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
    name: "login",
    component() {
      return import("@/pages/login/NotLogged.vue");
    },
  },
  // {
  //   name: "layout",
  //   path: "",
  //   component() {
  //     return import("@/components/layout/DesktopLayout.vue");
  //   },
  //   children: [],
  // },
  {
    path: "/caronseal",
    name: "caronseal",
    component() {
      return import("@/pages/caronseal/CaronsealPage.vue");
    },
  },
  {
    path: "/",
    name: "home",
    component() {
      return import("@/pages/home/HomePage.vue");
    },
  },
];
