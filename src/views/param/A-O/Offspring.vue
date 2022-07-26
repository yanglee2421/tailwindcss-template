<template>
  <div>
    <h3>后代中</h3>
    <el-input v-model="state.value" />
  </div>
</template>
<script lang='ts' setup>
import { inject } from "vue";
interface State {
  value: string;
}
const state = inject<State>("state")!;
</script>
<style lang='scss' scoped>
</style>