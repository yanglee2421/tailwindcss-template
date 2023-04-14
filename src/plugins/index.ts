import { createPinia } from "pinia";
import { router } from "@/routes";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import * as icons from "@element-plus/icons-vue";
import Vue from "vue";

// 引入 components/ 下所有以 ly- 开头的 vue 文件
const lyComponents = import.meta.glob<Vue.DefineComponent<{}, {}, any>>(
  "@/component/**/ly-*.vue",
  {
    eager: true,
    import: "default",
  }
);

export default {
  install(app: Vue.App) {
    app.use(createPinia());
    app.use(router);
    app.use(ElementPlus);

    Object.entries(icons).forEach(([key, icon]) => app.component(key, icon));
    Object.entries(lyComponents).forEach(([key, component]) => {
      const name = key.replace(/(^\/.+\/)|(\.vue$)/g, "");
      app.component(name, component);
    });
  },
};
