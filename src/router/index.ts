import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import store from "@/plugin/store";
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 网页标题
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = <string>to.meta.title;
    store.dispatch("mod1/currentPage", to.meta.title);
  }
});
export default router;
