<script lang="ts" setup>
// Vue Imports
import { reactive, ref, watchPostEffect } from "vue";

// Utils Imports
import { toBase64 } from "@/utils";

const state = reactive({
  img: "",
});

const cvsRef = ref<HTMLCanvasElement>();
const fileRef = ref<HTMLInputElement>();

const handleFileChange = async (evt: Event) => {
  const { target } = evt;
  if (!target) return;

  const [file] = Reflect.get(target, "files") as File[];
  console.log(file);
  const dataURL = await toBase64(file);
  state.img = dataURL;
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
    <canvas ref="cvsRef"></canvas>
    <img :src="state.img" />
  </div>
</template>
