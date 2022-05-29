<template>
  <div class="m-1 b">
    <h2>子</h2>
    <el-input v-model="modelValue" @input="emit('update:modelValue', modelValue)" />
  </div>
</template>
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>
<style lang='scss' scoped>
//
* {
  @extend.m-1
}
</style>