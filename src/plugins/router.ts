import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", redirect: { name: "table" } },
        { path: '/work', name: "table", component: () => import("@/views/WorkSpace.vue") },
        { path: '/test', name: "test", component: () => import("@/views/Test.vue") },
    ]
})
export default router