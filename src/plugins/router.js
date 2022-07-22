import Drag from "@/components/drag.vue"
import Lunbo from '@/components/lubo.vue'
import Index from '@/components/index.vue'
import EsTable from '@/components/table/EsTable.vue'
import Detail from "@/components/table/Detail.vue"
import Scroll from '@/components/scroll.vue'
import Parameter from '@/components/parameter/parameter.vue'
import FtS from '@/components/parameter/F-S/father.vue'
import StF from "@/components/parameter/S-F/father.vue"
import FtStF from "@/components/parameter/F-S-F/father.vue"
import AtO from "@/components/parameter/A-O/ancestors.vue"
import BtB from "@/components/parameter/B-B/father.vue"
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/", component: Index, children: [
        { path: 'drag', component: Drag, name: "drag" },
        { path: 'work', component: () => import("@/views/Work.vue"), name: "work" },
        { path: 'lunbo', component: Lunbo, name: "lunbo" },
        { path: 'table', component: EsTable, name: "table" },
        { path: 'detail', component: Detail, name: "detail" },
        { path: 'scroll', component: Scroll, name: "scroll" },
        { path: 'test', component: () => import('@/components/test.vue'), name: "test" },
        { path: 'copy', component: () => import("@/views/copy.vue"), name: "copy" },
        { path: 'gallery', component: () => import('@/components/gallery.vue'), name: "gallery" },
        {
          path: 'parameter',
          component: Parameter,
          name: "parameter",
          children: [
            { path: 'F-S', component: FtS, name: 'F-S' },
            { path: 'S-F', component: StF, name: 'S-F' },
            { path: 'F-S-F', component: FtStF, name: 'F-S-F' },
            { path: 'A-O', component: AtO, name: 'A-O' },
            { path: 'B-B', component: BtB, name: 'B-B' },
          ]
        },
      ]
    },
  ]
})
router.beforeEach((to, from) => {
  if (to.matched[1]) {
    localStorage.setItem('router', to.matched[1].name)
  }
  if (to.matched[2]) {
    localStorage.setItem('p-router', to.matched[2].name)
  }
})
export default router