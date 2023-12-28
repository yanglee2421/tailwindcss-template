// Vue Imports
import * as Vue from "vue";

// App Imports
import App from "./App.vue";

// Plugin Imports
import plugins from "@/plugins";

// Styles Imports
import "@/assets/scss/global.scss";
import "@/assets/css/style.css";

const app = Vue.createApp(App);
app.use(plugins);
app.mount("#root");
