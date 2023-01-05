import { createApp } from "vue";
import App from "./App.vue";
import getStart from "@/plugin";
const app = createApp(App);
app.use(getStart);
app.mount("#root");
