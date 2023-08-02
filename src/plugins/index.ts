// Vue Imports
import type { Plugin, DefineComponent } from "vue";
import { router } from "@/router";
import { pinia } from "./pinia";
import { VueQueryPlugin, queryClientConfig } from "./vue-query";
import { ElementPlus } from "./element-plus";
import { icons } from "./el-icons";

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
