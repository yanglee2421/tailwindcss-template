import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

// Hooks Imports
import { useLoginStore } from "@/hooks";

// Configure Imports
import { routes } from "./routes";
import { toIsWhitelist } from "./whitelist";

// Nprogress Imports
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const isGitee = import.meta.env.MODE === "gitee";
const history = isGitee
  ? createWebHashHistory()
  : createWebHistory("/vite-vue/");
export const router = createRouter({ history, routes });

router.beforeEach((to) => {
  NProgress.start();

  // ** Auth
  const { state } = useLoginStore();
  const { isLogined } = state;
  const nextName = String(to.name);

  // In Login Page
  const isInLogin = nextName === "login";
  if (isInLogin) return true;

  // In Whitelist, Go
  const isInWl = toIsWhitelist(nextName);
  if (isInWl) return true;

  // No Logged, Go Login
  const returnUrl = encodeURIComponent(to.fullPath);
  if (!isLogined) return { name: "login", query: { returnUrl } };

  // Logged, Go
  return true;
});
router.afterEach((to) => {
  NProgress.done();

  // ** Title
  const title = to.meta.title;
  if (typeof title === "string") document.title = title;
});
