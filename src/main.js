/*
 * @Author: 张远航
 * @Date: 2022-03-21 13:48:41
 * @LastEditTime: 2022-03-22 18:34:41
 * @LastEditors: 张圣
 * @Description: 
 * @FilePath: \vue3note\src\main.js
 */
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