import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { routes, whiteList } from "./routes";
import { useAuth } from "@/hook";
import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus";

const isGitee = import.meta.env.MODE === "gitee";
const history = isGitee
  ? createWebHashHistory("/vite-vue/")
  : createWebHistory("/vite-vue/");
export const router = createRouter({ history, routes });

router.beforeEach((to, from) => {
  const { state, actLogin } = useAuth();
  if (whiteList.includes(to.path)) return true;
  if (state.isLogined || prevAuth(actLogin)) return true;
  return { name: "login" };
});
router.afterEach((to, from) => {
  const title = to.meta.title;
  if (typeof title === "string") document.title = title;
});

function prevAuth(actLogin: (param: any) => void) {
  let result = false;
  try {
    const prevJson = localStorage.getItem("auth");
    if (!prevJson) return false;

    const prevAuth = JSON.parse(prevJson);
    const { user, token, invalidTime } = prevAuth;
    if (!user || !token || !invalidTime) throw new Error();
    if (typeof user !== "string") throw new Error();
    if (typeof token !== "string") throw new Error();
    if (typeof invalidTime !== "number") throw new Error();
    if (invalidTime - Date.now() < 1000 * 60) throw new Error();

    actLogin({ user, token, invalidTime });
    result = true;
  } catch (err) {
    console.error(err);
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    ElMessage.warning("登录信息已失效");
  } finally {
    return result;
  }
}
