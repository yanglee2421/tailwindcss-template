import { createPinia } from "pinia";
import * as Vue from "vue";
import "@/assets/css/style.css";
import "@/assets/scss/global.scss";
import { VueQuery } from "@/plugins/VueQuery";
import { router } from "@/router/router";
import App from "./App.vue";

const app = Vue.createApp(App);

app.use(router);
app.use(createPinia());
app.use(VueQuery);

app.mount("#root");
