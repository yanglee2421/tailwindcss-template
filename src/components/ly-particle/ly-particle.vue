<template>
  <div
    :ref="(div) => (boxRef = div)"
    class="particle-box"
  >
    <canvas
      :ref="(canvas) => (canRef = canvas)"
      class="particle-canvas"
    ></canvas>
    <div class="particle-content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { useResize } from "@/hook";
import { reactive, ref, watchPostEffect } from "vue";
import { Particles } from "@/util";
const state = reactive({
  width: 0,
  height: 0,
});
const boxRef = useResize(({ width, height }) => {
  state.width = width;
  state.height = height;
});
const canRef = ref();
let p: null | Particles = null;
watchPostEffect(() => {
  if (p) {
    p.abortAnimate();
    p = null;
  }
  canRef.value.width = state.width;
  canRef.value.height = state.height;
  p = new Particles(canRef.value);
  p.animate();
});
</script>
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
