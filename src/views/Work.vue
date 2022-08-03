<template>
  <div>
    <el-input v-model="state.text" />
    <el-table
      :data="state.table"
      row-key="label"
      default-expand-all
    >
      <el-table-column type="selection" />
      <el-table-column
        label="标志"
        prop="label"
      />
    </el-table>
  </div>
</template>
<script setup>
import { computed, reactive } from 'vue';
import response from "@/hook/mod.js"
import fun from "@/hook/test.js"
const state = reactive({
  text: "",
  response,
})
state.table = computed(() => {
  const target = JSON.parse(JSON.stringify(state.response))
  fun(target, state.text)
  return target.filter(item => item.label.includes(state.text) || item.children.length)
})
</script>
<style lang='scss' scoped>
</style>