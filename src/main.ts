import { createApp } from "vue";
import App from "./App.vue";
import getStart from "@/plugins";
import "@/assets/reset.scss";

const app = createApp(App);
app.use(getStart);
app.mount("#root");
