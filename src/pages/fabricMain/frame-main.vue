<script lang="ts" setup>
// CropperJs Imports
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";

// Vue Imports
import * as Vue from "vue";

// Store Imports
import { useStoreFrame } from "@/hooks";

// Fabric Imports
import { fabric } from "fabric";

// Components Imports
import frameBtns from "./frame-btns.vue";

// ImageCompression Imports
import imageCompression from "browser-image-compression";

const imgRef = Vue.ref<HTMLImageElement>();
const cropperRef = Vue.shallowRef<Cropper | null>(null);

const { state } = useStoreFrame();

const handleFileChange = async (evt: Event) => {
  // Get File
  const target = evt.target;
  if (!target) return;

  const [file] = Reflect.get(target, "files");
  if (!file) return;

  // Clear Cropper
  const cropper = Vue.unref(cropperRef);
  if (cropper) {
    cropper.destroy();
    cropperRef.value = null;
    await Vue.nextTick();
  }

  // Clear Previous
  state.result = "";

  const imgSrc = await imageCompression.getDataUrlFromFile(file);
  state.upload = imgSrc;
  state.current = imgSrc;

  // Enable Cropper
  const img = Vue.unref(imgRef);
  if (!img) return;

  await new Promise((res) => (img.onload = res));

  cropperRef.value = new Cropper(img, {
    aspectRatio: 1,
  });
};

const handleConfirm = async () => {
  // Get Cropper
  const cropper = Vue.unref(cropperRef);
  if (!cropper) return;

  // Get Image Element
  const img = Vue.unref(imgRef);
  if (!img) return;

  state.loading = true;

  try {
    // Get Upload Image
    const cropedCvs = cropper.getCroppedCanvas();
    const uploadImg = await new Promise<fabric.Image>((res) => {
      fabric.Image.fromURL(cropedCvs.toDataURL(), res);
    });

    // Get Frame Image
    const frameImg = await new Promise<fabric.Image>((res) => {
      fabric.Image.fromURL(state.frame, res);
    });

    // Get Frame Text
    const text = new fabric.Text("YangLee", {
      fill: "#fff",
      fontSize: 14,
      fontFamily: Reflect.get(
        globalThis.getComputedStyle(document.documentElement),
        "fontFamily"
      ),
    });

    const group = new fabric.Group([uploadImg, frameImg, text]);

    // Scale Upload Image
    const groupWidth = group.width || 0;
    const groupHeight = group.height || 0;
    const uploadWidth = uploadImg.width || 0;
    const uploadHeight = uploadImg.height || 0;
    const uploadScaleX = groupWidth / uploadWidth;
    const uploadScaleY = groupHeight / uploadHeight;

    const imgStyle = globalThis.getComputedStyle(img);
    const imgWidth = Number.parseInt(Reflect.get(imgStyle, "width"));
    const imgHeight = Number.parseInt(Reflect.get(imgStyle, "height"));
    const textScaleX = groupWidth / imgWidth;
    const textScaleY = groupHeight / imgHeight;
    const textTop = text.top || 0;
    const textLeft = text.left || 0;

    uploadImg.set({
      width: uploadWidth * 0.95,
      scaleX: uploadScaleX,
      scaleY: uploadScaleY,
    });

    const textHeight = text.height || 0;
    const textWidth = text.width || 0;
    text.set({
      top: groupHeight + textTop - textHeight * textScaleY,
      left: groupWidth + textLeft - textWidth * textScaleX,
      scaleX: textScaleX,
      scaleY: textScaleY,
    });

    const img_data_url = group.toDataURL({});

    state.current = img_data_url;
    state.result = img_data_url;

    cropper.destroy();
    cropperRef.value = null;
  } catch (err) {
    console.error(err);
  } finally {
    state.loading = false;
  }
};
const handleBack = async () => {
  state.current = state.upload;

  const img = Vue.unref(imgRef);
  if (!img) return;

  await new Promise((res) => (img.onload = res));

  cropperRef.value = new Cropper(img, {
    aspectRatio: 1,
  });
};

defineOptions({ inheritAttrs: false });
</script>

<template>
  <!-- Tab Upload、Download、Copy、Share -->
  <div
    v-show="state.tab !== 3 && state.tab !== 5"
    class="p-3"
  >
    <div class="flex justify-center">
      <img
        ref="imgRef"
        :src="state.current"
        class="overflow-hidden w-96 !h-96"
      />
    </div>
  </div>

  <!-- Buttons -->
  <div class="my-4 flex justify-center">
    <frame-btns
      :show-confirm="!!cropperRef"
      @upload="handleFileChange"
      @confirm="handleConfirm"
      @back="handleBack"
    />
  </div>
</template>

<style lang="scss" scoped></style>
