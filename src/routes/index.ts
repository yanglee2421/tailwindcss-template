// Router Imports
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { routes } from "./routes";
import { toIsWhitelist } from "./routes-whitelist";

// Hooks Imports
import { useLoginStore } from "@/hooks";

// Nprogress Imports
import NProgress from "nprogress";
// import "nprogress/nprogress.css";

const isGitee = import.meta.env.MODE === "gitee";
const history = isGitee
  ? createWebHashHistory()
  : createWebHistory("/vite-vue/");

export const router = createRouter({ history, routes });

router.beforeEach((to) => {
  NProgress.start();

  // Pinia Hooks
  const { state } = useLoginStore();
  const { isLogined } = state;
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
