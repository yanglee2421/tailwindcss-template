<template>
  <div>
    <!-- <input type="text" v-focus />
      -->
    <el-radio-group v-model="radio1" size="large">
      <el-radio-button label="New York" />
      <el-radio-button label="Washington" />
      <el-radio-button label="Los Angeles" />
      <el-radio-button label="Chicago" />
    </el-radio-group>
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";

const radio1 = ref(true);
watchEffect(() => {
  console.log(radio1.value);
});
</script>
<style lang='scss' scoped>
.el-radio-group {
  width: 200px;
  flex-direction: column;
  align-items: flex-start;
}
.el-radio-button {
  width: 100%;
  margin-bottom: 5px;
  :deep(span) {
    width: 100% !important;
    border: 0;
    border-radius: 0 !important;
    text-align: start;
    border: var(--el-border);
  }
}
</style>