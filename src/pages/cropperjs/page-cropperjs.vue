<script lang="ts" setup>
// CropperJs Imports
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";

// Vue Imports
import { ref, shallowRef, unref, watchPostEffect } from "vue";

const imgRef = ref<HTMLImageElement>();
const cropperRef = shallowRef<Cropper | null>(null);

watchPostEffect((onClear) => {
  const img = unref(imgRef);
  if (!img) return;

  cropperRef.value = new Cropper(img, {
    aspectRatio: 1,
  });

  // Clear Effect
  onClear(() => {
    const cropper = unref(cropperRef);
    cropper?.destroy();
  });
});

const handleDownload = () => {
  const cropper = unref(cropperRef);
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
      class="w-96 h-96 block"
      src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
    />
  </div>
  <button
    @click="handleDownload"
    class="bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 outline-sky-500 active:bg-blue-300 rounded py-1 px-2 text-white"
  >
    download
  </button>
</template>

<style lang="scss" scoped></style>
