<template>
  <el-card header="计数器">
    <h2>count：{{ count }}</h2>
    <el-button
      @click="count++"
      type="success"
      plain
      class="mt-1"
      >+1</el-button
    >
    <el-button
      @click="count = 1"
      type="danger"
      plain
      class="mt-1"
      >=1</el-button
    >
    <div></div>
  </el-card>
  <slot> </slot>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import {
  onBeforeMount,
  onMounted,
  onActivated,
  onDeactivated,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from "vue";
const count = ref(0);
onBeforeMount(() => {});
onMounted(() => {});
onActivated(() => {});
onDeactivated(() => {});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
});
onUpdated(() => {});
onBeforeUnmount(() => {});
onUnmounted(() => {});
</script>
<style lang="scss" scoped></style>
