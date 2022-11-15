import { createApp } from "vue";
import App from "./App.vue";
import getStart from "@/plugin/getStart";
const app = createApp(App);
app.use(getStart);
app.mount("#app");
console.log(import.meta.env);
