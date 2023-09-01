// Router Imports
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./router-routes";
import { toIsWhitelist } from "./router-whitelist";

// Hooks Imports
import { useStoreLogin } from "@/hooks";

// Nprogress Imports
import NProgress from "nprogress";
// import "nprogress/nprogress.css";

const history = createWebHashHistory();

export const router = createRouter({ history, routes });

router.beforeEach((to) => {
  NProgress.start();

  // Pinia Hooks
  const { state } = useStoreLogin();
  const isLogined = state.usr;
  const nextName = String(to.name);

  // To Login
  const isInLogin = nextName === "login";
  if (isInLogin) return true;

  // To Whitelist
  const isInWl = toIsWhitelist(nextName);
  if (isInWl) return true;

  // Not Logged
  const returnUrl = encodeURIComponent(to.fullPath);
  if (!isLogined) return { name: "login", query: { returnUrl } };

  // Has Logged
  return true;
});
router.afterEach((to) => {
  NProgress.done();

  // ** Title
  const title = to.meta.title;
  if (typeof title === "string") document.title = title;
});
