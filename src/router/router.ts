import NProgress from "nprogress";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { routes } from "./routes";

export const router = createRouter({
  history: import.meta.env.DEV ? createWebHistory("/") : createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});
