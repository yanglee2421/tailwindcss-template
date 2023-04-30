import { createApp } from "vue";
import App from "./App.vue";
import { plugin } from "@/plugins";
import "@yanglee2421/scss";

const app = createApp(App);
app.use(plugin);
app.mount("#root");
