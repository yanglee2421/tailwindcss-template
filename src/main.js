import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import * as icons from "@element-plus/icons-vue"
Object.keys(icons).forEach(item => {
  if (Reflect.has(icons, item)) {
    app.component(item, icons[item])
  }
})
app.use(ElementPlus, {
  locale
})
import vuex from "@/vuex"
app.use(vuex)
app.mount('#app')
localStorage.setItem('token', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjI5RDQyN0YyOTJDREJDQjI4RDdERjc4NDA5NEQ1Mjk5IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTAwMTYyNjYsImV4cCI6MTY1MDAxOTg2NiwiaXNzIjoiaHR0cHM6Ly9zc28uZmZ5LmZpbmVleGV4LmNvbSIsImNsaWVudF9pZCI6InNhYXMud2VjaGF0X2FwcGxldCIsInN1YiI6IjE1NDgyNTg5OSIsImF1dGhfdGltZSI6MTY1MDAxNjI2NiwiaWRwIjoibG9jYWwiLCJjb21wYW55aWQiOiIxIiwiY29tcGFueW5hbWUiOiLmvJTnpLrns7vnu58xMTExMjIyIiwiZG9tYWluX3ByZWZpeCI6ImZpbmVleCIsInVzZXJubyI6IjE3NjAxMjM2OTg1IiwibmFtZSI6IkNIRU5ZSSIsIm5pY2tuYW1lIjoiIiwicGhvbmVfbnVtYmVyIjoiMTc2KioqKjY5ODUiLCJlbWFpbCI6IiIsImp0aSI6IkU3QkI4OTc0QThENDQxQUYwRkUxMTQ2MUQ3QzIxM0VDIiwiaWF0IjoxNjUwMDE2MjY2LCJzY29wZSI6WyJiYXNlX2F1dGgiLCJvcGVuaWQiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.FAMaHLL7OS3j_iOXYJTsLybDQr183Gn3GyL79T3JZcEMFJVxfbk63hppigRDm--fqJF8l08ve6_foR5kngOBhmzWyZtJYR9JkQ8RMima314wmPBSK_-Lo6_RSj-O_A58cDTV1yWsw-xqsaVioG-wHa2bdkVI1H-oI4eULj-mVqaI6G-MC4u3LVUmoGMW5w5PiIyzsjbVOCXgzrhDAM7Kmjn1nN7RF7RDmZmImdEw-RLqQgWI8WrD0-D9tEGJjvpz020EBCpY9z8NC6QKxBbnGX43UjvKpBQ2lAl3nXV1B_cYlU7lka9J2szVH22LugVJdxjecA6wMenLdSYDgmyD5g')