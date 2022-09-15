<template>
  <h2>以下是插槽接收到的内容：</h2>
  <el-table></el-table>
  <el-row>
    <el-input v-bind="$attrs" />
  </el-row>
  <slot
    :msg="state.msg"
    show="777"
    >插槽占位</slot
  >
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  msg: "要传给插槽内容的数据",
});
defineExpose({ name: "12" });
</script>
<style lang="scss" scoped></style>
