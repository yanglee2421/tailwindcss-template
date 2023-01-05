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
const history = isGitee ? createWebHashHistory() : createWebHistory("/vue/");
export const router = createRouter({ history, routes });
/**
 * 全局钩子
 */
router.beforeEach((to, from) => {
  if (whiteList.includes(to.path)) {
    return true;
  }
});
router.afterEach((to, from) => {
  const title = to.meta.title;
  if (typeof title === "string") {
    const store = usePinia();
    store.setDocTitle(title);
  }
});
