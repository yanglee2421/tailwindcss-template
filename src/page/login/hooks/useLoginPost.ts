import { useMutation } from "@tanstack/vue-query";
import { useRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/page/home/home.vue"),
    name: "home",
    meta: { title: "首页" },
  },
  {
    path: "/particle",
    component: () => import("@/page/particle/particle.vue"),
    name: "particle",
    meta: { title: "粒子动画" },
  },
  {
    path: "/snow",
    component: () => import("@/page/snow/snow.vue"),
    name: "snow",
    meta: { title: "雪飘" },
  },
  {
    path: "/demo",
    component: () => import("@/page/demo/page-demo.vue"),
    name: "demo",
    meta: { title: "demo" },
  },
  {
    path: "/shapes",
    component: () => import("@/page/shapes/page-shapes.vue"),
    name: "shapes",
    meta: { title: "shapes" },
  },
];

export function useLoginPost() {
  const router = useRouter();
  return useMutation({
    async mutationFn() {},
    onSuccess() {
      routes.forEach((item) => {
        router.addRoute(item);
      });
      router.replace({ name: "home" });
    },
  });
}
