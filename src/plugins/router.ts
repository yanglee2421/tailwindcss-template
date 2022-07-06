import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", redirect: { name: "table" } },
        { path: '/table', name: "table", component: () => import("@/views/Table.vue") }
    ]
})
export default router