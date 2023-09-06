// Router Imports
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./router-routes";
import { toIsWhitelist } from "./router-whitelist";
import { toHomeRoute } from "./to-home-route";

// Hooks Imports
import { useLogin } from "@/hooks";

// Nprogress Imports
import NProgress from "nprogress";
import { unref } from "vue";
// import "nprogress/nprogress.css";

const history = createWebHashHistory();

export const router = createRouter({ history, routes });

// Router Guard
router.beforeEach((to) => {
  // Pinia Hooks
  const { usr } = useLogin();

  const isLogined = unref(usr);
  const nextName = String(to.name);

  // To Login
  const isInLogin = nextName === "login";
  if (isInLogin) {
    return isLogined ? toHomeRoute(to.query.returnUrl) : true;
  }

  // To Whitelist
  const isInWl = toIsWhitelist(nextName);
  if (isInWl) return true;

  // Not Logged
  const returnUrl = encodeURIComponent(to.fullPath);
  if (!isLogined) return { name: "login", query: { returnUrl } };

  // Has Logged
  return true;
});

// ** Title
router.afterEach((to) => {
  const title = to.meta.title;
  if (typeof title === "string") document.title = title;
});

// ** Nprogress
router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});
