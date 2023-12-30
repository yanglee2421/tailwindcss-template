// Vue Imports
import * as Vue from "vue";

const iconComponents = import.meta.glob<Vue.DefineComponent<{}, {}, any>>(
  "@/components/**/icon-*.vue",
  {
    eager: true,
    import: "default",
  }
);

export const Icons: Vue.Plugin = {
  install(app) {
    Object.entries(iconComponents).forEach(([key, component]) => {
      const name = key.replace(/(^\/.+\/)|(\.vue$)/g, "");
      app.component(name, component);
    });
  },
};
