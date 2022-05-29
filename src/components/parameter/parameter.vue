<template>
  <div class="flex-column h-100">
    <el-menu
      mode="horizontal"
      router
      :default-active="state.name"
      :ellipsis="false"
    >
      <el-menu-item :route="{ name: 'F-S' }" index="F-S">父向子</el-menu-item>
      <el-menu-item :route="{ name: 'S-F' }" index="S-F">子向父</el-menu-item>
      <el-menu-item :route="{ name: 'F-S-F' }" index="F-S-F"
        >父子双向</el-menu-item
      >
      <el-menu-item :route="{ name: 'A-O' }" index="A-O"
        >祖先向后代</el-menu-item
      >
      <el-menu-item :route="{ name: 'B-B' }" index="B-B">兄弟传参</el-menu-item>
    </el-menu>
    <main class="flex-1-hidden">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>
<script setup>
import {
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  reactive,
} from "vue";
import { useRouter } from "vue-router";
const state = reactive({});
const init = () => {
  state.name = localStorage.getItem("p-router");
  if (!state.name) {
    localStorage.setItem("p-router", "F-S");
    state.name = localStorage.getItem("p-router");
  }
};
onBeforeMount(init);
const router = useRouter();
onActivated(() => {
  nextTick(() => {
    router.push({ name: state.name });
  });
});
onBeforeUpdate(init);
</script>
<style lang='scss' scoped>
</style>