<template>
  <input type="checkbox" v-model="arr" value="1">
  <input type="checkbox" v-model="arr" value="2">
  <input type="checkbox" v-model="arr" value="3">
  <input type="checkbox" v-model="arr" value="4">
  <el-button @click="arr.push('3')">加</el-button>
  <el-button @click="arr.pop('3')">减</el-button>
</template>
<script setup>
import { reactive } from 'vue';

const arr = reactive(['1', '2'])
</script>
<style lang='scss' scoped>
//
</style>