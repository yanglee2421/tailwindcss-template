<template>
  <div ref="root">
    <proto-options-vue
      v-model="state.isShow"
      @swz-switch="log('@事件')"
    ></proto-options-vue>
    <fw-switch v-model="state.isShow"></fw-switch>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import {
  ref,
  reactive,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  nextTick,
} from "vue";
import ProtoOptionsVue from "./component/ProtoOptions.vue";
const state = reactive<any>({
  ref: null,
  isShow: false,
});
const root = ref();
const log = (i: unknown) => {
  console.log("父", i);
};
watch(
  () => state.isShow,
  (newVal) => {
    console.log("父", "watch");
  },
  {
    immediate: true,
  }
);
watchSyncEffect(() => {
  const a = state.isShow;
  console.log("父", "watchSyncEffect");
});
watchEffect(() => {
  const a = state.isShow;
  console.log("父", "watchEffect");
});
watchPostEffect(() => {
  const a = state.isShow;
  console.log("父", "watchPostEffect");
});
nextTick(() => {
  console.log("父", "nextTick");
});
onBeforeMount(() => {
  console.log("父", "onBeforeMount");
});
onMounted(() => {
  console.log("父", "onMounted");
});
onBeforeUpdate(() => {
  console.log("父", "onBeforeUpdate");
});
onUpdated(() => {
  console.log("父", "onUpdated");
});
</script>
<style lang="scss" scoped></style>
