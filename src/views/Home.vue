<template>
  <div class="h-100 flex-column">
    <el-menu
      mode="horizontal"
      :default-active="state.currentActive"
      router
    >
      <el-menu-item
        v-for="(item, index) in menuItems"
        :key="index"
        :index="item.name"
        :route="item"
        >{{ item.meta?.title }}</el-menu-item
      >
    </el-menu>
    <main
      class="flex-1-auto p-1"
      style="overflow: overlay"
    >
      <router-view #default="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { computed, nextTick, onBeforeMount, reactive } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import routes from "@/router/routes";
const menuItems = computed(() => {
  return routes[0].children;
});
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
