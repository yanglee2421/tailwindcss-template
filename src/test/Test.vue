<template>
  <div class="flex-column">
    <el-collapse>
      <el-collapse-item
        name="1"
        label="表单"
      >
        <el-form>
          <el-form-item
            v-for="(item, index) in 6"
            :key="index"
          >
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
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
      v-model:currentPage="state.PageIndex"
      v-model:pageSize="state.PageSize"
      :pageSizes="[10, 20, 30]"
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

const state = reactive({
  PageIndex: 1,
  PageSize: 10,
});
</script>
<style lang="scss" scoped></style>
