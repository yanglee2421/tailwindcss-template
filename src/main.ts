import { createApp } from "vue";
import App from "./App.vue";
import getStart from "@/plugins";
import "@yanglee2421/scss";

const app = createApp(App);
app.use(getStart);
app.mount("#root");
