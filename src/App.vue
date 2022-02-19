<!--相当于html文件中的body部分-->
<template>
  <!-- 调用子组件 -->
  <hello-world></hello-world>
</template>
<!--相当于html文件中的style标签,scoped属性表示这个标签内的样式只作用于此组件,不会溢出,原理是自定义html属性和属性选择器的连用-->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
<script>
// 以自定义变量接收子组件
import HelloWorld from "./components/HelloWorld.vue";
// 组件对象
export default {
  //本组件名为App
  name: "App",
  // 数据函数,返回的对象中包含此组件中要用到的变量和值
  data() {
    //在这个script标签中所有的this关键字都指向这个对象,这个对象中的属性值发生变动时,DOM会被重新渲染一次
    return {};
  },
  // 子组件对象,用来接收被引入的子组件
  components: {
    HelloWorld,
  },
  // 方法对象,用来保存此组件中要用到的方法
  methods: {
    fun() {
      console.log("这是一个方法");
    },
  },
  // 计算属性对象,用来进行组件中一些值的计算,与methods不同其结果会被存入缓存
  computer: {},
};
</script>
