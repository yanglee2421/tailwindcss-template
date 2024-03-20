import type * as Vue from "vue";

const lyComponents = import.meta.glob<Vue.DefineComponent<{}, {}, any>>(
  "@/components/**/ly-*.vue",
  {
    eager: true,
    import: "default",
  },
);

export const plugins: Vue.Plugin = {
  install(app) {
    Object.entries(lyComponents).forEach(([key, component]) => {
      const name = key.replace(/(^\/.+\/)|(\.vue$)/g, "");
      app.component(name, component);
    });
  },
};
