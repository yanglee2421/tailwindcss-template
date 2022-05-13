import {
    createApp
} from 'vue'
import App from './App.vue'
import './index.sass'
const app = createApp(App)
import ElementPlus from "element-plus"
import locale from "element-plus/es/locale/lang/zh-cn.mjs"
import 'element-plus/dist/index.css'
import * as icons from "@element-plus/icons-vue"
app.use(ElementPlus, {
    locale
})
Object.keys(icons).forEach(item => {
    app.component(item, icons[item])
})
app.mount('#app')