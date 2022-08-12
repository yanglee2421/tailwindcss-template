import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/", component: () => import("@/views/Home.vue"), children: [
                { path: 'work', name: "work", component: () => import("@/views/WorkSpace.vue") },
                { path: 'table', name: "table", component: () => import("@/views/Table/Table.vue") },
                { path: 'test', name: "test", component: () => import("@/views/Test.vue") },
                { path: 'param', name: "param", component: () => import("@/views/param/param.vue") },
            ]
        },
        { path: "/:else", redirect: "/404" },
        { path: "/404", name: "404", component: () => import("@/views/404.vue") }
    ]
})
router.beforeEach((to, from) => {
})
export default router