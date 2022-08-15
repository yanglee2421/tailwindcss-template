<template>
  <div>
    <p ref="ppp">字符串形的ref</p>
    <hello-world ref="hhh"></hello-world>
    <div
      :ref="pushRef"
      v-show="state.visible"
    >测试ref用的</div>
    <el-button @click="state.visible=!state.visible">change</el-button>
  </div>
</template>
<script lang='ts' setup>
import {
  ref,
  onBeforeUpdate,
  onUpdated,
  reactive,
  watchEffect,
  onMounted,
} from "vue";
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
// ref获取dom和组件实例
const ppp = ref<HTMLElement>();
const hhh = ref<typeof HelloWorld>();
onMounted(() => {
  ppp.value && (ppp.value.innerHTML = "");
  hhh.value && hhh.value.fun();
});
onBeforeRouteUpdate((to, from) => {});
onBeforeRouteLeave((to, from) => {});
</script>
<style lang='scss' scoped>
</style>