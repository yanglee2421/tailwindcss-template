<template>
  <div class="h-100 flex-column">
    <el-menu
      mode="horizontal"
      :default-active="state.currentActive"
      router
    >
      <el-menu-item
        index="param"
        :route="{name:'param'}"
      >传参</el-menu-item>
      <el-menu-item
        index="table"
        :route="{name:'table'}"
      >表格</el-menu-item>
      <el-menu-item
        index="swiper"
        :route="{name:'swiper'}"
      >轮播图</el-menu-item>
      <el-menu-item index="4">123</el-menu-item>
    </el-menu>
    <main
      class="flex-1-auto p-1"
      style="overflow:overlay"
    >
      <router-view />
    </main>
  </div>
</template>
<script lang='ts' setup>
import { nextTick, onBeforeMount, onMounted, reactive } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
const route = useRoute();
const state = reactive({
  currentActive: "",
});
onBeforeMount(() => {
  state.currentActive = route.name as string;
});
onBeforeRouteUpdate((to, from) => {
  state.currentActive = to.name as string;
  nextTick(() => {
    const doms = document.querySelectorAll<HTMLElement>(".el-menu-item");
    doms.forEach((item) => {
      item.blur();
    });
  });
});
</script>
<style lang='scss' scoped>
</style>