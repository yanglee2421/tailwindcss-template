import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import locale from 'element-plus/es/locale/lang/zh-cn'
import * as icons from "@element-plus/icons-vue"
import store from "@/plugins/store"
import router from "@/router"
import * as components from "@/components"
import * as directives from "@/hooks"
interface App {
    use(plugin: unknown, option?: unknown): void
    component(name: string, component: unknown): void
    directive(name: string, directive: Function | Record<string, unknown>): void
}
export default {
    install(app: App) {
        app.use(ElementPlus, {
            locale,
        })
        app.use(store)
        app.use(router)
        Object.keys(icons).forEach(key => {
            Reflect.has(icons, key) && app.component(key, icons[<keyof typeof icons>key])
        })
        Object.keys(components).forEach(key => {
            Reflect.has(components, key) && app.component(key, components[key as keyof typeof components])
        })
        Object.keys(directives).forEach(key => {
            Reflect.has(directives, key) && app.directive(key, directives[key as keyof typeof directives])
        })
    }
}
