<script lang="ts" setup>
// Hooks Imports
import { useResize } from "@/hooks";

// Utils Imports
import { Snow } from "@/utils";

// Vue Imports
import { ref, unref, watch } from "vue";

// DOM Ref
const boxRef = ref<HTMLDivElement>();
const cvsRef = ref<HTMLCanvasElement>();
const sizeRef = useResize(boxRef);

watch(
  sizeRef,
  (size) => {
    if (!size) return;
    const [box] = size.contentBoxSize;

    const cvs = unref(cvsRef);
    if (!cvs) return;

    Object.assign(cvs, {
      width: box.inlineSize,
      height: box.blockSize,
    });
    const snow = new Snow(cvs, (box.inlineSize / 1920) * 200);
    snow.animation();

    // Clear Effect
    return () => {
      snow.abortAnimation();
    };
  },
  { flush: "post", immediate: true }
);

defineOptions({ inheritAttrs: true });
</script>

<template>
  <div
    ref="boxRef"
    class="box"
  >
    <canvas
      ref="cvsRef"
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
