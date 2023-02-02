import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { routes, whiteList } from "./routes";
import { useAuth } from "@/stores";
import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus";

const isGitee = import.meta.env.MODE === "gitee";
const history = isGitee
  ? createWebHashHistory("/vite-vue/")
  : createWebHistory("/vite-vue/");
export const router = createRouter({ history, routes });

router.beforeEach((to, from) => {
  const store = useAuth();
  if (whiteList.includes(to.path)) return;
  if (store.isLogined) return;
  return { name: "login" };
});
router.afterEach((to, from) => {
  const title = to.meta.title;
  if (typeof title === "string") document.title = title;
});
