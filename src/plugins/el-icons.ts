// Vue Imports
import { Plugin } from "vue";

// Icons Imports
import * as icons from "@element-plus/icons-vue";

export const elIcons: Plugin = {
  install(app) {
    Object.entries(icons).forEach(([key, value]) => {
      app.component(key, value);
    });
  },
};
