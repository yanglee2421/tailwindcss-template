<template>
  <div
    :ref="(e) => (resizeRef = e)"
    class="box"
  >
    <canvas
      :ref="(e) => (cvsRef = e)"
      class="cvs"
    ></canvas>
    <router-link to="/">
      <el-link type="danger">首页</el-link>
    </router-link>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { useResize } from "@/hook";
import { Snow } from "@/util";
import { ref, unref } from "vue";
const cvsRef = ref();
const resizeRef = useResize((box) => {
  const cvs = unref(cvsRef);
  if (!cvs) return;
  Object.assign(cvs, box);
  const snow = new Snow(cvs, (box.width / 1920) * 200);
  snow.animation();
  return () => {
    snow.abortAnimation();
  };
});
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  height: 100%;
  padding: 0;
  border: 0;
  margin: 0;
  background-image: url("@/assets/image/snow-bg.jpg");
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
}
.cvs {
  position: absolute;
  @include position(0);
}
</style>
