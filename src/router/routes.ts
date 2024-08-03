import type { RouterOptions } from "vue-router";

export const routes: RouterOptions["routes"] = [
  {
    path: "/:pathMatch(.*)*",
    component() {
      return import("@/pages/404/NotFound.vue");
    },
  },

  // Guest Pages
  {
    path: "/login",
    name: "login",
    component() {
      return import("@/pages/login/LoginPage.vue");
    },
  },
  {
    path: "/register",
    name: "register",
    component() {
      return import("@/pages/register/RegisterPage.vue");
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
    path: "/",
    name: "index",
    component() {
      return import("@/pages/scroll/ScrollPage.vue");
    },
  },

  // Auth Pages
  {
    path: "/",
    component() {
      return import("@/components/layout/AuthLayout.vue");
    },
    children: [
      {
        path: "home",
        name: "home",
        component() {
          return import("@/pages/home/HomePage.vue");
        },
      },
      {
        path: "tailwindcss",
        name: "tailwindcss",
        component() {
          return import("@/pages/tailwindcss/TailwindCSS.vue");
        },
      },
      {
        path: "button",
        name: "button",
        component() {
          return import("@/pages/button/ButtonPage.vue");
        },
      },
      {
        path: "chat",
        name: "chat",
        component() {
          return import("@/pages/chat/ChatPage.vue");
        },
      },
    ],
  },
];
