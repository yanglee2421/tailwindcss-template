import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import whiteList from "./whiteList";
import { usePinia } from "@/hook";
const router = createRouter({
  history: createWebHistory("/vue/"),
  routes,
});
// 前置钩子
router.beforeEach((to,from)=>{
  if(whiteList.includes(to.path)){
    return true
  }
})
// 后置钩子
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = <string>to.meta.title;
    const state = usePinia();
    state.currentPage = to.meta.title as string;
  }
});
export default router;
