<template>
  <div class="h-100">
    <fw-table
      :model="formData"
      :data="[{title:'123'},{}]"
      @submit="initTable"
      v-model:PageIndex="pagination.PageIndex"
      v-model:PageSize="pagination.PageSize"
      :total="100"
      Index
      Selection
      border
    >
      <!-- 表单 -->
      <template #form-item>
        <el-form-item
          label="通常五个字："
          v-for="item in 1"
          :key="item"
        >
          <el-input />
        </el-form-item>
      </template>
      <!-- 工具栏 -->
      <template #tool-bar>
        <el-button>新增</el-button>
      </template>
      <!-- 表格 -->
      <el-table-column
        label="标题"
        prop="title"
      />
    </fw-table>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang='ts' setup>
import { reactive } from "vue";
const formData = reactive({
  input: "",
});
const pagination = reactive({
  PageIndex: 1,
  PageSize: 10,
});
const initTable = (boolean: boolean) => {
  boolean && Object.assign(pagination, formData);
  console.log("发个请求", boolean, pagination);
};
</script>
<style lang='scss' scoped>
</style>