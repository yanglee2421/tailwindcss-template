<template>
  <div class="h-100 flex-column">
    <header class="flex-row pr-1">
      <el-menu
        mode="horizontal"
        default-active="1"
        class="flex-1-hidden bb-0"
        router
      >
        <el-menu-item :route="{ name: 'drag' }" index="1">拖拽</el-menu-item>
        <el-menu-item :route="{ name: 'lunbo' }" index="2">轮播</el-menu-item>
        <el-menu-item :route="{ name: 'table' }" index="3">表格</el-menu-item>
      </el-menu>
      <el-select filterable></el-select>
    </header>
    <main class="flex-1-hidden mt-1 p-1">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>
<script setup>
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
const state = reactive({
  comName: "drag",
});
const router = useRouter();
onMounted(() => {
  router.push({ name: state.comName });
});
</script>
<style lang='scss' scoped>
header {
  background-color: #fff;
  border-radius: 8px;
}
.el-menu,
main {
  @extend header;
}
</style>