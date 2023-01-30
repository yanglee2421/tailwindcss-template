import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { routes, whiteList } from "./routes";
import { useAuth } from "@/hook";
import { storeToRefs } from "pinia";

const isGitee = import.meta.env.MODE === "gitee";
const history = isGitee
  ? createWebHashHistory("/vite-vue/")
  : createWebHistory("/vite-vue/");
export const router = createRouter({ history, routes });

router.beforeEach((to, from) => {
  const { state } = useAuth();
  if (whiteList.includes(to.path)) return true;
  if (state.isLogined) return true;
  return { name: "login" };
});
router.afterEach((to, from) => {
  const title = to.meta.title;
  if (typeof title === "string") document.title = title;
});
