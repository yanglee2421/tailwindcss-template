import * as Vue from "vue";
import App from "./App.vue";
import { router } from "@/router";
import { AclPlugin } from "@/configs/acl";
import { Pinia, ElementIcons, Icons, VueQuery } from "@/plugins";
import plugins from "@/plugins";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/assets/scss/global.scss";
import "@/assets/css/style.css";

const app = Vue.createApp(App);

app.use(ElementIcons);

app.use(router);
app.use(Pinia);
app.use(VueQuery);
app.use(AclPlugin);

app.use(Icons);
app.use(plugins);

app.mount("#root");
