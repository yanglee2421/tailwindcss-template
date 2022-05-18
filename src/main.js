import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import * as icons from "@element-plus/icons-vue"
Object.keys(icons).forEach(item => {
  if (Reflect.has(icons, item)) {
    app.component(item, icons[item])
  }
})
app.use(ElementPlus, {
  locale
})
import vuex from "@/vuex"
app.use(vuex)
app.mount('#app')
