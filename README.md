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
    fun(){}
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
### 8. Vue生命周期
~~~vue
<script>
export default {
    beforeCreate(),
    created(),
    beforeMount(),
    Mount(),
    BeforeUpdate(),
    updated(),
    // keep-alive
    activated(),
    deactivated(),
    // Vue2
    beforeDestory(),
    destoryed(),
    // Vue3
    BeforeUnmount(),
    Unmounted()
}
</script>
~~~
## 4. Vue全局