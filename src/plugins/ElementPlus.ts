// Styles Imports
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import ElementPlusPlugin from "element-plus";
import locale from "element-plus/es/locale/lang/zh-cn";

// Vue Imports
import * as Vue from "vue";

export const ElementPlus: Vue.Plugin = {
  install(app) {
    app.use(ElementPlusPlugin, { locale });
  },
};
