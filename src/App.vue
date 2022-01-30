<template>
  <!-- 调用子组件 -->
  <send></send>
  <receive></receive>
</template>

<script>
// 以自定义变量接收子组件
import HelloWorld from "./components/HelloWorld.vue";
import send from "./brothers/send.vue";
import receive from "./brothers/receive.vue";

export default {
  //本组件名为App
  name: "App",
  // 子组件列表
  components: {
    HelloWorld,
    send,
    receive,
  },
};
</script>
