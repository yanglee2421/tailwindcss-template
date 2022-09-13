<template>
  <div>
    <fw-switch v-model="state.val"></fw-switch>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { reactive } from "vue";

const state = reactive({
  val: true,
});
</script>
<style lang='scss' scoped>
</style>