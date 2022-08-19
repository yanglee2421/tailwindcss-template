<template>
  <div>
    <h2>以下是插槽接收到的内容：</h2>
    <el-input
      v-model="state.msg"
      @input="onSwzChange($event)"
      @change="onSwzClick"
    />
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
interface _attr {
  onSwzChange: Function;
  onSwzClick: Function;
}
const { onSwzChange, onSwzClick } = attr as unknown as _attr;
console.log(attr);
</script>
<style lang='scss' scoped>
</style>