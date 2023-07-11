// Vue Imports
import { Plugin } from "vue";

// Icons Imports
import * as elIcons from "@element-plus/icons-vue";

export const icons: Plugin = {
  install(app) {
    Object.entries(elIcons).forEach(([key, value]) => {
      app.component(key, value);
    });
  },
};
