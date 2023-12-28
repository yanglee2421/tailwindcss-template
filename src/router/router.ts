// Router Imports
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { routes } from "./router-routes";
import { toIsWhitelist } from "./router-whitelist";

// Nprogress Imports
import NProgress from "nprogress";

export const router = createRouter({
  history: import.meta.env.DEV ? createWebHistory() : createWebHashHistory(),
  routes,
});

// Router Guard
router.beforeEach((to) => {
  const nextName = String(to.name);

  // Whitelist
  const isInWl = toIsWhitelist(nextName);
  if (isInWl) return true;

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
