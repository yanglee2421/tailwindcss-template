# Vue基础
## 1. 搭建Vue项目
### 1. `vite`法
~~~powershell
npm create vite-app '项目名称'
cd '项目名称'
npm i
npm run dev
~~~
### 2. `Vue-cli`法
- 安装`Vue-cli`
~~~powershell
npm i -g @vue/cli
npm run serve
~~~
- UI法
~~~powershell
vue ui
~~~
- 命令行法
~~~powershell
vue create '项目名称'
~~~
## 2. vue指令
### 1. 内容渲染
- `v-html`
~~~html
<p v-html='<span>文本节点</span>'></p>
~~~
- `v-text`
~~~html
<p v-text='文本节点'></p>
~~~
- `{{}}`
~~~html
<p>{{variable}}<p>
~~~
### 2. 属性绑定
- `v-bind`
~~~html
<p v-bind:style='variable'></p>
<p :style='variable'></p>
~~~
### 3. 事件绑定
- `v-on`
~~~html
<div v-on:click='function'></div>
<div @click='function'></div>
~~~
- `$event`
    - 不指定绑定事件的参数时，默认的第一个参数为`event`对象
    - 指定参数时，`event`对象会被覆盖
    - `event`对象被覆盖时，以`$event`解决
- 修饰符
    - `.prevent`，取消默认行为
    - `.stop`，阻止事件冒泡
    - `.capture`，以捕获模式触发事件
    - `.once`，事件仅触发一次
    - `.self`，仅在`event.target`是自身时才触发事件
    - `.esc`，按键为ESC
    - `.enter`，按键为Enter
### 4. 双向绑定
- `v-model`
    >设置`input`标题的`value`为一个变量
- 修饰符
    - `.number`，转为`number`类型
    - `.trim`，过滤首尾空格
    - `.lazy`，改值时才更新
### 5. 条件渲染
- `v-if`
- `v-else-if`
- `v-else`
- `v-show`
### 6. 列表渲染
- `v-for`
~~~vue
<template>
<li v-for='(item,index) in arr' :key='variable'></li>
</template>
<script>
export defalut {
    data(){
        return {
           arr:[
               {variable:1,num:'值'},
               {variable:2,num:'值'}
           ]
        }
    }
}
</script>
~~~
- 注意
    1. `:key`的值只能是`number`或`string`
    2. `:key`的值不能重复
    3. 常用`id`作为`:key`属性
    4. 不建议用`index`作为`:key`，DOM发生变动时`index`的指向会发生变化
    5. `:key`能提升性能
## 3. Vue组件
0. `name`
~~~vue
<script>
export default {
    name:'组件名'
}
</script>
~~~
***
### 1. `props`
- 简单用法
~~~vue
<script>
export defalut {
    props:[]
}
</script>
~~~
- 高级用法
~~~vue
<script>
export default {
    props:{
        variable:{
            type:'数据类型',
            //是否必填
            required:true,
            //默认值
            default:'默认值',
            //自定义函数验证
            fun(){
                //返回Boolean，表示是否通过
                return true
            }
        }
    }
}
</script>
~~~
### 2. `methods`
~~~vue
<script>
export defalut {
    methods:{
        fun(){}
    }
}
</script>
~~~
### 3. `data()`
- Vue组件中`this`默认指向`data()`返回的对象
~~~vue
<script>
export default {
    data(){
        return {
            variable:'值'
        }
    }
}
</script>
~~~
### 4. `computed`
- 方法内`this`后的属性的依赖发生变化时，方法会被执行一次
~~~vue
<script>
export default {
    computed:{
        variable(){
            return this.variable + 1
        }
    },
    data(){
        return {
            variable:'值'
        }
    }
}
</script>
~~~
### 5. `watch`
- 普通用法
~~~vue
<script>
export default {
    watch:{
        variable(newNum,oldNum){}
    }
}
</script>
~~~
- 高级用法
~~~vue
<script>
export default {
    watch:{
        variable:{
            //加载时调用
            immediate:true,
            //深度监测
            deep:true,
            handler(newNum,oldNum){}
        }
    }
}
</script>
~~~
### 6. `components`
~~~vue
<script>
export default {
    components:{
        componentName
    }
} 
</script>
~~~
### 7. `emits`
~~~vue
<script>
export default {
    // 声明自定义事件
    emits:['事件名'],
    methods:{
        fun(){
            // 触发自定义事件,并将第二个参数(可选)作为事件方法的第一个参数
            this.$emit('事件名',this.variable)
        }
    }
}
</script>
~~~
### 8. `directives`
- 把生命周期钩子封装成一个类名
- 每个钩子里都有四个参数
    - `el`，DOM元素
    - `binding`，包含以下属性的对象
        - `instance`，使用此指令的组件实例
        - `value`，指令的值
        - `oldValue`，旧值（仅更新的两个钩子可用）
        - `arg`，指令的参数
        - `modifiers`，修饰符
        - `dir`，指令对象
    - `vnode`，虚拟DOM
    - `prevVnode`，上一个虚拟DOM
