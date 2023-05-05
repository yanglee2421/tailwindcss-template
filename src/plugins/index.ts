import { router } from "@/routes";
import type { Plugin, DefineComponent } from "vue";
import { pinia } from "./pinia";
import { VueQueryPlugin, queryClientConfig } from "./vue-query";
import { ElementPlus } from "./element-plus";
import { icons } from "./el-icons";

// 引入 components/ 下所有以 ly- 开头的 vue 文件
const lyComponents = import.meta.glob<DefineComponent<{}, {}, any>>(
  "@/component/**/ly-*.vue",
  {
    eager: true,
    import: "default",
  }
);

export const plugin: Plugin = {
  install(app) {
    app.use(VueQueryPlugin, queryClientConfig());
    app.use(pinia);
    app.use(router);
    app.use(ElementPlus);
    app.use(icons);

    Object.entries(lyComponents).forEach(([key, component]) => {
      const name = key.replace(/(^\/.+\/)|(\.vue$)/g, "");
      app.component(name, component);
    });
  },
};
