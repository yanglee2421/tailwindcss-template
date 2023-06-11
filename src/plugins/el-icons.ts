import { Plugin } from "vue";
import * as elIcons from "@element-plus/icons-vue";

export const icons: Plugin = {
  install(app) {
    Object.entries(elIcons).forEach(([key, value]) => {
      app.component(key, value);
    });
  },
};
