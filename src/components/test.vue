<template>
  <div>
    <input type="text" v-focus />
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

const radio1 = ref();
watchEffect(() => {
  console.log(radio1.value);
});
</script>
<style lang='scss' scoped>
</style>