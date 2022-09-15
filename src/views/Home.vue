<template>
  <div class="h-100 flex-column">
    <el-menu
      mode="horizontal"
      :default-active="state.currentActive"
      router
    >
      <el-menu-item
        index="work"
        :route="{ name: 'work' }"
        >工作区</el-menu-item
      >
      <el-menu-item
        index="test"
        :route="{ name: 'test' }"
        >测试</el-menu-item
      >
      <el-menu-item
        index="test02"
        :route="{ name: 'test02' }"
        >测试02</el-menu-item
      >
      <el-menu-item
        index="test03"
        :route="{ name: 'test03' }"
        >测试03</el-menu-item
      >
      <el-menu-item
        index="test04"
        :route="{ name: 'test04', state: { aaa: 111 } }"
        >测试04</el-menu-item
      >
      <el-menu-item
        index="param"
        :route="{ name: 'param' }"
        >传参</el-menu-item
      >
    </el-menu>
    <main
      class="flex-1-auto"
      style="overflow: overlay"
    >
      <router-view #default="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { nextTick, onBeforeMount, reactive } from "vue";
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
<style lang="scss" scoped></style>
