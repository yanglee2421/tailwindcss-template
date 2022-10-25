<template>
  <div class="flex-column">
    <fw-switch v-model="state.isShow"></fw-switch>
    <div v-height="state.isShow">
      <div class="box"></div>
    </div>
    <div class="flex-1-hidden">
      <el-table
        :data="[]"
        height="100%"
        border
        stripe
      >
        <template #empty>
          <el-empty></el-empty>
        </template>
        <el-table-column
          label="序号"
          type="index"
          align="center"
          width="55px"
        ></el-table-column>
        <el-table-column
          type="selection"
          align="center"
        ></el-table-column>
        <el-table-column label="标题"></el-table-column>
        <el-table-column label="标题"></el-table-column>
        <el-table-column label="标题"></el-table-column>
        <el-table-column label="标题"></el-table-column>
        <el-table-column label="标题"></el-table-column>
        <el-table-column label="标题"></el-table-column>
        <el-table-column label="标题"></el-table-column>
      </el-table>
    </div>
    <el-pagination
      layout="total,prev,pager,next,jumper"
      :total="100"
      v-model:currentPage="state.currentPage"
      v-model:pageSize="state.pageSize"
      :page-sizes="[10, 20, 30]"
    ></el-pagination>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive } from "vue";
import vHeight from "@/tool/v-height";
const state = reactive({
  isShow: true,
  currentPage: 1,
  pageSize: 10,
});
</script>
<style lang="scss" scoped>
.box {
  height: 200px;
  border: 1px red solid;
  overflow: hidden;
}
</style>
