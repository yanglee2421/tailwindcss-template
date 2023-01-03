<template>
  <el-card header="计数器">
    <h2>count：{{ count }}</h2>
    <el-button
      @click="count++"
      type="success"
      plain
      class="mt-1"
      >+1</el-button
    >
    <el-button
      @click="count = 1"
      type="danger"
      plain
      class="mt-1"
      >=1</el-button
    >
  </el-card>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
const count = ref(0);
</script>
<style lang="scss" scoped></style>
