<template>
  <div class="box p-1">
    <div class="btn-bar">
      <el-button
        @click="state.galleryModel = state.imgArr"
        type="primary"
        >必应壁纸</el-button
      >
      <el-button
        @click="state.galleryModel = false"
        type="danger"
        >画廊报错</el-button
      >
      <el-switch v-model="pinia.state.isDark"></el-switch>
    </div>
    <swz-count></swz-count>
    <test-02-vue></test-02-vue>
    <swz-gallery v-model="state.galleryModel"></swz-gallery>
  </div>
  <el-table></el-table>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import request from "@/api/request";
import { reactive } from "vue";
import Test02Vue from "./Test02.vue";
import { usePinia } from "@/hook";
const pinia = usePinia();
const state = reactive<{ galleryModel: boolean | string[]; imgArr: string[] }>({
  galleryModel: false,
  imgArr: [],
});
request<string[]>({
  url: "/bing",
  params: { n: 8 },
}).then((res) => {
  state.imgArr = res;
});
</script>
<style lang="scss" scoped>
.box {
  display: grid;
  grid-template: auto / repeat(2, 1fr);
  gap: 10px;
}
.btn-bar {
  grid-column: 1/-1;
}
</style>