~~~vue
<script>
export default {
    directives:{
        variable:{
            created(){},
            beforeMount(){},
            Mount(){},
            BeforeUpdate(){},
            updated(){},
            // Vue2
            beforeDestory(){},
            destoryed(){},
            // Vue3
            BeforeUnmount(){},
            Unmounted(){}
        }
    }
}
</script>
~~~
### 9. Vue生命周期
~~~vue
<script>
export default {
    beforeCreate(){},
    created(){},
    beforeMount(){},
    Mount(){},
    BeforeUpdate(){},
    updated(){},
    // keep-alive
    activated(){},
    deactivated(){},
    // Vue2
    beforeDestory(){},
    destoryed(){},
    // Vue3
    BeforeUnmount(){},
    Unmounted(){}
}
</script>
~~~
### 10. `provide()`
- 向后代传参
    - 非响应式
    ~~~vue
    <script>
    export default {
        provide(){
            return {
                variable:'值'
            }
        }
    }
    </script>
    ~~~
    - 响应式写法
    ~~~vue
    <script>
    import { computed } from 'vue'
    export default {
        provide(){
            return {
                variable:computed(() => this.variable)
            }
        }
    }
    </script>
    ~~~
### 11. `inject`
- 接收`provide`传递的参数
    - 非响应式
    ~~~vue
    <script>
    export default {
        inject:['variable']
    }
    </script>
    ~~~
    - 响应式
    ~~~vue
    <template>
        <!-- 此时，需要以.value方式调用 -->
        {{variable.value}}
    </template>
    <script>
    export default {
        inject:['variable']
    }
    </script>
    ~~~
***
### 0. `ref`
- 用来获取DOM元素
~~~vue
<template>
    <h1 ref='variable'></h1>
</template>
<script>
export default {
    methods:{
        fun(){
            // 以此调用DOM元素
            $refs.variable
        }
    }
}
</script>
~~~
### 1. `keep-alive`
~~~vue
<template>
    <keep-alive>
        <myComponents></myComponents>
    </keep-alive>
</template>
~~~
### 2. `slot`
- 普通用法
    - 声明
    ~~~vue
    <template>
        <solt>
            当插槽没有被使用时，此处的内容会显示出来
        </solt>
    </template>
    ~~~
    - 调用
    ~~~vue
    <template>
        <myComponents>
            <h1>将此标签嵌入到插槽的位置</h1>
        </myComponents>
    </template>
    ~~~
- 具名插槽
    - 声明
    ~~~vue
    <template>
        <solt name='名字'></solt>
    </template>
    ~~~
    - 调用
    ~~~vue
    <template>
        <myComponents>
            <template v-solt:'名字'></template>
        </myComponents>
    </template>
    ~~~
- 作用域插槽
    >由子组件向父组件传参，若要传多个参可用解构赋值
    - 声明
    ~~~vue
    <template>
        <solt :info='variable'></solt>
    </template>
    ~~~
    - 调用
    ~~~vue
    <template>
        <myComponents>
            <template v-solt:default='接收的名字'>
                {{接收的名字}}
            </template>
        </myComponents>
    </template>
    ~~~
### 3. `component`
- 用于组件切换
~~~vue
<template>
    <!-- is属性的值是一个string -->
    <component :is='componentName'></component>
</template>
<script>
import componentName from '组件路径'
export default {
    components:{
        componentName
    }
}
</script>
~~~
***
### 1. `scoped`
~~~vue
<style scoped>
/* 若要对子组件也生效 */
/deep/ .className {}
/* Vue3中建议使用新方法 */
:deep(.className) {}
</style>
~~~
## 4. Vue全局
### 1. `component`
- 用于注册全局组件
- 以驼峰法命名可以被短横线调用，反之不行。在局部注册中也一样
~~~js
import myComponents from '组件路径'
app.component('组件名', myComponents)
//惯用套路
app.component(mycomponents.name, mycomponents)
~~~
### 2. `config`
### 3. `directive`
- 用于注册全局指令
    - 常规写法
    ~~~js
    app.directive('指令名', {
        /*这个对象的写法跟局部组件中的写法一样*/
    })
    ~~~
    - 简写
    ~~~js
    app.directive('指令名', ()=>{
        /* 视作mounted和update的回调 */
    })
    ~~~
### 4. `mixin`
### 5. `mount`
- 用于注册根组件实例
~~~js
app.mount('#DOM_id')
~~~
### 6. `provide`
- 向所有组件传递一个参数，在组件内以`inject`接收
~~~js
app.provide('variable', '值')
~~~
### 7. `unmount`
- 卸载根组件实例
~~~js
app.unmount()
~~~
### 8. `use`
- 在Vue安装插件，类似注册全局组件
#### `element-plus`
>在项目中安装模块
~~~powershell
npm i element-ui
~~~
>在Vue中安装
- 完整引入
~~~js
import ElementUI from 'element-plus'
import 'node_modules\element-plus\theme-chalk\index.css'
app.use(ElementUI)
~~~
- 按需引入
#### `vuex`
### 9. `version`
- 字符串形式的Vue版本号
~~~js
app.version
~~~
## 5. `vue-router`
### 1. 安装
>在项目中安装模块，不写在main.js中，新在自定义的router.js中
~~~powershell
npm i vue-router@next
~~~
>在Vue中安装
~~~js
import myComponent from '组件路径'
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        { path:'组件路径', component:myComponent }
    ]
})
export default router
~~~