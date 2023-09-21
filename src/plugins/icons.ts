// Vue Imports
import { Plugin, DefineComponent } from "vue";

const iconComponents = import.meta.glob<DefineComponent<{}, {}, any>>(
  "@/components/**/icon-*.vue",
  {
    eager: true,
    import: "default",
  }
);

export const icons: Plugin = {
  install(app) {
    Object.entries(iconComponents).forEach(([key, component]) => {
      const name = key.replace(/(^\/.+\/)|(\.vue$)/g, "");
      app.component(name, component);
    });
  },
};
