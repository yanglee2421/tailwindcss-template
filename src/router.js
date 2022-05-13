import HelloWorld from '@/components/HelloWorld.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: { name: "hel" }, query: { id: 1 } },
    { path: '/hel', component: HelloWorld, name: "hel" },
  ]
})
export default router