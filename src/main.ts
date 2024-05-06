import { abilitiesPlugin } from "@casl/vue";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import { createPinia } from "pinia";
import * as Vue from "vue";
import "@/assets/css/style.css";
import "@/assets/scss/global.scss";
import { defineAbilityFor } from "@/libs/defineAbilityFor";
import { VueQuery } from "@/plugins/VueQuery";
import { router } from "@/router/router";
import App from "./App.vue";

const app = Vue.createApp(App);

app.use(router);
app.use(createPinia());
app.use(VueQuery);
app.use(abilitiesPlugin, defineAbilityFor("guest"));

app.mount("#root");
