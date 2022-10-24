<template>
  <div class="flex-column">
    <fw-switch v-model="isShow"></fw-switch>
    <div v-vis="isShow">
      <el-form>
        <el-form-item
          v-for="(item, index) in 6"
          :key="index"
        >
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="flex-1-hidden">
      <el-table
        :data="[{}, {}, {}, {}, {}, {}, {}]"
        height="100%"
        border
        stripe
      >
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
import { ref, reactive } from "vue";

const isShow = ref(true);
const state = reactive({
  currentPage: 1,
  pageSize: 10,
});
</script>
<style lang="scss" scoped>
.box {
  width: 300px;
  height: 400px;
}
.h {
  width: 1000px;
  height: 1000px;
}
</style>
