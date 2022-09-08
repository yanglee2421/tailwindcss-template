<template>
  <div
    v-if="state.isShow"
    v-directive
  >
    {{state.isUpdate?5566:4399}}
  </div>
  <el-button @click="state.isShow=!state.isShow">卸载</el-button>
  <el-button @click="state.isUpdate=!state.isUpdate">更新</el-button>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { reactive } from "vue";
const state = reactive({
  isUpdate: true,
  isShow: true,
  obj: {
    show: 123,
  },
});
console.log(state);
const window = {
  el: null,
  vnode: null,
};
const vDirective = {
  mounted(el: any, binding: any, vnode: any) {
    window.el = el;
    window.vnode = vnode;
  },
  updated(el: any, binding: any, vnode: any, prevnode: any) {
    console.log("update-el", el === window.el);
    console.log("update-vnode", vnode === window.vnode);
    console.log("update-prevnode", prevnode === window.vnode);
  },
  beforeUnmount(el: any, binding: any, vnode: any) {
    console.log("beforeUnmount-el", el === window.el);
    console.log("beforeUnmount-vnode", vnode === window.vnode);
  },
};
</script>
<style lang='scss' scoped>
.winner {
  width: 800px;
  height: 600px;
  margin: 0 auto;
}
</style>