import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import routes from "./routes";
import whiteList from "./whiteList";
/**
 * 根据环境打包模式确定路由模式
 */
console.log(import.meta.env.MODE);

const history =
  import.meta.env.MODE === "gitee"
    ? createWebHashHistory()
    : createWebHistory("/vue/");
const router = createRouter({ history, routes });
// 前置钩子
router.beforeEach((to, from) => {
  if (whiteList.includes(to.path)) {
    return true;
  }
});
// 后置钩子
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = <string>to.meta.title;
  }
});
export default router;
