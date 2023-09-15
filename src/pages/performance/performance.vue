<script lang="ts" setup>
// Vue Imports
import { reactive, ref, unref, watchPostEffect } from "vue";

// Utils Imports
import { toBase64 } from "@/utils";

// Assets Imports
import lake from "@/assets/image/bg/lake.jpg";

const state = reactive({
  img: "",
});

const cvsRef = ref<HTMLCanvasElement>();
const fileRef = ref<HTMLInputElement>();
const imgRef = ref<HTMLImageElement>();
const img2Ref = ref<HTMLImageElement>();

const handleFileChange = async (evt: Event) => {
  const { target } = evt;
  if (!target) return;

  const [file] = Reflect.get(target, "files") as File[];
  const dataURL = await toBase64(file);
  state.img = dataURL;

  const img = unref(imgRef);
  const img2 = unref(img2Ref);
  if (!img) return;
  if (!img2) return;

  img.onload = () => {
    const cvs = unref(cvsRef);
    if (!cvs) return;

    cvs.width = 200;
    cvs.height = 200;

    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(img2, 0, 0, 200, 200, 0, 0, 200, 200);

    ctx.drawImage(img, 0, 0, 200, 200, 0, 0, 200, 200);
  };
};

watchPostEffect(() => {});
</script>

<template>
  <h1 class="capitalize">performance</h1>
  <div class="w-96 h-96">
    <input
      ref="fileRef"
      type="file"
      accept="image/*"
      multiple="false"
      value=""
      @change="handleFileChange"
    />
    <canvas
      ref="cvsRef"
      class="border border-red-500 border-solid my-3"
    ></canvas>
    <img
      ref="imgRef"
      :src="state.img"
      class="my-3"
    />
    <img
      ref="img2Ref"
      :src="lake"
    />
  </div>
</template>
