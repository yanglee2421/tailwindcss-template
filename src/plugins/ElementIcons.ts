// Vue Imports
import * as Vue from "vue";

// Icons Imports
import * as icons from "@element-plus/icons-vue";

export const ElementIcons: Vue.Plugin = {
  install(app) {
    Object.entries(icons).forEach(([key, value]) => {
      app.component(key, value);
    });
  },
};
