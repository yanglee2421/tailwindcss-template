<template>
  <div>
    <h3>父向子：父</h3>
    <el-input v-model="state.value" />
    <div class="p-1 mt-1 b">
      <Son :value="state.value"></Son>
    </div>
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