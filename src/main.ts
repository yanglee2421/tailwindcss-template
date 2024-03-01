import * as Vue from "vue";
import App from "./App.vue";
import { router } from "@/router";
import { VueQuery } from "@/plugins/VueQuery";
import { createPinia } from "pinia";
import { abilitiesPlugin } from "@casl/vue";
import { defineAbilityFor } from "@/utils/defineAbilityFor";

import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/assets/scss/global.scss";
import "@/assets/css/style.css";

const app = Vue.createApp(App);

app.use(router);
app.use(createPinia());
app.use(VueQuery);
app.use(abilitiesPlugin, defineAbilityFor("guest"));

app.mount("#root");
