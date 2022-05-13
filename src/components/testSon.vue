<template>
  <div class="b m-1">
    <p>孙子</p>
    <p class="m-1">{{ mes }}</p>
    <p class="m-1">{{ ff.name }}</p>
    <el-button @click="fun">孙子改爷爷（脚本）</el-button>
    <el-button @click="mes = '孙子改了'">孙子改爷爷（模板）</el-button>
    <!--   <el-button @click="fun2">儿子改爸爸（脚本）</el-button>
    <el-button @click="ff.name = '儿子改了'">儿子改爸爸（模板）</el-button> -->
  </div>
</template>
<script setup>
import { inject } from 'vue';
let mes = inject('mes')
const fun = () => {
  mes = '孙子改了'
  console.log(mes);
}
const fun2 = () => {
  props.ff.name = '孙子改了'
}
const props = defineProps(['ff'])
</script>
<style lang='scss' scoped>
//
</style>