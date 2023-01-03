/**
 * vue-router
 * pinia
 * element-plus
 * @element-plus/icons-vue
 * 自定义全局组件
 * 自定义指令
 */
import { createPinia } from "pinia";
import router from "@/route";
import ElementPlus from "element-plus";
import locale from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import * as icons from "@element-plus/icons-vue";
import * as components from "@/components";
import Vue from "vue";
// 引入ly-components
const lyComponents = import.meta.glob<Vue.DefineComponent<{}, {}, any>>(
  "@/components/**/ly-*.vue",
  {
    eager: true,
    import: "default",
  }
);
// 引入v-directives
const vDirectives = import.meta.glob<Vue.Directive>("@/hook/v-/v-*.ts", {
  eager: true,
  import: "default",
});

export default {
  install(app: Vue.App) {
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
    // 注册el-icons
    Object.entries(icons).forEach(([key, icon]) => {
      app.component(key, icon);
    });
    Object.entries(components).forEach(([key, component]) => {
      Reflect.has(components, key) && app.component(key, component);
    });
    // 注册ly-components
    Object.entries(lyComponents).forEach(([key, component]) => {
      const name = key.replace(/(^\/.+\/)|(\.vue$)/g, "");
      app.component(name, component);
    });
    // 注册自定义指令
    Object.entries(vDirectives).forEach(([key, directive]) => {
      const vName = key.replace(/(^\/.+\/v-)|(\.ts$)/g, "");
      app.directive(vName, directive);
    });
  },
};
