<template>
  <div
    ref="root"
    class="h-100"
  >
    <swz-table
      :data="[{}, {}, {}, {}]"
      @fw-initTable="log($event)"
      :model="{}"
      border
      stripe
      v-model:PageIndex="pagi.aaa"
      v-model:PageSize="pagi.bbb"
    >
      <template #form>
        <el-form-item
          label="输入框"
          v-for="item in 4"
          :key="item"
        >
          <el-input></el-input>
        </el-form-item>
      </template>
      <template #btn-bar>
        <el-button>新增</el-button>
      </template>
      <el-table-column
        v-for="item in 7"
        :key="item"
        :label="'' + 1"
        align="center"
      ></el-table-column>
    </swz-table>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive } from "vue";

const log = (i: unknown) => {
  console.log(i);
};
const pagi = reactive({
  aaa: 1,
  bbb: 20,
});
</script>
<style lang="scss" scoped></style>
