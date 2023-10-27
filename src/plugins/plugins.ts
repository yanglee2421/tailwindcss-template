// Vue Imports
import type { Plugin, DefineComponent } from "vue";

// Plugins Imports
import { router } from "@/router";
import { pinia } from "./pinia";
import { VueQueryPlugin, queryClientConfig } from "./vue-query";
import { elUI } from "./el-ui";
import { elIcons } from "./el-icons";
import { icons } from "./icons";

const lyComponents = import.meta.glob<DefineComponent<{}, {}, any>>(
  "@/components/**/ly-*.vue",
  {
    eager: true,
    import: "default",
  }
);

export const plugins: Plugin = {
  install(app) {
    app.use(VueQueryPlugin, queryClientConfig());
    app.use(pinia);
    app.use(router);
    app.use(elUI);
    app.use(elIcons);
    app.use(icons);

    Object.entries(lyComponents).forEach(([key, component]) => {
      const name = key.replace(/(^\/.+\/)|(\.vue$)/g, "");
      app.component(name, component);
    });
  },
};
