<template>
  <div v-if="modelValue">
    这是extends
    <el-button @click="$emit('update:modelValue',false)">关闭</el-button>
  </div>
</template>
  <script lang='ts'>
import mixin01 from "./ProtoOptions.vue";
export default {
  inheritAttrs: true,
  extends: mixin01,
};
</script>
  <script lang='ts' setup>
</script>
  <style lang='scss' scoped>
</style>