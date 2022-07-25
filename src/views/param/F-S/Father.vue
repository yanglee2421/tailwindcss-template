<template>
  <div>
    <h2>父向子：父</h2>
    <el-input v-model="state.value" />
    <Son :value="state.value"></Son>
  </div>
</template>
<script lang='ts' setup>
import Son from "./Son.vue";
import { reactive } from "vue";
interface State {
  value: string;
}
const state = reactive<State>({
  value: "",
});
</script>
<style lang='scss' scoped>
</style>