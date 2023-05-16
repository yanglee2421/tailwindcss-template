<script lang="ts" setup>
import { useResize } from "@/hooks";
import { Snow } from "@/utils";
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

<template>
  <div
    :ref="(e) => (resizeRef = e)"
    class="box"
  >
    <canvas
      :ref="(e) => (cvsRef = e)"
      class="cvs"
    ></canvas>
  </div>
</template>

<style lang="scss" scoped>
.box {
  position: relative;
  height: 100%;
  padding: 0;
  border: 0;
  margin: 0;
  background-image: url("@/assets/image/bg/snow.jpg");
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
}
.cvs {
  position: absolute;
  inset: 0;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
