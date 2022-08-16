<template>
  <div>
    <p ref="ppp">字符串形的ref</p>
    <hello-world ref="hhh"></hello-world>
    <div
      v-show="state.visible"
      :ref="pushRef"
    >测试ref用的</div>
    <el-button @click="state.visible=!state.visible">change</el-button>
  </div>
</template>
<script lang='ts' setup>
import { ref, onBeforeUpdate, reactive, onMounted } from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
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
// ref获取dom和组件实例
const ppp = ref<HTMLElement>();
const hhh = ref();
onMounted(() => {
  ppp.value && (ppp.value.innerHTML = "");
  hhh.value && hhh.value.fun();
});
onBeforeRouteUpdate((to, from) => {});
onBeforeRouteLeave((to, from) => {});
</script>
<style lang='scss' scoped>
</style>