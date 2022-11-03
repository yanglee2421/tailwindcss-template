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
      class="flex-1-auto"
      style="overflow: overlay"
    >
      <router-view #default="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { computed, onBeforeMount, reactive } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import routes from "@/router/routes";
import { useStore } from "vuex";
const store = useStore();
setTimeout(() => {
  store.dispatch("mod1/currentUser", "admin");
}, 0);
/**
 * 返回所有菜单项
 * 当前菜单项
 */
const menuItems = computed(() => {
  return routes[0].children;
});
const state = reactive({
  currentActive: "",
});
/**
 * 挂载前激活当前菜单
 * 路由更新前所有菜单项失活
 */
const route = useRoute();
onBeforeMount(() => {
  state.currentActive = route.name as string;
});
onBeforeRouteUpdate((to, from) => {
  state.currentActive = to.name as string;
  setTimeout(() => {
    const doms = document.querySelectorAll<HTMLElement>(".el-menu-item");
    doms.forEach((item) => {
      item.blur();
    });
  }, 0);
});
</script>
<style lang="scss" scoped></style>
