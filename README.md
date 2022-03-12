# Vue基础
## 1. 搭建Vue项目
1. `vite`法
~~~powershell
npm create vite-app '项目名称'
cd '项目名称'
npm i
npm run dev
~~~
2. `Vue-cli`法
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
1. 内容渲染
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
2. 属性绑定
    - `v-bind`
        ~~~html
        <p v-bind:style='variable'></p>
        <p :style='variable'></p>
        ~~~
3. 事件绑定
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
4. 双向绑定
    - `v-model`
        >设置`input`标题的`value`为一个变量
    - 修饰符
        - `.number`，转为`number`类型
        - `.trim`，过滤首尾空格
        - `.lazy`，改值时才更新
5. 条件渲染
    - `v-if`
    - `v-else-if`
    - `v-else`
    - `v-show`
6. 列表渲染
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
export default {
    name:componentName
}
~~~
1. `data()`
    - Vue组件中`this`默认指向`data()`返回的对象
~~~vue
export default {
    data(){
        return {
            variable:'值'
        }
    }
}
~~~
2. `methods`
~~~vue
export defalut {
    fun(){}
}
~~~
3. 