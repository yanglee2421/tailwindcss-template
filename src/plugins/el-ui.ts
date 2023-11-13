// Styles Imports
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import elPlus from "element-plus";
import locale from "element-plus/es/locale/lang/zh-cn";

// Vue Imports
import * as Vue from "vue";

export const elUI: Vue.Plugin = {
  install(app) {
    app.use(elPlus, { locale });
  },
};
