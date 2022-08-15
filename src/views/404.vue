<template>
  <div>
    <div
      :ref="pushRef"
      v-show="state.visible"
    >测试ref用的</div>
    <el-button @click="state.visible=!state.visible">change</el-button>
  </div>
</template>
<script lang='ts' setup>
import { onBeforeUpdate, onUpdated, reactive, watchEffect } from "vue";
import { useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import SlotDemo from "@/components/SlotDemo.vue";
import HelloWorld from "@/components/HelloWorld.vue";
const route = useRoute();
interface _state {
  visible: boolean;
  arr: unknown[];
}
const state = reactive<_state>({
  visible: true,
  arr: [],
});
const pushRef = (el: unknown) => {
  state.arr.push(el);
};
onBeforeUpdate(() => {
  state.arr = [];
});
watchEffect(() => {
  const visible = state.visible;
  console.log(state.arr);
});
onBeforeRouteUpdate((to, from) => {});
onBeforeRouteLeave((to, from) => {});
</script>
<style lang='scss' scoped>
</style>