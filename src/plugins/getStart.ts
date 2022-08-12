import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import locale from 'element-plus/es/locale/lang/zh-cn'
import * as icons from "@element-plus/icons-vue"
import router from "@/router/router"
import store from "@/plugins/store"
import HelloWorld from "@/components/HelloWorld.vue"
interface App {
    use(plugin: unknown, option?: unknown): void
    component(name: string, component: unknown): void
}
export default {
    install(app: App) {
        app.use(ElementPlus, {
            locale
        })
        Object.keys(icons).forEach((key) => {
            Reflect.has(icons, key) && app.component(key, icons[<keyof typeof icons>key])
        })
        app.use(router)
        app.use(store)
        app.component("HelloWorld", HelloWorld)
    }
}