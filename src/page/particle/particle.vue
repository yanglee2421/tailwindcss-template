<script lang="ts" setup>
import { Particles } from "@/util";
import { useResize } from "@/hook";
import { ref, unref } from "vue";
import { DarkSwitch } from "@/component";

const canRef = ref();
const boxRef = useResize((box) => {
  const canvas = unref(canRef);
  if (!canvas) return;
  Object.assign(canvas, box);
  const p = new Particles(canvas, (box.width / 1920) * 120, 110);
  p.animate();
  return () => p.abortAnimate();
});
</script>

<template>
  <div
    :ref="(div) => (boxRef = div)"
    class="particle-box"
  >
    <canvas
      :ref="(dom) => (canRef = dom)"
      class="particle-canvas"
    ></canvas>
  </div>
</template>

<style lang="scss" scoped>
.particle-box {
  position: relative;
  height: 100%;
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
<script lang="ts">
export default { inheritAttrs: true };
</script>
