import { createApp } from "vue";
import App from "./App.vue";
import getStart from "@/plugin";
// import "@/a"

const app = createApp(App);
app.use(getStart);
app.mount("#root");
