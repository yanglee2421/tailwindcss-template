<template>
  <div class="b m-1">
    <p>爷爷</p>
    <h1 class="m-1">{{ mes }}</h1>
    <el-button @click="fun">爷爷改信息（脚本）</el-button>
    <el-button @click="mes = '爷爷改了'">爷爷改信息（模板）</el-button>
  </div>
  <div>
    <Test></Test>
  </div>
</template>
<script setup>
import Test from "@/components/test.vue"
import { provide, reactive, ref, watch } from 'vue';

const mes = ref("爷爷给孙子的信息")
provide('mes', mes)
const fun = () => {
  mes.value = "爷爷改了"
}
watch(() => mes.name, (newVal, oldVal) => {
  console.log(newVal);
  // console.log(oldVal);
})
</script>
<style lang='scss' scoped>
//
</style>