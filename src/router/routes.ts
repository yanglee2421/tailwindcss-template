import { ElMessage } from "element-plus";
import type { RouterOptions } from "vue-router";
const routes: RouterOptions["routes"] = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    meta: { title: "首页" },
    props: {},
    children: [
      {
        path: "test",
        name: "test",
        component: () => import("@/test/Test.vue"),
        meta: { title: "个人简介" },
      },
      {
        path: "test02",
        name: "test02",
        component: () => import("@/test/Test02.vue"),
        meta: { title: "求职意向" },
      },
      {
        path: "test03",
        name: "test03",
        component: () => import("@/test/Test03.vue"),
        meta: { title: "教育经历" },
      },
      {
        path: "test04",
        name: "test04",
        component: () => import("@/test/Test04.vue"),
        meta: { title: "个人经历" },
        props: { text: "写在routes里的" },
      },
      {
        path: "work",
        name: "work",
        component: () => import("@/views/WorkSpace/WorkSpace.vue"),
        meta: { title: "长期在写的东西" },
      },
      {
        path: "param",
        name: "param",
        component: () => import("@/views/param/param.vue"),
        meta: { title: "传参案例" },
        beforeEnter(to, from) {
          if (from.meta.title === "首页") {
            ElMessage({
              type: "error",
              message: "不许从首页直接来！",
            });
            return false;
          }
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: { title: "登录" },
  },
  { path: "/:else", redirect: "/404" },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
    meta: { title: "找不到你要的页面了！" },
    props(to) {
      return {};
    },
  },
];
export default routes;
