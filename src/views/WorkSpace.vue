<template>
  <div
    v-track:root
    class="h-100"
  >
    <fw-table
      :model="formData"
      :data="table.data"
      border
      v-model:PageIndex="formData.PageIndex"
      v-model:PageSize="formData.PageSize"
      :total="table.total"
    >
      <template #form>
        <el-form-item label="姓名：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="年龄：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="姓名：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="姓名：">
          <el-input></el-input>
        </el-form-item>
      </template>
      <template #tool-bar>
        <el-button
          type="success"
          data-value="新增按钮"
        >新增</el-button>
      </template>
      <el-table-column
        label="姓名"
        prop="name"
        align="center"
      />
      <el-table-column
        label="年龄"
        prop="age"
        align="center"
      />
      <el-table-column
        label="年龄"
        prop="age"
        align="center"
      />
      <el-table-column
        label="年龄"
        prop="age"
        align="center"
      />
      <el-table-column
        label="年龄"
        prop="age"
        align="center"
      />
      <el-table-column
        label="年龄"
        prop="age"
        align="center"
      />
      <el-table-column
        label="操作"
        align="center"
        width="100"
        fixed="right"
      >
        <template #default="{row}">
          <el-link
            v-track:btn
            data-btn="编辑"
            type="primary"
          >编辑</el-link>
          <el-link
            type="danger"
            class="ml-1"
          >删除</el-link>
        </template>
      </el-table-column>
    </fw-table>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { reactive, watchEffect } from "vue";
import request from "@/api/request";
const formData = reactive({
  PageIndex: 1,
  PageSize: 10,
});
interface _table {
  data: unknown[];
  total: number;
}
const table = reactive<_table>({
  data: [],
  total: 0,
});
const response = reactive({
  tableData: [],
});
request<unknown[]>({
  method: "get",
  url: "/table",
}).then((res) => {
  response.tableData = res as any;
  table.total = res.length;
});
watchEffect(() => {
  const target = response.tableData;
  const { PageIndex, PageSize } = formData;
  table.data = target.slice((PageIndex - 1) * PageSize, PageIndex * PageSize);
});
</script>
<style lang='scss' scoped>
</style>