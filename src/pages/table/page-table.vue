<script lang="ts" setup>
// Vue Imports
import * as Vue from "vue";

const pagiStat = Vue.reactive({
  page: 1,
  pageSize: 20,
});

Vue.defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="h-full p-2 flex flex-col">
    <el-form inline>
      <el-form-item label="name">
        <el-input></el-input>
      </el-form-item>
    </el-form>
    <div class="border flex-1 overflow-hidden">
      <el-table
        :data="[]"
        height="100%"
      >
        <el-table-column
          label="col 1"
          width="150"
        ></el-table-column>
        <el-table-column label="col 2"></el-table-column>
        <el-table-column
          label="col 3"
          width="150"
        ></el-table-column>
        <el-table-column label="col 4"></el-table-column>
      </el-table>
    </div>
    <el-pagination
      v-model:current-page="pagiStat.page"
      v-model:page-size="pagiStat.pageSize"
      :total="100"
      :page-sizes="[20, 50, 100]"
      layout="total,prev,pager,next,jumper"
    ></el-pagination>
  </div>
</template>

<style lang="scss" scoped></style>
