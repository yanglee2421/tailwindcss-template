<template>
  <div>
    <details class="b">
      <summary>标题</summary>
      <p>内容</p>
      <p>内容一</p>
    </details>
  </div>
</template>
<script lang='ts' setup>
import { reactive } from "vue";

const state = reactive({});
</script>
<style lang='scss' scoped>
.b {
  transition: all;
}
</style>