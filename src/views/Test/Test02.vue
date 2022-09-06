<template>
  <div>
    <el-button @click="state.isShow=true">打开</el-button>
    <proto-options-vue v-model="state.isShow"></proto-options-vue>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { reactive } from "vue";
import ProtoOptionsVue from "./component/ProtoOptions.vue";
const state = reactive({
  isShow: true,
});
</script>
<style lang='scss' scoped>
</style>