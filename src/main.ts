// Vue Imports
import { createApp } from "vue";

// App Imports
import App from "./App.vue";

// Plugin Imports
import { plugin } from "@/plugins";

// Styles Imports
import "@/assets/scss/global.scss";

const app = createApp(App);
app.use(plugin);
app.mount("#root");
