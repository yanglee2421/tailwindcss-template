<template>
  <div class="flex-column h-100">
    <el-menu mode="horizontal" router :default-active="state.name">
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
import { onBeforeMount, onBeforeUpdate, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
const state = reactive({});
const init = () => {
  state.name = localStorage.getItem("router");
  if (!state.name) {
    localStorage.setItem("router", "F-S");
    state.name = localStorage.getItem("router");
  }
};
onBeforeMount(init);
const router = useRouter();
onMounted(() => {
  router.push({ name: "F-S" });
});
onBeforeUpdate(init);
</script>
<style lang='scss' scoped>
</style>