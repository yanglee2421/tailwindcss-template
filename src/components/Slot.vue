<template>
  <div>
    <el-button @click="value.name = '深克隆变了'">改深克隆的</el-button>
    <el-button @click="value2.name = '浅克隆变了'">改浅克隆的</el-button>
    <slot name="slot01"></slot>
    <h1>外部传进来的：{{data.name}}</h1>
    <h1>深克隆：{{value.name}}</h1>
    <h1>浅克隆：{{value2.name}}</h1>
    <h2></h2>
  </div>
</template>
<script setup>
import { reactive } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
const value = reactive(Object.assign({}, props.data))
const value2 = props.data
</script>
<style lang='scss' scoped>
</style>