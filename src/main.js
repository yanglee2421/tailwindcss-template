// 从npm中导入vue对象的createApp方法
import {
    createApp
} from 'vue'
// 以变量App接收App.vue主组件
import App from './App.vue'
// 导入CSS
import './index.css'
// 将主组件挂载到#app选择器指向的元素
createApp(App).mount('#app')