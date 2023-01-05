import { createPinia } from "pinia";
import { router } from "@/route";
import ElementPlus from "element-plus";
import locale from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import * as icons from "@element-plus/icons-vue";
import Vue from "vue";
// 引入 components/ 下所有以 ly- 开头的 vue 文件
const lyComponents = import.meta.glob<Vue.DefineComponent<{}, {}, any>>(
  "@/components/**/ly-*.vue",
  {
    eager: true,
    import: "default",
  }
);
// 引入 hook/v-/ 下所有以 v- 开头的 ts 文件
const vDirectives = import.meta.glob<Vue.Directive>("@/hook/v-/v-*.ts", {
  eager: true,
  import: "default",
});

export default {
  install(app: Vue.App) {
    /**
     * pinia
     * vue-router
     * element-plus
     */
    app.use(createPinia());
    app.use(router);
    app.use(ElementPlus, { locale });
    /**
     * el-icons
     * ly-components
     * 自定义指令
     */
    Object.entries(icons).forEach(([key, icon]) => app.component(key, icon));
    Object.entries(lyComponents).forEach(([key, component]) => {
      const name = key.replace(/(^\/.+\/)|(\.vue$)/g, "");
      app.component(name, component);
    });
    Object.entries(vDirectives).forEach(([key, directive]) => {
      const name = key.replace(/(^\/.+\/v-)|(\.ts$)/g, "");
      app.directive(name, directive);
    });
  },
};
