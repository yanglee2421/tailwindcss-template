import store from "./store";
import router from "@/router";
import ElementPlus from "element-plus";
import locale from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import * as icons from "@element-plus/icons-vue";
import * as components from "@/components";
import * as directives from "@/tool";
import type { Directive } from "vue";
interface App {
  use(plugin: unknown, option?: unknown): void;
  component(name: string, component: unknown): void;
  directive(name: string, directive: Directive): void;
  mixin(ComponentOptions: unknown): void;
}
export default {
  install(app: App) {
    app.use(store);
    app.use(router);
    app.use(ElementPlus, {
      locale,
    });
    Object.keys(icons).forEach((key) => {
      Reflect.has(icons, key) &&
        app.component(key, icons[<keyof typeof icons>key]);
    });
    Object.keys(components).forEach((key) => {
      Reflect.has(components, key) &&
        app.component(key, components[key as keyof typeof components]);
    });
    Object.keys(directives).forEach((key) => {
      Reflect.has(directives, key) &&
        app.directive(key, directives[key as keyof typeof directives]);
    });
  },
};
