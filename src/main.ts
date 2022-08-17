import { createApp } from 'vue'
import App from './App.vue'
import getStart from "@/plugins/getStart"
createApp(App).use(<any>getStart).mount('#app')
