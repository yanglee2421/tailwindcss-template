<template>
  <div class="h-100">
    <fw-table
      :model="formData"
      :data="[{title:'123'},{}]"
      @fw-query="initTable"
      v-model:PageIndex="pagination.PageIndex"
      v-model:PageSize="pagination.PageSize"
      :total="100"
      border
      index
    >
      <template #form>
        <template></template>
        <el-form-item label="跟进日期：">
          <el-date-picker
            v-model="formData.data"
            type="daterange"
          />
        </el-form-item>
        <el-form-item
          label="通常五个字："
          v-for="item in 4"
          :key="item"
        >
          <el-input />
        </el-form-item>
      </template>
      <template #tool-bar>
        <el-button>新增</el-button>
      </template>
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
  data: [],
});
const pagination = reactive({
  PageIndex: 1,
  PageSize: 10,
});
const initTable = (boolean: boolean) => {
  boolean && Object.assign(pagination, formData);
  console.log("发个请求", boolean, pagination);
};
const log = (i: unknown) => {
  console.log(i);
};
</script>
<style lang='scss' scoped>
</style>