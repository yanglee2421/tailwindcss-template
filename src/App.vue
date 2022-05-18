<template>
  <header class="">
    <el-form inline class="py-1 flex justify-between">
      <div>
        <el-form-item label="部门">
          <el-cascader />
        </el-form-item>
        <el-form-item label="标题">
          <el-select filterable clearable v-model="selec">
            <el-option v-for="item, index in 100" :key="index" :label="`选项${item}`" :value="item" />
          </el-select>
        </el-form-item>
      </div>
      <div>
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </div>
    </el-form>
  </header>
  <main class="flex-1-hidden">
    <el-table height="100%" :data="state.table" border>
      <el-table-column align='center' label="姓名" prop="label"></el-table-column>
      <el-table-column align='center' label="年龄" prop="age">
        <template #default="{ row }">
          <p @dblclick="row.edit = !row.edit" v-if="!row.edit">{{ row.age }}</p>
          <el-input @change="row.edit = false" @blur="row.edit = false" v-else v-model="row.age" v-focus />
        </template>
      </el-table-column>
      <el-table-column align='center' label="地址" prop="address"></el-table-column>
      <el-table-column align='center' label="联系方式" prop="tel"></el-table-column>
    </el-table>
  </main>
  <footer class="flex justify-end">
    <el-pagination layout="prev,pager,next,sizes,jumper,total" :total="state.total"
      v-model:currentPage="state.currentPage" v-model:pageSize="state.pageSize" :pageSizes="[5, 10, 20, 30]" />
  </footer>
</template>
<script setup>
import { computed, reactive, ref, watchEffect } from 'vue';
const selec = ref(0)
const res = ref([])
const state = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 0,
  table: [],
})
for (let i = 0; i < 100; i++) {
  res.value.push({
    index: i,
    label: '张三' + i,
    age: 18,
    address: "光谷",
    tel: 15171504348
  })
}
const initTable = () => {
  const arr = res.value.filter((item, index) => {
    return item.index + 1 > selec.value
  }).map(item => {
    item.edit = false
    return item
  })
  state.total = arr.length
  state.table = arr.splice((state.currentPage - 1) * state.pageSize, state.currentPage * state.pageSize)
}
watchEffect(() => {
  initTable()
})
const vFocus = (el) => {
  el.__vueParentComponent.exposed.focus()
}
</script>
<style lang='scss' scoped>
//
.el-form-item {
  @extend.m-0
}
</style>
