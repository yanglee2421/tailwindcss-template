import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { routes, whiteList } from "./routes";
import { usePinia } from "@/hook";
/**
 * 根据环境打包模式决定路由模式
 */
const isGitee = import.meta.env.MODE === "gitee";
const history = isGitee
  ? createWebHashHistory("/vite-vue/")
  : createWebHistory("/vite-vue/");
export const router = createRouter({ history, routes });
/**
 * 全局钩子
 */
router.beforeEach((to, from) => {
  /*   const {
    state: { isLogined },
  } = usePinia();
  if (whiteList.includes(to.path)) {
    return true;
  }
  if (isLogined) {
    return true;
  }
  return { name: "login" }; */
});
router.afterEach((to, from) => {
  const title = to.meta.title;
  if (typeof title === "string") {
    document.title = title;
  }
});
