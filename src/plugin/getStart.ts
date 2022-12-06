/**
 * vue-router
 * pinia
 * element-plus
 * @element-plus/icons-vue
 * 自定义全局组件
 * 自定义指令
 */
import { createPinia } from "pinia";
import router from "@/router";
import ElementPlus from "element-plus";
import locale from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import * as icons from "@element-plus/icons-vue";
import * as components from "@/components";
import * as directives from "@/util";
import type { App } from "vue";
export default {
  install(app: App) {
    /**
     * vuex
     * vue-router
     * pinia
     * element-plus
     * @element-plus/icons-vue
     * 自定义全局组件
     * 自定义指令
     */
    app.use(createPinia());
    app.use(router);
    app.use(ElementPlus, {
      locale,
    });
    Object.keys(icons).forEach((key) => {
      Reflect.has(icons, key) &&
        app.component(key, icons[key as keyof typeof icons]);
    });
    Object.keys(components).forEach((key) => {
      Reflect.has(components, key) &&
        app.component(key, components[key as keyof typeof components]);
    });
    Object.keys(directives).forEach((key) => {
      Reflect.has(directives, key) &&
        app.directive(key, directives[key as keyof typeof directives]);
    });
  },
};
