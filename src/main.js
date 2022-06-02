import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import getStart from '@/plugins/getStart'
const app = createApp(App)
app.use(getStart)
app.mount('#app')