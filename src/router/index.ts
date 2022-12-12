import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { usePinia } from "@/hook";
const router = createRouter({
  history: createWebHistory("/vue/"),
  routes,
});
// 网页标题
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = <string>to.meta.title;
    const state = usePinia();
    state.currentPage = to.meta.title as string;
  }
});
export default router;
