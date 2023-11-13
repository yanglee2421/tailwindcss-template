<script lang="ts" setup>
import { Particles } from "@/utils";
import { useObserverResize } from "@/hooks";

// Vue Imports
import * as Vue from "vue";

const canRef = Vue.ref();
const boxRef = Vue.ref<HTMLDivElement>();
const sizeRef = useObserverResize(boxRef);

Vue.watchPostEffect((onCleanup) => {
  const size = Vue.unref(sizeRef);
  if (!size) return;

  const [box] = size.contentBoxSize;
  const canvas = Vue.unref(canRef);
  if (!canvas) return;

  Object.assign(canvas, {
    width: box.inlineSize,
    height: box.blockSize,
  });

  const p = new Particles(canvas, (box.inlineSize / 1920) * 120, 110);
  p.animate();

  onCleanup(() => {
    p.abortAnimate();
  });
});
</script>

<template>
  <div
    ref="boxRef"
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
