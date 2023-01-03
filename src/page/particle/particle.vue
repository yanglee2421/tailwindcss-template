<template>
  <div
    :ref="(div:any) => (boxRef = div)"
    class="particle-box"
  >
    <canvas
      :ref="(dom:any) => (canRef = dom)"
      class="particle-canvas"
    ></canvas>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import Particles from "@/util/class-particle";
import { useResize } from "@/hook";
import { onMounted, reactive, ref } from "vue";
const a = ref;
const box = reactive({
  width: 0,
  height: 0,
});
const boxRef = useResize<HTMLDivElement>(({ width, height }) => {
  if (!canRef.value) return;
  canRef.value.width &&= width;
  canRef.value.height &&= height;
});
const canRef = ref<HTMLCanvasElement>();
onMounted(() => {
  if (!canRef.value) return;
  const particles = new Particles(canRef.value, { number: 150 });
  particles.animate();
  particles.bindEvent();
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
</style>
