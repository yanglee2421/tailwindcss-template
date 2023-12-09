// Router Imports
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./router-routes";
import { toIsWhitelist } from "./router-whitelist";
import { toHomeRoute } from "./to-home-route";

// Hooks Imports
import { useLogin } from "@/hooks";

// Nprogress Imports
import NProgress from "nprogress";

// Vue Imports
import * as Vue from "vue";
// import "nprogress/nprogress.css";

const history = createWebHashHistory();

export const router = createRouter({ history, routes });

// Router Guard
router.beforeEach((to) => {
  // Pinia Hooks
  const { usr } = useLogin();

  const isLogined = Vue.unref(usr);
  const nextName = String(to.name);

  // Login page
  if (nextName === "login") {
    return isLogined ? toHomeRoute(to.query.returnURL) : true;
  }

  // Whitelist
  const isInWl = toIsWhitelist(nextName);
  if (isInWl) return true;

  // Has Logged
  if (isLogined) return true;

  // Not Logged
  return {
    name: "login",
    query: {
      returnURL: encodeURIComponent(to.fullPath),
    },
  };
});

// ** Title
router.afterEach((to) => {
  const title = to.meta.title;

  if (!title) return;

  if (typeof title === "string") {
    document.title = title;
  }
});

// ** Nprogress
router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});
