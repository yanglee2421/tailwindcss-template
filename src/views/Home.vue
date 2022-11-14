<template>
  <div class="view">
    <h1>{{ title }}</h1>
    <main class="flex-1">
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
h1 {
  position: sticky;
  top: 0;
  z-index: 9;
  padding: 15px;
  margin: 0 -10px;
  box-shadow: $box-shadow-light;
  background-color: white;
  text-align: center;
}
.view {
  flex: 1;
  overflow: auto;
  overflow: overlay;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 10px;
}
main {
  position: relative;
  padding-bottom: 46px;
}
p {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  color: $info;
  text-align: center;
}
</style>
