<template>
  <div>
    <el-button @click="state.isShow=true">打开</el-button>
    <el-button @click="state.isShow02=true">打开mixins</el-button>
    <el-button @click="state.isShow03=true">打开extends</el-button>
    <el-button @click="state.isShow04=true">打开hook</el-button>
    <proto-options-vue v-model="state.isShow"></proto-options-vue>
    <mixins-vue v-model="state.isShow02"></mixins-vue>
    <extends-vue v-model="state.isShow03"></extends-vue>
    <hook-vue v-model="state.isShow04"></hook-vue>
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
import MixinsVue from "./component/Mixins.vue";
import ExtendsVue from "./component/Extends.vue";
import HookVue from "./component/Hook/index.vue";
const state = reactive({
  isShow: false,
  isShow02: false,
  isShow03: false,
  isShow04: false,
});
</script>
<style lang='scss' scoped>
</style>