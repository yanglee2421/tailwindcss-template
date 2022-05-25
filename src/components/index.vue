<template>
  <div class="h-100 flex-column">
    <header class="flex-row pr-1">
      <el-menu
        mode="horizontal"
        :default-active="state.index"
        class="flex-1-hidden bb-0"
        router
      >
        <el-menu-item :route="{ name: 'drag' }" index="drag">拖拽</el-menu-item>
        <el-menu-item :route="{ name: 'lunbo' }" index="lunbo"
          >轮播</el-menu-item
        >
        <el-menu-item :route="{ name: 'table' }" index="table"
          >表格</el-menu-item
        >
        <el-menu-item :route="{ name: 'scroll' }" index="scroll"
          >滚动条</el-menu-item
        >
        <div></div>
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
  index: "drag",
});
const router = useRouter();
onMounted(() => {
  let name = localStorage.getItem("router");
  if (!name) {
    localStorage.setItem("router", "drag");
    name = localStorage.getItem("router");
  }
  state.index = name;
  router.push({ name });
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