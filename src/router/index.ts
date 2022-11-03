import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import store from "@/plugins/store";
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 登录校验
router.beforeEach((to, from) => {
  const auth = localStorage.getItem("token");
  if (to.name === "login") {
    return auth ? "/" : undefined;
  }
  return auth ? undefined : "/login";
});
// 网页标题
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = <string>to.meta.title;
    store.dispatch("mod1/currentPage", to.meta.title);
  }
});
export default router;
