<template>
  <div class="h-100 flex-column">
    <h1>{{ title }}</h1>
    <main
      class="flex-1-auto px-1"
      style="overflow: overlay"
    >
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
p {
  padding: 15px;
  color: $info;
  text-align: center;
}
</style>
