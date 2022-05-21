import Drag from "@/components/drag.vue"
import Lunbo from '@/components/lubo.vue'
import Index from '@/components/index.vue'
import Table from '@/components/table.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/", component: Index, children: [
        { path: 'drag', component: Drag, name: "drag" },
        { path: 'lunbo', component: Lunbo, name: "lunbo" },
        { path: 'table', component: Table, name: "table" },
      ]
    },
  ]
})
export default router