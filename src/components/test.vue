<template>
  <div class="b m-1">
    <p>爸爸</p>
    <p class="m-1">{{ toSon.name }}</p>
    <el-button @click="fun">爸爸改儿子（脚本）</el-button>
    <el-button @click="toSon.name = '爸爸改了'">爸爸改儿子（模板）</el-button>
  </div>
  <TestSon :ff="toSon"></TestSon>
</template>
<script setup>
import TestSon from "@/components/testSon.vue"
import { reactive } from "vue";
const toSon = reactive({
  name: '爸爸给儿子的信息'
})
const fun = () => {
  toSon.name = "爸爸改了"
}
</script>
<style lang='scss' scoped>
//
</style>