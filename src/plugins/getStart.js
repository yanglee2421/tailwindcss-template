/*
仅适用于Vue3
自动安装
- Element-plus及图标
- router实例
- vuex实例
- v-drag
- v-focus(仅适用于el-input，el-input-number)
- v-showImg
*/
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import * as icons from "@element-plus/icons-vue"
import router from "@/plugins/router"
import vuex from "@/plugins/vuex"
import vGallery from "@/hook/directives/vGallery"
import vShowImg from "@/hook/directives/vShowImg"
import vFocus from "@/hook/directives/vFocus"
import vDrag from '@/hook/directives/vDrag'
export default {
    install(app, options) {
        app.use(ElementPlus, { locale })
        Object.keys(icons).forEach(key => {
            if (Reflect.has(icons, key)) {
                app.component(key, icons[key])
            }
        })
        app.use(router)
        app.use(vuex)
        //v-drag
        app.directive('drag', vDrag)
        //v-focus
        app.directive('focus', vFocus)
        //v-showImg
        app.directive('showImg', vShowImg);
        //v-gallery
        app.directive('gallery', vGallery)
        console.log(app.version);
    }
}