<template>
  <div
    :ref="(div) => (boxRef = div)"
    class="particle-box"
  >
    <canvas
      :ref="(dom) => (canRef = dom)"
      class="particle-canvas"
    ></canvas>
    <div class="particle-content">
      <dark-switch />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { Particles } from "@/util";
import { useResize } from "@/hook";
import { onBeforeUpdate, reactive, ref, watchPostEffect } from "vue";
import { DarkSwitch } from "@/components";
onBeforeUpdate(() => {
  console.log("before");
});
const box = reactive({
  width: 0,
  height: 0,
});
const boxRef = useResize(({ width, height }) => {
  box.width = width;
  box.height = height;
});
const canRef = ref();
let p: Particles | null = null;
watchPostEffect(() => {
  if (!canRef.value) return;
  if (p) {
    p.abortAnimate();
    p = null;
  }
  canRef.value.width = box.width;
  canRef.value.height = box.height;
  p = new Particles(canRef.value);
  p.animate();
});
</script>
<style lang="scss" scoped>
.particle-box {
  position: relative;
  height: 100vh;
  background-image: linear-gradient(
    rgba(193, 35, 35, 0.71),
    rgba(32, 39, 216, 0.71)
  );
}
.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
}
.particle-content {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow: overlay;
}
</style>
