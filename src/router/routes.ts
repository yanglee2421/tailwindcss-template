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
      return import("@/pages/login/LoginPage.vue");
    },
  },
  {
    path: "/",
    name: "home",
    component() {
      return import("@/pages/home/HomePage.vue");
    },
  },
  {
    path: "/tailwindcss",
    name: "tailwindcss",
    component() {
      return import("@/pages/tailwindcss/TailwindCSS.vue");
    },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component() {
      return import("@/pages/fotgot-password/ForgotPassword.vue");
    },
  },
  {
    path: "/register",
    name: "register",
    component() {
      return import("@/pages/register/RegisterPage.vue");
    },
  },
];
