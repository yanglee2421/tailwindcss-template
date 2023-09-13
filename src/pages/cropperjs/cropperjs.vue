<script lang="ts" setup>
// CropperJs Imports
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";

// Vue Imports
import { ref, unref, watchPostEffect } from "vue";

const imgRef = ref<HTMLImageElement>();
const btnConfirmRef = ref<HTMLButtonElement>();

watchPostEffect((onClear) => {
  const img = unref(imgRef);
  if (!img) return;

  const btnConfirm = unref(btnConfirmRef);
  if (!btnConfirm) return;

  const cropper = new Cropper(img, {
    aspectRatio: 16 / 9,
  });

  btnConfirm.onclick = async () => {
    const cropedCvs = cropper.getCroppedCanvas();
    const blob = await new Promise<Blob>((res) => {
      // @ts-ignore
      cropedCvs.toBlob(res);
    });

    console.log(blob);

    // Download Image
    const href = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.download = "demo.jpeg";
    a.href = href;
    a.click();
    a.remove();
    URL.revokeObjectURL(href);
  };

  // Clear Effect
  onClear(() => {
    cropper.clear();
  });
});

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="max-w-full">
    <img
      ref="imgRef"
      class="max-w-full block"
      src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
    />
  </div>
  <button ref="btnConfirmRef">confirm</button>
</template>

<style lang="scss" scoped></style>
