import { createRouter, createWebHashHistory } from 'vue-router'
import { ElMessage } from "element-plus"
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/Login.vue"),
            meta: { title: "登录" },
        },
        {
            path: "/",
            component: () => import("@/views/Home.vue"),
            meta: { title: "首页" },
            children: [
                {
                    path: 'work',
                    name: "work",
                    component: () => import("@/views/WorkSpace.vue"),
                    meta: { title: "工作区" },
                },
                {
                    path: 'test',
                    name: "test",
                    component: () => import("@/views/Test.vue"),
                    meta: { title: "测试用示例" },

                },
                {
                    path: 'param',
                    name: "param",
                    component: () => import("@/views/param/param.vue"),
                    meta: { title: "传参案例" },
                    beforeEnter(to, from) {
                        if (from.meta.title === "首页") {
                            ElMessage({
                                type: "error",
                                message: "不许从首页直接来！",
                            })
                            return false
                        }
                    },
                },
            ]
        },
        { path: "/:else", redirect: "/404" },
        {
            path: "/404", name: "404",
            component: () => import("@/views/404.vue"),
            meta: { title: "找不到你要的页面了！" },
            props(to) { return {} },
        }
    ]
})
// 登录校验
router.beforeEach((to, from) => {
    const auth = localStorage.getItem("token")
    if (to.name === "login") {
        return auth ? "/" : undefined
    }
    return auth ? undefined : "/login"
})
// 网页标题
router.afterEach((to, from) => {
    to.meta.title && (document.title = <string>to.meta.title)
})
export default router