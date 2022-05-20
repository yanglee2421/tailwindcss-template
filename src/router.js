import Drag from "@/components/drag.vue"
import Lunbo from '@/components/lubo.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: { name: "drag" } },
    { path: '/drag', component: Drag, name: "drag" },
    { path: '/lunbo', component: Lunbo, name: "drag" },
  ]
})
export default router