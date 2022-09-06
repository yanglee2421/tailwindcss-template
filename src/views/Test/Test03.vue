<template>
  <div>
    <el-switch
      v-model="state.mes"
      :active-value="1"
      :inactive-value="0"
      active-text="上架"
      inactive-text="下架"
      inline-prompt
      size="large"
    />
    <fw-switch v-model="state.mes"></fw-switch>
    <el-button @click="state.mes=1">01</el-button>
    <el-button @click="state.mes=0">00</el-button>
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
  mes: 0,
});
</script>
<style lang='scss' scoped>
</style>