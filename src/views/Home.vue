<template>
  <div class="h-100 flex-column">
    <h1>{{ title }}</h1>
    <main>
      <router-view #default="{ Component }">
        <component :is="Component" />
      </router-view>
      <p>滇ICP备2022005213号-1</p>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const title = computed(() => store.state.mod1.currentPage);
console.log(store);
</script>
<style lang="scss" scoped>
:deep(h1) {
  padding: 15px;
  text-align: center;
}
main {
  flex: 1;
  overflow: auto;
  overflow: overlay;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}
p {
  padding: 15px;
  color: $info;
  text-align: center;
}
</style>
