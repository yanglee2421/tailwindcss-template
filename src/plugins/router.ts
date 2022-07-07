import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", redirect: { name: "table" } },
        { path: '/table', name: "table", component: () => import("@/views/Table.vue") },
        { path: '/test', name: "test", component: () => import("@/views/Test.vue") },
    ]
})
export default router