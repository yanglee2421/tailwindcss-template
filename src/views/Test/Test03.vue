<template>
  <div>
    <div id="test-event"></div>
    <el-button @click="fun">触发xxx</el-button>
    <div
      v-if="state.isShow"
      class="winner b"
    >
      <iframe
        src="http://127.0.0.1:5174/#/test"
        class="w-100 h-100"
        frameborder="0"
      ></iframe>
      <!--   <test-vue
        v-if="state.isShow"
        v-track="'test-vue'"
      ></test-vue> -->
    </div>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import TestVue from "./Test.vue";
import { reactive } from "vue";
const state = reactive({
  isShow: true,
});
const fun = () => {
  const dom = document.querySelector("iframe")!;
  const win = dom?.contentWindow;
  // state.isShow && win?.dispatchEvent(new Event("beforeunload"));
  state.isShow = !state.isShow;
};
</script>
<style lang='scss' scoped>
.winner {
  width: 800px;
  height: 600px;
  margin: 0 auto;
}
</style>