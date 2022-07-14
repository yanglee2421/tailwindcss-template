<template>
  <div>
    <el-input
      v-model.trim="a"
      @input="a=+$event.replace(/[^\d]/g,'')"
    />
  </div>
</template>
<script lang='ts' setup>
import { ref, watchEffect, watch } from "vue";
const log = (i: unknown, ...j: unknown[]) => {
  console.log(i, ...j);
};
const a = ref<number | string>("");
</script>
<style lang='scss' scoped>
</style>