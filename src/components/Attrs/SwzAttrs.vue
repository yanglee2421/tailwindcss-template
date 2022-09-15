<template>
  <div>
    <h2>以下是插槽接收到的内容：</h2>
    <div>
      <el-input v-bind="$attrs" />
    </div>
  </div>
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
</script>
<style lang="scss" scoped></style>
