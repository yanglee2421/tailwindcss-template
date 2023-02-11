import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { routes, whiteList } from "./routes";
import { useAuth } from "@/stores";

const isGitee = import.meta.env.MODE === "gitee";
const history = isGitee
  ? createWebHashHistory("/vite-vue/")
  : createWebHistory("/vite-vue/");
export const router = createRouter({ history, routes });

router.beforeEach((to) => {
  const { state } = useAuth();
  if (isInWl(to.path)) return;
  if (state.expiration) return;
  return { name: "login" };
});
router.afterEach((to) => {
  const title = to.meta.title;
  if (typeof title === "string") document.title = title;
});

/**
 * Tests if a pathname is in the whitelist
 * @param str current route`s pathname
 * @returns whether the pathname is in the whitelist
 */
function isInWl(str: string) {
  return whiteList.some((item) => str.startsWith(item));
}
