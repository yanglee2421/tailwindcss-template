<template>
  <div>
    <keep-alive>
      <template v-if="state.visible">
        <hello-world></hello-world>
      </template>
    </keep-alive>
    <el-button @click="state.visible=!state.visible">change</el-button>
  </div>
</template>
<script lang='ts' setup>
import { reactive } from "vue";
import { useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
const route = useRoute();
const state = reactive({
  visible: true,
});
onBeforeRouteUpdate((to, from) => {});
onBeforeRouteLeave((to, from) => {});
</script>
<style lang='scss' scoped>
</style>