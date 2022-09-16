<template>
  <div class="h-100 b flex center-start">
    <el-select
      v-model="state.model"
      placeholder="输入以搜索"
      :remote-method="remoteFn"
      :loading="selectSta.loading"
      @visible-change="visChgFn"
      clearable
      filterable
      remote
    >
      <div class="opt-list">
        <el-option
          v-for="(item, index) in selectSta.opt"
          :key="index"
          :label="`选项${index}`"
          :value="item"
        />
      </div>
      <el-pagination
        v-if="selectSta.opt.length > 10"
        layout="total,prev,pager,next"
        v-model:currentPage="pagiSta.currentPage"
        v-model:pageSize="pagiSta.pageSize"
        :pageSizes="[10]"
        :total="pagiSta.total"
        small
      ></el-pagination>
    </el-select>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive, watch } from "vue";
const state = reactive({
  model: "",
});
const selectSta = reactive({
  opt: [],
  loading: false,
  filterText: "",
});
const remoteFn = (str: string) => {
  selectSta.filterText = str;
};
watch(
  () => selectSta.filterText,
  () => {
    initOpt();
  }
);
const initOpt = () => {
  selectSta.loading = true;
  setTimeout(() => {
    selectSta.opt = [];
    pagiSta.total = selectSta.opt.length;
    selectSta.loading = false;
  }, 1000);
};
const visChgFn = (isShow: boolean) => {
  isShow || (selectSta.opt = []);
};
const pagiSta = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 0,
});
watch(
  () => pagiSta.currentPage,
  (currentPage) => {
    initOpt();
  }
);
</script>
<style lang="scss" scoped>
.el-select {
  @include m-center;
}
.opt-list {
  max-height: 200px;
  overflow: overlay;
}
</style>
