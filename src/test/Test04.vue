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
      <el-scrollbar max-height="200px">
        <el-option
          v-for="(item, index) in selectSta.opt"
          :key="index"
          :label="`选项${index}`"
          :value="item"
        />
      </el-scrollbar>
      <el-pagination
        v-if="selectSta.opt.length > pagiSta.pageSize"
        layout="total,prev,pager,next"
        v-model:currentPage="pagiSta.currentPage"
        v-model:pageSize="pagiSta.pageSize"
        :total="pagiSta.total"
        small
      ></el-pagination>
    </el-select>
  </div>
</template>
<script lang="ts">
import trackMixins from "@/hooks/track-mixins";
export default {
  inheritAttrs: true,
  /*  extends: trackMixins,
  mounted() {
    this.$track__setMeta("test04");
  }, */
};
</script>
<script lang="ts" setup>
import request from "@/api/request";
import { reactive, watch } from "vue";
import trackHook from "@/hooks/track-hook";
window.setMeta = trackHook("test04--hook");
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
  request<unknown[]>({
    url: "/opt",
    data: {
      text: selectSta.filterText,
      PageIndex: pagiSta.currentPage,
      PageSize: pagiSta.pageSize,
    },
  }).then((res) => {
    pagiSta.total = res.Data.length;
    selectSta.opt = res.Data;
    selectSta.loading = false;
  });
};
const visChgFn = (isShow: boolean) => {
  isShow || (selectSta.opt = []);
};
const pagiSta = reactive({
  currentPage: 1,
  pageSize: 30,
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
</style>
