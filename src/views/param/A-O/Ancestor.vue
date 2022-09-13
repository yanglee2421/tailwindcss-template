<template>
  <div>
    <h3>祖先的</h3>
    <el-input v-model="state.value" />
    <div class="p-1 mt-1 b">
      <Offspring></Offspring>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { provide, reactive } from "vue";
import Offspring from "./Offspring.vue";
const state = reactive({
  value: "",
});
provide("state", state);
</script>
<style lang='scss' scoped>
</style>