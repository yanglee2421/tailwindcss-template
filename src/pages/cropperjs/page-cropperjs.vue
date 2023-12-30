<script lang="ts" setup>
// CropperJs Imports
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";

// Vue Imports
import * as Vue from "vue";

const imgRef = Vue.ref<HTMLImageElement>();
const cropperRef = Vue.shallowRef<Cropper | null>(null);

Vue.watch(
  imgRef,
  (img, prevImg, onCleanup) => {
    if (!img) return prevImg;

    cropperRef.value = new Cropper(img, {
      aspectRatio: 1,
    });

    // Clear Effect
    onCleanup(() => {
      Vue.unref(cropperRef)?.destroy();
    });
  },
  {
    immediate: true,
    flush: "post",
  }
);

const handleDownload = () => {
  const cropper = Vue.unref(cropperRef);
  if (!cropper) return;

  const cropedCvs = cropper.getCroppedCanvas();
  const href = cropedCvs.toDataURL();
  const a = document.createElement("a");
  a.download = `${Date.now()}.png`;
  a.href = href;
  a.click();
  a.remove();
  URL.revokeObjectURL(href);
};

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="max-w-full border">
    <img
      ref="imgRef"
      :class="['w-96', 'h-96', 'block']"
      src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
    />
  </div>
  <button
    @click="handleDownload"
    :class="[
      'bg-blue-500',
      'hover:bg-blue-400',
      'focus:bg-blue-400',
      'outline-sky-500',
      'active:bg-blue-300',
      'rounded',
      'py-1',
      'px-2',
      'text-white',
    ]"
  >
    download
  </button>
</template>

<style lang="scss" scoped></style>
