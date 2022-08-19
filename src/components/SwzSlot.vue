<template>
  <div>
    <h2>以下是插槽接收到的内容：</h2>
    <slot
      :msg="state.msg"
      show="777"
    >插槽占位</slot>
  </div>
</template>
<script lang='ts' setup>
import { reactive, useAttrs } from "vue";

const state = reactive({
  msg: "要传给插槽内容的数据",
});
const attr = useAttrs();
console.log(attr);
</script>
<style lang='scss' scoped>
</style>